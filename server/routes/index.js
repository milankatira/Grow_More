const post = require('../routes/post');
const user = require('../routes/user');
const comment = require('../routes/comment');
const like = require('../routes/like');
const follow = require('../routes/follow');

exports.routes = {
  post,
  user,
  comment,
  like,
  follow,
};
