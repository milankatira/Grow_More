const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const followingUserSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      ref: 'User',
    },
  
  
    followingUserId: {
      type: ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('FollowingUser', followingUserSchema);
