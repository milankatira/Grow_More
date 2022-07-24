const express = require('express');
const {
  followingUserProfile,
} = require('../controller/followingUserController');

const router = express.Router();

const { isAuthenticUser } = require('../middleware/auth');

router.route('/followinguser/:id').post(isAuthenticUser, followingUserProfile);
module.exports = router;
