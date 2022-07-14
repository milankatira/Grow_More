const express = require("express");
const { registerUser, loginUser } = require("../controller/userController");

const router = express.Router();

//signUp route
router.route("/register").post(registerUser);
router.route("/signin").post(loginUser);
module.exports = router;
