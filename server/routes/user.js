const express = require("express");
const {
  registerUser,
  loginUser,
  Myprofile,
} = require('../controller/userController');

const router = express.Router();
const { isAuthenticUser } = require('../middleware/auth');

//signUp route
router.route("/register").post(registerUser);
router.route("/signin").post(loginUser);
router.route('/myProfile').get(isAuthenticUser, Myprofile);
module.exports = router;
