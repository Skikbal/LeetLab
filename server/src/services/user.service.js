import { prisma } from "../libs/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  ACCESS_TOKEN_EXPIRY,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET,
} from "../config/envConfig.js";

// Utility to hash password before saving
export const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

//utility to compare password
export const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

//utility to generate token
export const generateToken = async (user) => {
  const AccessToken = jwt.sign(
    { id: user.id, role: user.role },
    ACCESS_TOKEN_SECRET,
    {
      ACCESS_TOKEN_EXPIRY,
    },
  );

  const RefreshToken = jwt.sign(
    { id: user.id, role: user.role },
    REFRESH_TOKEN_SECRET,
    {
      REFRESH_TOKEN_EXPIRY,
    },
  );

  return {
    accessToken: AccessToken,
    refreshToken: RefreshToken,
  };
};

//utility to find user
export const findUserByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return user;
};
