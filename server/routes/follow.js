const express = require('express');
const {
  followingUserProfile,
  unfollowUserProfile,
} = require('../controller/followingUserController');

const router = express.Router();

const { isAuthenticUser } = require('../middleware/auth');

router
  .route('/followinguser/:id')
  .post(isAuthenticUser, followingUserProfile)
  .delete(isAuthenticUser, unfollowUserProfile);

module.exports = router;
