import ApiError from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../config/env.config.js";
import { prisma } from "../libs/db.js";
const isAuth = async (req, res, next) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return next(new ApiError(401, "Access token missing. Unauthorized"));
  }
  try {
    const decoded = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        isVerified: true,
      },
    });

    if (!user) {
      return next(new ApiError(404, "Unauthorized user or user not found"));
    }
    
    req.user = user;
    next();
  } catch (error) {
    next(new ApiError(401, "Invalid or expired access token."));
  }
};

export default isAuth;
