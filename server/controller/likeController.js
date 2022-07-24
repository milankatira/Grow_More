const catchAsyncError = require('../middleware/catchAsyncError');
const ErrorHandler = require('../utils/errorhandler');
const { Message } = require('../constant/Message');
const Like = require('../models/likes');
const user = require('../models/user');

// create like

exports.createLike = catchAsyncError(async (req, res, next) => {
  const { postId } = req.params;
  const likes = await Like.find({ postId: postId, userId: req.user.id });
  if (likes.length < 1) {
    const like = await Like.create({
        postId,
        userId: req.user._id,
        Date: Date.now(),
    });
    return res.status(201).json({ message: Message('post').like, like });
  } else {
    return next(new ErrorHandler('You already liked this post', 400));
  }
});

exports.getLike = catchAsyncError(async (req, res, next) => {
  const { postId } = req.params;
  const likes = await Like.find({ postId: postId }).populate({
    path: 'userId',
    modal: user,
    select: 'userName',
  });
  return res.status(201).json({ message: Message('post').like, likes });
});

exports.deleteLike = catchAsyncError(async (req, res, next) => {
  const { postId } = req.params;
  const likes = await Like.find({ postId: postId, userId: req.user.id });
  if (likes.length > 0) {
    await Like.findByIdAndDelete(likes[0]._id);
    return res.status(200).json({ message: Message('post').dislike });
  } else {
    return next(new ErrorHandler('You have not liked this post', 400));
  }
});
