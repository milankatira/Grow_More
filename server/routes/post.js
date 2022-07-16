const express = require('express');
const {
  createPost,
  getPostByAuthId,
  deletePost,
  getPostById,
  getPostByUserId,
  getPostByPostId,
} = require('../controller/postController');
const router = express.Router();

//post Route
router.route('/postCreate').post(createPost);
// router.route('/getPostByUserId').get(getPostByUserId);
router.route('/deletePost/:postId').delete(deletePost);
// router.route('/getPostByPostId/:postId').get(getPostByPostId);

module.exports = router;

// router.get(
//   '/usersLikedPost/:postId',
//   authentication,
//   postController.usersLikedPostList,
// );

// router.route('/likeDisLikePost'.likeDisLikePost);
