const catchAsyncError = require('../middleware/catchAsyncError');
const ErrorHandler = require('../utils/errorhandler');
const { Message } = require('../constant/Message');
const user = require('../models/user');
const mongoose = require('mongoose');
const Types = mongoose.Types;
const ObjectId = Types.ObjectId;
const followingUser = require('../models/followingUser');

exports.followingUserProfile = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user.id;
  const followingUsers = await followingUser.findOne({
    userId,
    followingUserId: id,
  });
  if (followingUsers) {
    return next(new ErrorHandler('Already following', 400));
  }
 
  const newFollowingUser = await followingUser.create({
    userId: req.user.id,
    followingUserId: id,
  });
  res.status(200).json({
    message: Message('FollowingUser').get,
    newFollowingUser,
  });
});


exports.unfollowUserProfile = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user.id;
  const followingUsers = await followingUser.findOneAndDelete({
    userId,
    followingUserId: id,
  });
 
  res.status(200).json({
    message: Message('FollowingUser').get,
    followingUsers,
  });
});
