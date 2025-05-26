import { Router } from "express";
import isAuth from "../middlewares/isAuth.middlware.js";
import {executeProblemHandler} from "../controllers/execution.controller.js";
import isUserVerified from "../middlewares/isUserVerified.middleware.js";
const executionRoutes = Router();

executionRoutes.route("/").post(isAuth,isUserVerified, executeProblemHandler);
export default executionRoutes;
