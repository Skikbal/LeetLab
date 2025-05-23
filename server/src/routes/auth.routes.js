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
import isVerified from "../middlewares/isUserVerified.middleware.js";

const router = Router();

//google auth
router.route("/google").get(
  passport.authenticate("google", {
    scope: ["profile", "email"],
    accessType: "offline",
    prompt: "consent",
  }),
);
router.route("/google/callback").get(
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  loginWithOAuth2UserHandler,
);

//github auth
router.route("/github").get(
  passport.authenticate("github", {
    scope: ["user:email"],
  }),
);
router.route("/github/callback").get(
  passport.authenticate("github", {
    failureRedirect: "/login",
    session: false,
  }),
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
router.route("/verify-email/:token").get(verifyEmailHandler);
router.route("/resend-email-verification").post(resendEmailVerificationHandler);
router.route("/refresh-token").get(refreshAccessTokenHandler);
router.route("/forgot-password").post(forgotPasswordHandler);
router.route("/reset-password/:token").post(resetPasswordHandler);

// protected routes
router.route("/logout").post(isAuth, logoutUserHandler);
router.route("/user-profile").get(isAuth, getUserProfileHandler);

router
  .route("/update-profile")
  .post(isAuth, isVerified, updateUserProfileHandler);
router
  .route("/update-avatar")
  .post(isAuth, isVerified, upload.single("avatar"), updateUserAvatarHandler);
router
  .route("/change-password")
  .post(isAuth, isVerified, changePasswordHandler);
router
  .route("/delete-account")
  .delete(isAuth, isVerified, userAccountDeletionHandler);

export default router;
