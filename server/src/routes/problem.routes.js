import { Router } from "express";
import {
  createProblemHandler,
  getAllProblemsHandler,
  getProblemHandler,
  updateProblemHandler,
  deleteProblemHandler,
  getSolvedProblemsHandler,
} from "../controllers/problem.controller.js";
import isAuth from "../middlewares/isAuth.middlware.js";
import isAdmin from "../middlewares/isAdmin.middleware.js";
const problemRoutes = Router();

problemRoutes
  .route("/create-problem")
  .post(isAuth, isAdmin, createProblemHandler);

export default problemRoutes;
