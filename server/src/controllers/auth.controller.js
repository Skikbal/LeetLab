import AsyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { prisma } from "../libs/db.js";
import bcrypt from "bcryptjs";
import { UserRole } from "../generated/prisma/index.js";
import { NODE_ENV } from "../config/envConfig.js";

import {
  hashPassword,
  comparePassword,
  generateToken,
  findUserByEmail,
} from "../services/user.service.js";

const registerUserHandler = AsyncHandler(async (req, res) => {
  const { email, password, name } = req.body;

  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      role: UserRole.USER,
    },
  });

  if (!user) {
    throw new ApiError(500, "Failed to create user");
  }

  const { accessToken, refreshToken } = await generateToken(user);

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      refreshToken,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  const cookiesOptions = {
    httpOnly: true,
    sameSite: "strict",
    secure: NODE_ENV !== "development",
    maxAge: 24 * 60 * 60 * 1000,
  };

  return res
    .status(201)
    .cookie("accessToken", accessToken, cookiesOptions)
    .cookie("refreshToken", refreshToken, cookiesOptions)
    .json(new ApiResponse(201, "User registered successfully", updatedUser));
});

const loginUserHandler = (req, res) => {};

const logoutUserHandler = (req, res) => {};

export { registerUserHandler, loginUserHandler, logoutUserHandler };
