const express = require('express');
const {
  registerUser,
  loginUser,
  getAllUsers,
} = require('../controller/userController');

const router = express.Router();

//signUp route
router.route('/register').post(registerUser);
router.route('/signin').post(loginUser);

// get all users

router.route('/getusers').get(getAllUsers);

module.exports = router;
