import { Router } from "express";
import {
  registerUserHandler,
  loginUserHandler,
  logoutUserHandler,
} from "../controllers/auth.controller.js";

const router = Router();

router.route("/register").post(registerUserHandler);
router.route("/login").post(loginUserHandler);
router.route("/logout").post(logoutUserHandler);
// router.route("/check").get();
export default router;
