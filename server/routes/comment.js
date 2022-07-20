const express = require('express');
const {
  createComment,
  getCommentByPostId,
  commentLike,
  commentunLike,
} = require('../controller/commentController');

const router = express.Router();

const { isAuthenticUser } = require('../middleware/auth');
//post Route

router
  .route('/comment/:postId')
  .get(isAuthenticUser, getCommentByPostId) // get comment by postId
  .post(isAuthenticUser, createComment); // Create Comment

// router.route('/Comment/:postId').get(isAuthenticUser, getCommentByPostId);

router.route('/likeComment/:commentId').put(isAuthenticUser, commentLike); // like comment by commentId
router.route('/dislikeComment/:commentId').put(isAuthenticUser, commentunLike); // dislike comment by commentId

module.exports = router;
