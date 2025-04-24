import AsyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { prisma } from "../libs/db.js";
import bcrypt from "bcryptjs";
import { UserRole } from "../generated/prisma/index.js";
import { NODE_ENV, BASEURL } from "../config/envConfig.js";
import imagekitUpload from "../services/imagekit.service.js";
import {
  sendEmail,
  emailVerificationMailgenContent,
} from "../services/maill.service.js";
import crypto from "crypto";

import {
  hashPassword,
  comparePassword,
  generateToken,
  findUserByEmail,
  genrateRandomToken,
} from "../services/user.service.js";

//cookie option
const cookiesOptions = {
  httpOnly: true,
  sameSite: "strict",
  secure: NODE_ENV !== "development",
  maxAge: 24 * 60 * 60 * 1000,
};

const registerUserHandler = AsyncHandler(async (req, res) => {
  const { email, password, name = null } = req.body;
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
  const { hashedToken, unhashedToken, tokenExpiry } =
    await genrateRandomToken();

  const avatar = req.file;
  let avatarUrl = null;
  if (avatar) {
    avatarUrl = await imagekitUpload(avatar);
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      refreshToken: refreshToken,
      avatar: avatarUrl,
      emailVerificationToken: hashedToken,
      emailVerificationTokenExpiry: new Date(tokenExpiry),
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  const verification_url = `${BASEURL}/auth/verify-email/?token=${unhashedToken}`;
  await sendEmail({
    email,
    subject: "Welcome to LeetLab",
    mailgenContent: emailVerificationMailgenContent({
      username: name,
      verificationURL: verification_url,
    }),
  });
  // const cookiesOptions = {
  //   httpOnly: true,
  //   sameSite: "strict",
  //   secure: NODE_ENV !== "development",
  //   maxAge: 24 * 60 * 60 * 1000,
  // };
  return res
    .status(201)
    .cookie("accessToken", accessToken, cookiesOptions)
    .cookie("refreshToken", refreshToken, cookiesOptions)
    .json(new ApiResponse(201, "User registered successfully", updatedUser));
});

const verifyEmailHandler = AsyncHandler(async (req, res) => {
  const { token } = req.query;
  console.log(token);
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const user = await prisma.user.findFirst({
    where: {
      emailVerificationToken: hashedToken,
      emailVerificationTokenExpiry: {
        gt: new Date(),
      },
    },
  });
  if (!user) {
    throw new ApiError(404, "User not found or token expired");
  }

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      isVerified: true,
      emailVerificationToken: null,
      emailVerificationTokenExpiry: null,
    },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "Email verified successfully"));
});

const loginUserHandler = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  const isPasswordCorrect = await comparePassword(password, user.password);
  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid credentials");
  }
  if (!user.isVerified) {
    throw new ApiError(401, "Email not verified");
  }

  const { accessToken, refreshToken } = await generateToken(user);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      refreshToken: refreshToken,
    },
  });
  return res
    .status(200)
    .cookie("accessToken", accessToken, cookiesOptions)
    .cookie("refreshToken", refreshToken, cookiesOptions)
    .json(new ApiResponse(200, "User logged in successfully"));
});

const logoutUserHandler = AsyncHandler(async (req, res) => {
  const userId = req.user.id;
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      refreshToken: null,
    },
  });
  res
    .status(200)
    .cookie("accessToken", cookiesOptions)
    .cookie("refreshToken", cookiesOptions)
    .json(new ApiResponse(200, "User logged out successfully"));
});

const getUserProfileHandler = AsyncHandler(async (req, res) => {
  const id = req.user.id;
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
      role: true,
    },
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "User profile fetched successfully", user));
});

export {
  registerUserHandler,
  loginUserHandler,
  logoutUserHandler,
  verifyEmailHandler,
  getUserProfileHandler,
};
