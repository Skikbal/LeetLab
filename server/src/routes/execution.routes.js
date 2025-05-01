import { Router } from "express";
import isAuth from "../middlewares/isAuth.middlware.js";
import {executeProblemHandler} from "../controllers/execution.controller.js";

const executionRoutes = Router();

executionRoutes.route("/").post(isAuth, executeProblemHandler);
export default executionRoutes;
