import { Router } from "express";
import {
  registerUserHandler,
  loginUserHandler,
  logoutUserHandler,
  verifyEmailHandler,
} from "../controllers/auth.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import isAuth from "../middlewares/isAuth.middlware.js";

const router = Router();

router.route("/register").post(upload.single("avatar"), registerUserHandler);
router.route("/verify-email").get(verifyEmailHandler);
router.route("/login").post(loginUserHandler);
router.route("/logout").post(isAuth, logoutUserHandler);
// router.route("/check").get();
export default router;
