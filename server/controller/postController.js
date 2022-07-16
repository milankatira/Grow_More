const catchAsyncError = require('../middleware/catchAsyncError');
const ErrorHandler = require('../utils/errorhandler');
const { Message } = require('../constant/Message');
const Post = require('../models/post');

// post create logic

exports.createPost = catchAsyncError(async (req, res, next) => {
  const { postText, postMedia, postType, postedBy } = req.body;
  if (!postText && !postMedia) {
    return next(new ErrorHandler('please provide postText or postMedia', 400));
  }
  const post = await Post.create({
    postText,
    postMedia,
    postType,
    postedBy,
  });
  return res.status(201).json({ message: Message('Post').created, post });
});

// get post by authId

exports.getPostByAuthId = catchAsyncError(async (req, res, next) => {
  const posts = await Post.find({ postedBy: req.user._id });
  return res.status(200).json({ message: Message('Post').get, posts });
});

// delete post by postId

exports.deletePost = catchAsyncError(async (req, res, next) => {
  if (!req.params.postId) {
    return next(new ErrorHandler('please provide postId', 400));
  }
  const post = await Post.findByIdAndDelete(req.params.postId);
  return res.status(200).json({ message: Message('Post').deleted, post });
});
