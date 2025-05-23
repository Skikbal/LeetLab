const isVerified = async (req, res, next) => {
  const { isVerified } = req.user;
  if (!isVerified) {
    return next(
      new ApiError(401, "Unauthrize Access ! Please verify your email"),
    );
  }
  next();
};

export default isVerified;
