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
  loginWithOAuth2UserHandler,
  userAccountDeletionHandler,
} from "../controllers/auth.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import isAuth from "../middlewares/isAuth.middlware.js";
import { registerSchema } from "../validators/Auth.validators.js";
import validation from "../middlewares/validation.middleware.js";
import passport from "passport";
import {
  loginRateLimit,
  loginAttemtHandler,
} from "../middlewares/rate-limiters/index.js";

const router = Router();

//google auth
router.route("/google").get(
  passport.authenticate("google", {
    scope: ["profile", "email"],
    accessType: "offline",
    prompt: "consent",
  }),
);
router
  .route("/google/callback")
  .get(
    passport.authenticate("google", { session: false }),
    loginWithOAuth2UserHandler,
  );

//github auth
router.route("/github").get(
  passport.authenticate("github", {
    scope: ["user:email"],
  }),
);
router
  .route("/github/callback")
  .get(
    passport.authenticate("github", { session: false }),
    loginWithOAuth2UserHandler,
  );

//public routes
router
  .route("/register")
  .post(
    upload.single("avatar"),
    validation(registerSchema),
    registerUserHandler,
  );
router
  .route("/login")
  .post(loginRateLimit, loginAttemtHandler, loginUserHandler);
router.route("/verify-email").get(verifyEmailHandler);
router.route("/resend-email-verification").post(resendEmailVerificationHandler);
router.route("/refresh-token").get(refreshAccessTokenHandler);
router.route("/forgot-password").post(forgotPasswordHandler);
router.route("/reset-password").post(resetPasswordHandler);

// protected routes
router.route("/logout").post(isAuth, logoutUserHandler);
router.route("/update-profile").post(isAuth, updateUserProfileHandler);
router
  .route("/update-avatar")
  .post(isAuth, upload.single("avatar"), updateUserAvatarHandler);
router.route("/user-profile").get(isAuth, getUserProfileHandler);
router.route("/change-password").post(isAuth, changePasswordHandler);
router.route("/delete-account").delete(isAuth, userAccountDeletionHandler);

export default router;
