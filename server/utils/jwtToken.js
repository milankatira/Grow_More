const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  res
    .status(statusCode)
    .cookie('token', token, {
      expires: new Date(Date.now() + 70000000),
    })
    .json({
      success: true,
      user,
      token,
    });
};

module.exports = sendToken;
