const express = require('express');
const { createLike, deleteLike } = require('../controller/likeController');

const router = express.Router();

const { isAuthenticUser } = require('../middleware/auth');

router
  .route('/likePost/:postId')
  .post(isAuthenticUser, createLike)
  .delete(isAuthenticUser, deleteLike);
module.exports = router;
