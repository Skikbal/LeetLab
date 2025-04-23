import { Router } from "express";
import {
  registerUserHandler,
  loginUserHandler,
  logoutUserHandler,
} from "../controllers/auth.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(upload.single("avatar"), registerUserHandler);
router.route("/login").post(loginUserHandler);
router.route("/logout").post(logoutUserHandler);
// router.route("/check").get();
export default router;
