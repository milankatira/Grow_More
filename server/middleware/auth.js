const jwt = require('jsonwebtoken');
const userModel = require('../models/user');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncError = require('./catchAsyncError');

exports.isAuthenticUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler('Please login to access this resource', 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);


  console.log(decodedData, 'decodedData');
  req.user = await userModel.findById(decodedData.id);

  next();
});
