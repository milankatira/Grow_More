const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    minlength: [2, "Name must be at least 2 characters"],
    maxlength: [50, "Name must be at most 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  userName: {
    type: String,
    required: [true, "Please enter your user name"],
    unique: true,
    minlength: [2, "User name must be at least 2 characters"],
    maxlength: [50, "User name must be at most 50 characters"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [8, "Password must be at least 8 characters"],
    maxlength: [50, "Password must be at most 50 characters"],
    select: false,
  },
  phone: {
    type: String,
    required: [true, "Please enter your phone number"],
    minlength: [10, "Phone number must be at least 10 characters"],
    maxlength: [13, "Phone number must be at most 13 characters"],
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
