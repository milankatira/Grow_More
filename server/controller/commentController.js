const catchAsyncError = require('../middleware/catchAsyncError');
const ErrorHandler = require('../utils/errorhandler');
const { Message } = require('../constant/Message');
const Comment = require('../models/comment');

exports.createComment = catchAsyncError(async (req, res, next) => {
  const { comment } = req.body;
  if (!comment) {
    return next(new ErrorHandler('please provide comment', 400));
  }
  const commentData = await Comment.create({
    comment,
    commentBy: req.user._id,
    postId: req.params.postId,
  });
  return res
    .status(201)
    .json({ message: Message('Comment').created, commentData });
});

exports.getCommentByPostId = catchAsyncError(async (req, res, next) => {
  const comments = await Comment.find({ postId: req.params.postId });
  if (!comments) {
    return next(new ErrorHandler('No comment found', 404));
  }
  return res.status(200).json({ message: Message('Comment').get, comments });
});

exports.commentLike = catchAsyncError(async (req, res, next) => {
  const comment = await Comment.findById(req.params.commentId);
  if (!comment) {
    return next(new ErrorHandler('No comment found', 404));
  }

  if (comment.commentLikes.filter((e) => e.userId == req.user.id).length > 0) {
    return next(new ErrorHandler('You already liked this comment', 400));
  }

  comment.commentLikes.push({ userId: req.user.id });
  await comment.save();
  return res.status(200).json({ message: Message('Comment').like, comment });
});

exports.commentunLike = catchAsyncError(async (req, res, next) => {
  const comment = await Comment.findById(req.params.commentId);
  if (!comment) {
    return next(new ErrorHandler('No comment found', 404));
  }
  comment.commentLikes.pop({ userId: req.user.id });
  await comment.save();
  return res.status(200).json({ message: Message('Comment').dislike, comment });
});
