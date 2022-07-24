const catchAsyncError = require('../middleware/catchAsyncError');
const ErrorHandler = require('../utils/errorhandler');
const { Message } = require('../constant/Message');
const Post = require('../models/post');
const user = require('../models/user');
const mongoose = require('mongoose');
const Types = mongoose.Types;
const ObjectId = Types.ObjectId;

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
  const posts = await Post.aggregate([
    {
      $match: {
        postedBy: { $ne: ObjectId(req.user.id) },
      },
      // {field: {$ne: value}}
    },
    {
      $lookup: {
        from: 'comments', // table name
        localField: '_id', // field name in the current collection
        foreignField: 'postId', // field name in the other collection
        as: 'postComments',
        pipeline: [{ $sort: { createdAt: -1 } }, { $limit: 1 }],
      }, // -1 for descending order, 1 for ascending order
    },
    {
      $project: {
        likes: { userId: 1 }, // 0 not allowed, // 1 allowed
        postText: 1,
        postedBy: 1,
        usersLikePost: 1,
        postMedia: 1,
        updatedAt: 1,
        postComments: { comment: 1, commentBy: 1 },
      },
    },
  ]);

  await Post.populate(posts, {
    path: 'likes.userId',
    model: user,
    select: 'userName',
  });

  await Post.populate(posts, {
    path: 'postComments.commentBy',
    model: user,
    select: 'userName',
  });

  await Post.populate(posts, {
    path: 'postedBy',
    model: user,
    select: 'userName',
  });

  posts.forEach((d) => {
    if (d.likes && d.likes.filter(d=>d.userId._id == req.user.id)) {
      d.likebyMe = true;
    }
  });

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
