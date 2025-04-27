import ApiError from "../utils/ApiError.js";
const isAdmin = async (req, res, next) => {
  try {
    const { role } = req.user;
    if (role !== "ADMIN") {
      return next(
        new ApiError(403, "Access denied. Only admin users are allowed."),
      );
    }
    next();
  } catch (error) {
    next(new ApiError(401, "Error in admin middleware"));
  }
};

export default isAdmin;
