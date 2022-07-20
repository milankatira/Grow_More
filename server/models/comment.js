const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const commentSchema = new mongoose.Schema(
  {
    comment: {
      images: Array,
      text: { type: String, default: '', required: 'true' },
    },
    commentBy: { type: ObjectId, ref: 'User' },
    commentDate: { type: Date, default: Date.now },
    commentLikes: [
      {
        userId: { type: ObjectId, ref: 'User' },
        _id: false,
      },
    ],
    commentReplies: [
      {
        comment: {
          images: Array,
          text: { type: String, default: '', required: 'true' },
        },
        commentBy: { type: ObjectId, ref: 'User' },
        commentDate: { type: Date, default: Date.now },
      },
    ],
    postId: { type: ObjectId, ref: 'Post' },
    usersLikeComment: [{ likedUserId: { type: String }, _id: false }],
  },

  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Comment', commentSchema);
