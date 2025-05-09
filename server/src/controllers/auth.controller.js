import AsyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { prisma } from "../libs/db.js";
import bcrypt from "bcryptjs";
import { UserRole } from "../generated/prisma/index.js";
import {
  NODE_ENV,
  BASEURL,
  REFRESH_TOKEN_SECRET,
} from "../config/envConfig.js";
import imagekitUpload from "../services/imagekit.service.js";
import {
  sendEmail,
  emailVerificationMailgenContent,
  resetPasswordMailgenContent,
  accountDeletionMailgenContent,
} from "../services/maill.service.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import {
  hashPassword,
  comparePassword,
  generateToken,
  findUserByEmail,
  genrateRandomToken,
} from "../services/auth.service.js";

//cookie option
const cookiesOptions = {
  httpOnly: true,
  sameSite: "strict",
  secure: NODE_ENV !== "development",
  maxAge: 24 * 60 * 60 * 1000,
};
//OAuth2.O handler
const loginWithOAuth2UserHandler = AsyncHandler(async (req, res) => {
  const { profile } = req.user;
  const provider = profile.provider;
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [
        {
          email: profile.emails[0].value,
        },
        provider === "google"
          ? { googleId: profile.id }
          : { githubId: profile.id },
      ],
    },
  });

  if (existingUser) {
    const { accessToken, refreshToken } = await generateToken(existingUser);
    if (provider === "google" && !existingUser.googleId) {
      await prisma.user.update({
        where: {
          id: existingUser.id,
        },
        data: {
          refreshToken: refreshToken,
          googleId: profile.id,
        },
      });
    }

    if (provider === "github" && !existingUser.githubId) {
      await prisma.user.update({
        where: {
          id: existingUser.id,
        },
        data: {
          refreshToken: refreshToken,
          githubId: profile.id,
        },
      });
    }

    return res
      .status(200)
      .cookie("accessToken", accessToken, cookiesOptions)
      .cookie("refreshToken", refreshToken, cookiesOptions)
      .json(new ApiResponse(200, "User logged in successfully"));
  }

  const user = await prisma.user.create({
    data: {
      name: provider === "google" ? profile.name?.givenName : profile.username,
      email: profile.emails[0].value,
      ...(provider === "google"
        ? { googleId: profile.id }
        : { githubId: profile.id }),
      avatar: profile.photos[0].value,
      isVerified: true,
    },
  });
  if (!user) {
    throw new ApiError(500, "Failed to create user");
  }
  const { refreshToken, accessToken } = generateToken(user);

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
    .json(new ApiResponse(200, "User registered successfully"));
});

//register user handler
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
  return res
    .status(201)
    .cookie("accessToken", accessToken, cookiesOptions)
    .cookie("refreshToken", refreshToken, cookiesOptions)
    .json(new ApiResponse(201, "User registered successfully", updatedUser));
});

// verify email handler
const verifyEmailHandler = AsyncHandler(async (req, res) => {
  const { token } = req.query;

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
  if (user.isVerified) {
    throw new ApiError(400, "Email already verified");
  }

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      email: user.unverifiedEmail ? user.unverifiedEmail : user.email,
      isVerified: true,
      emailVerificationToken: null,
      emailVerificationTokenExpiry: null,
      unverifiedEmail: null,
    },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "Email verified successfully"));
});

// login user handler
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
  const shouldReactive =
    user.isDeActivated === true &&
    new Date() <= new Date(user.deletionRequestedAt);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      refreshToken: refreshToken,
      ...(shouldReactive && {
        isDeActivated: false,
        deletionRequestedAt: null,
      }),
    },
  });
  return res
    .status(200)
    .cookie("accessToken", accessToken, cookiesOptions)
    .cookie("refreshToken", refreshToken, cookiesOptions)
    .json(new ApiResponse(200, "User logged in successfully"));
});

// logout user handler
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

// get user profile handler
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

// resend email verification handler
const resendEmailVerificationHandler = AsyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  if (user.isVerified) {
    throw new ApiError(400, "Email already verified");
  }

  const { unhashedToken, hashedToken, tokenExpiry } =
    await genrateRandomToken();

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      emailVerificationToken: hashedToken,
      emailVerificationTokenExpiry: new Date(tokenExpiry),
    },
  });

  const verification_url = `${BASEURL}/auth/verify-email/?token=${unhashedToken}`;

  await sendEmail({
    email: user.email,
    subject: "Welcome to LeetLab",
    mailgenContent: emailVerificationMailgenContent({
      username: user.name,
      verificationURL: verification_url,
    }),
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "Verification email sent successfully"));
});

// forgot password handler
const forgotPasswordHandler = AsyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const { unhashedToken, hashedToken, tokenExpiry } =
    await genrateRandomToken();

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      forgotPasswordToken: hashedToken,
      forgotPasswordTokenExpiry: new Date(tokenExpiry),
    },
  });

  const verification_url = `${BASEURL}/auth/reset-password/?token=${unhashedToken}`;

  await sendEmail({
    email: user.email,
    subject: "Reset your password",
    mailgenContent: resetPasswordMailgenContent({
      username: user.name,
      verificationURL: verification_url,
    }),
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "Reset password email sent successfully"));
});

// reset password handler
const resetPasswordHandler = AsyncHandler(async (req, res) => {
  const { token } = req.query;
  const { password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    throw new ApiError(400, "Passwords do not match");
  }

  const hashedPassword = await hashPassword(password);

  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const updatedUser = await prisma.user.update({
    where: {
      forgotPasswordToken: hashedToken,
      forgotPasswordTokenExpiry: {
        gt: new Date(),
      },
    },
    data: {
      password: hashedPassword,
      forgotPasswordToken: null,
      forgotPasswordTokenExpiry: null,
    },
  });
  if (!updatedUser) {
    throw new ApiError(404, "User not found or token expired");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "Password reset successfully"));
});
// change password handler
const changePasswordHandler = AsyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { currentPassword, newPassword, confirmPassword } = req.body;

  if (newPassword !== confirmPassword) {
    throw new ApiError(400, "Passwords do not match");
  }

  const isMatch = await comparePassword(currentPassword, user.password);
  if (!isMatch) {
    throw new ApiError(400, "Current password is incorrect");
  }
  const hashedPassword = await hashPassword(newPassword);

  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: hashedPassword,
      refreshToken: null,
    },
  });

  if (!updatedUser) {
    throw new ApiError(404, "User not found");
  }

  return res
    .status(200)
    .cookie("accessToken", "", cookiesOptions)
    .cookie("refreshToken", "", cookiesOptions)
    .json(new ApiResponse(200, "Password changed successfully"));
});
// update user profile handler
const updateUserProfileHandler = AsyncHandler(async (req, res) => {
  const userId = req.user.id;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  const { name = user.name, email = user.email } = req.body;
  if (user.unverifiedEmail === email) {
    // Already in progress
    throw new ApiError(
      409,
      "Email change already requested. Please check your inbox.",
    );
  }

  if (email === user.email && name === user.name) {
    return res
      .status(200)
      .json(new ApiResponse(200, "User profile updated successfully"));
  }

  if (name !== user.name && email === user.email) {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
      },
    });

    if (!updatedUser) {
      throw new ApiError(404, "User update failed");
    }
    return res
      .status(200)
      .json(new ApiResponse(200, "User profile updated successfully"));
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new ApiError(409, "User with email already exists");
  }
  const { unhashedToken, hashedToken, tokenExpiry } =
    await genrateRandomToken();

  const verification_url = `${BASEURL}/auth/verify-email/?token=${unhashedToken}`;
  await sendEmail({
    email,
    subject: "Verify your email",
    mailgenContent: emailVerificationMailgenContent({
      username: user.name,
      verificationURL: verification_url,
    }),
  });

  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
      unverifiedEmail: email,
      emailVerificationToken: hashedToken,
      emailVerificationTokenExpiry: new Date(tokenExpiry),
      isVerified: false,
    },
  });

  if (!updatedUser) {
    throw new ApiError(404, "User update failed");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "User updated successfully"));
});

// update user avatar handler
const updateUserAvatarHandler = AsyncHandler(async (req, res) => {
  const userId = req.user.id;
  const avatar = req.file;

  if (!avatar) {
    throw new ApiError(400, "Avatar is required");
  }
  const avatarUrl = await imagekitUpload(avatar);
  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      avatar: avatarUrl,
    },
  });
  if (!updatedUser) {
    throw new ApiError(404, "Avatar update failed");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "Avatar updated successfully"));
});

// refresh access token handler
const refreshAccessTokenHandler = AsyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    throw new ApiError(401, "Refresh token missing. Unauthorized.");
  }

  let decoded;
  try {
    decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
  } catch (error) {
    throw new ApiError(401, "Invalid or expired refresh token");
  }
  const user = await prisma.user.findUnique({
    where: {
      id: decoded.id,
    },
  });
  if (!user) {
    throw new ApiError(401, "User not found");
  }
  if (user.refreshToken !== refreshToken) {
    throw new ApiError(
      401,
      "Refresh token does not match. Possible token reuse detected.",
    );
  }
  const { accessToken, newRefreshToken } = await generateToken(user);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      refreshToken: newRefreshToken,
    },
  });
  const cookiesOptions = {
    httpOnly: true,
    sameSite: "strict",
    secure: NODE_ENV !== "development",
    maxAge: 24 * 60 * 60 * 1000,
  };
  return res
    .status(200)
    .cookie("refreshToken", newRefreshToken, cookiesOptions)
    .cookie("accessToken", accessToken, cookiesOptions)
    .json(new ApiResponse(200, "Access token refreshed successfully"));
});

//user account deletation
const userAccountDeletionHandler = AsyncHandler(async (req, res) => {
  const userId = req.user.id;
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      isDeActivated: true,
      deletionRequestedAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  });

  //send mail to user
  await sendEmail({
    email: user.email,
    subject: "Account Deletion",
    mailgenContent: accountDeletionMailgenContent({
      username: user.name,
    }),
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "Account deletion requested successfully"));
});

export {
  registerUserHandler,
  loginUserHandler,
  logoutUserHandler,
  verifyEmailHandler,
  getUserProfileHandler,
  resendEmailVerificationHandler,
  forgotPasswordHandler,
  resetPasswordHandler,
  changePasswordHandler,
  updateUserProfileHandler,
  updateUserAvatarHandler,
  refreshAccessTokenHandler,
  loginWithOAuth2UserHandler,
  userAccountDeletionHandler,
};
