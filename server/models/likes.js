const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const likeSchema = new mongoose.Schema({
  likes: [
    {
      userId: {
        type: ObjectId,
        ref: 'User',
      },
      Date: {
        type: Date,
      },
      _id: false,
    },
  ],
});

module.exports = mongoose.model('Like', likeSchema);
