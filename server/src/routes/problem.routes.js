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

//admin routes
problemRoutes
  .route("/create-problem")
  .post(isAuth, isAdmin, createProblemHandler);

//user routes
problemRoutes.route("/all-problems").get(isAuth, getAllProblemsHandler);

export default problemRoutes;
