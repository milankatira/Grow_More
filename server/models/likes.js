const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const likeSchema = new mongoose.Schema({
  postId: {
    type: ObjectId,
    ref: 'post',
  },
  userId: {
    type: ObjectId,
    ref: 'User',
  },
  Date: {
    type: Date,
  },
});

module.exports = mongoose.model('Like', likeSchema);
