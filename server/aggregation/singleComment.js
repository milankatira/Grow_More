const Post = require('../models/post');
const Comment = require('../models/comment');
const User = require('../models/user');
const mongoose = require('mongoose');
const Types = mongoose.Types;
const ObjectId = Types.ObjectId;

exports.getSingleComment = async (userId) => {
  Post.aggregate([
    {
      $match: {
        userId: ObjectId(userId),
      },
    },
    {
      $lookup: {
        from: 'Comment',
        localField: '_id',
        foreignField: 'postId',
        as: 'postComments',
      },
    },
    // {
    //   $unwind: '$postComments',
    // },
    // {
    //   $addFields: {
    //     //    "postComments.addUpdatedDate": { "$add": [ "$postComments.updatedDate", 365*24*60*60000 ] },
    //     'usersPosts._id': '$_id',
    //     'usersPosts.postText': '$postText',
    //     'usersPosts.postMedia': '$postMedia',
    //     'usersPosts.postDateTime': '$postDateTime',
    //     'usersPosts.postType': '$postType',
    //     'usersPosts.userId': '$userId',
    //     'usersPosts.likesCount': { $size: '$usersLikePost' },
    //     'usersPosts.likePost': { $in: [userId, '$usersLikePost.likedUserId'] },
    //     'usersPosts.createdDate': '$createdDate',
    //     'usersPosts.isUserOwnPost': true,
    //   },
    // },
    // {
    //   $redact: {
    //     $cond: [
    //       {
    //         $ne: ['$postComments.userId', ObjectId(userId)],
    //       },
    //       '$$KEEP',
    //       '$$PRUNE',
    //     ],
    //   },
    // },
    // // {
    // //     "$redact": {
    // //         "$cond": [
    // //            {
    // //               "$gte": ["$postComments.addUpdatedDate", new Date().getTime()]

    // //             },
    // //              "$$KEEP",
    // //              "$$PRUNE"
    // //         ]
    // //     }
    // // },
    // {
    //   $lookup: {
    //     from: 'users',
    //     localField: 'postComments.userId',
    //     foreignField: '_id',
    //     as: 'usersData',
    //   },
    // },
    // {
    //   $unwind: '$usersData',
    // },
    {
      $sort: {
        'postComments.createdDate': -1,
      },
    },
    {
      $project: {
        usersPosts: 1,
        'postComments._id': 1,
        'postComments.userId': 1,
        'postComments.comment': 1,
        'postComments.postId': 1,
        'postComments.postCommentDateTime': 1,
        'postComments.createdDate': 1,
        'usersData._id': 1,
        'usersData.username': 1,
        'usersData.name': 1,
        'usersData.profileImg': 1,
        'usersData.email': 1,
        'usersData.isPrivate': 1,
        'usersData.isVerified': 1,
        'usersData.userDescription': 1,
        'usersData.isCountryDisplay': 1,
        'usersData.country': 1,
        'usersData.isPremiumUser': 1,
      },
    },
  ])
    .then((res) => {
      console.log('res for postcomment', res);
      resolve(res);
    })
    .catch((error) => {
      console.log('error from the aggregation', error);
      reject(error);
    });
  // })
};
