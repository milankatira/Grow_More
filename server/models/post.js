const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema(
  {
    postText: String,
    postMedia: [
      //No Need to create array's unique Id so set _id:false.
      {
        url: { type: String },
        mediaType: { type: String, enum: ['image', 'video'] },
        thumbnail: { type: String },
        _id: false,
      },
    ],
    postType: { type: String, enum: ['text', 'image', 'video'] },
    postedBy: {
      type: ObjectId,
      ref: 'User',
    },
    usersLikePost: [
      { likedUserId: { type: String }, likedDate: { type: Date }, _id: false },
    ],
  },

  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Post', postSchema);
