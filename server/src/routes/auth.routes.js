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
import { registerSchema } from "../validators/Auth.validators.js";
import validation from "../middlewares/validation.middleware.js";

const router = Router();

//public routes
router
  .route("/register")
  .post(
    upload.single("avatar"),
    validation(registerSchema),
    registerUserHandler,
  );
router.route("/verify-email").get(verifyEmailHandler);
router.route("/login").post(loginUserHandler);
router.route("/resend-email-verification").post(resendEmailVerificationHandler);
router.route("/refresh-token").get(refreshAccessTokenHandler);

// protected routes
router.route("/logout").post(isAuth, logoutUserHandler);
router.route("/update-profile").post(isAuth, updateUserProfileHandler);
router
  .route("/update-avatar")
  .post(isAuth, upload.single("avatar"), updateUserAvatarHandler);
router.route("/user-profile").get(isAuth, getUserProfileHandler);
export default router;
