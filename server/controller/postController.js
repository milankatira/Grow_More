const catchAsyncError = require('../middleware/catchAsyncError');
const ErrorHandler = require('../utils/errorhandler');
const { Message } = require('../constant/Message');
const Post = require('../models/post');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

// post create logic

exports.createPost = catchAsyncError(async (req, res, next) => {
  const { postText, postMedia, postType } = req.body;
  if (!postText && !postMedia) {
    return next(new ErrorHandler('please provide postText or postMedia', 400));
  }
  const post = await Post.create({
    postText,
    postMedia,
    postType,
    postedBy: req.user._id,
  });
  return res.status(201).json({ message: Message('Post').created, post });
});

// get post by authId

exports.getPostByAuthId = catchAsyncError(async (req, res, next) => {
  const posts = await Post.find({ postedBy: req.user.id });
  if (!posts) {
    return next(new ErrorHandler('No post found', 404));
  }
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

// like Post

exports.likePost = catchAsyncError(async (req, res, next) => {
  const post = await Post.findById(req.params.postId);

  if (post.likes.filter((e) => e.userId == req.user.id).length > 0) {
    return next(new ErrorHandler('You already liked this post', 400));
  }
  post.likes.push({ userId: req.user.id, Date: Date.now() });
  await post.save();
  return res.status(200).json({ message: Message('Post').like, post });
});

// Dislike Post

exports.dislikePost = catchAsyncError(async (req, res, next) => {
  const post = await Post.findById(req.params.postId);
  post.likes.pop({ userId: req.user.id, Date: Date.now() });
  await post.save();
  return res.status(200).json({ message: Message('Post').like, post });
});
