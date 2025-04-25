import { Router } from "express";
import {
  registerUserHandler,
  loginUserHandler,
  logoutUserHandler,
  verifyEmailHandler,
  getUserProfileHandler,
  forgotPasswordHandler,
  resetPasswordHandler,
  changePasswordHandler,
  updateUserProfileHandler,
  updateUserAvatarHandler,
  refreshAccessTokenHandler,
  resendEmailVerificationHandler,
} from "../controllers/auth.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import isAuth from "../middlewares/isAuth.middlware.js";

const router = Router();

//public routes
router.route("/register").post(upload.single("avatar"), registerUserHandler);
router.route("/verify-email").get(verifyEmailHandler);
router.route("/login").post(loginUserHandler);
router.route("/resend-email-verification").post(resendEmailVerificationHandler);

// protected routes
router.route("/logout").post(isAuth, logoutUserHandler);
router.route("/update-profile").post(isAuth, updateUserProfileHandler);
router.route("/user-profile").get(isAuth, getUserProfileHandler);
export default router;
