const User = require('../models/user');
const dotenv = require('dotenv');
const catchAsyncError = require('../middleware/catchAsyncError');
const ErrorHandler = require('../utils/errorhandler');
const sendToken = require('../utils/jwtToken');
const { Message } = require('../constant/Message');
const { getTokenForEmailVarification } = require('../helpers/auth');

dotenv.config({ path: '../config/config.env' });

// signUp Controller

exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { userName, name, email, password, phone } = req.body;
  const user = await User.create({
    userName,
    name,
    email,
    password,
    phone,
  });
  sendToken(user, 201, res);
});

// Login Controller

exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler('please provide email and password', 400));
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    return next(new ErrorHandler('email or password is incorrect', 400));
  }
  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    return next(new ErrorHandler('email or password is incorrect', 400));
  }
  sendToken(user, 200, res);
});

// get Users

exports.getAllUsers = catchAsyncError(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    message: Message('Users').get,
    users,
  });
});
