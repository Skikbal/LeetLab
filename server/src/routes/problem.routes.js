import { Router } from "express";
import {
  createProblemHandler,
  getAllProblemsHandler,
  getProblemHandler,
  updateProblemHandler,
  deleteProblemHandler,
  getSolvedProblemsHandler,
  bulkDeleteProblemHandler,
  getAllTagsHandler,
} from "../controllers/problem.controller.js";
import isAuth from "../middlewares/isAuth.middlware.js";
import isAdmin from "../middlewares/isAdmin.middleware.js";
import { ProblemSchema } from "../validators/Problem.validators.js";
import validation from "../middlewares/validation.middleware.js";
const problemRoutes = Router();

//admin routes
problemRoutes
  .route("/create-problem")
  .post(validation(ProblemSchema), isAuth, isAdmin, createProblemHandler);
problemRoutes
  .route("/update-problem/:id")
  .put(isAuth, isAdmin, updateProblemHandler);
problemRoutes
  .route("/delete-problem/:id")
  .delete(isAuth, isAdmin, deleteProblemHandler);
problemRoutes
  .route("/delete-problems")
  .delete(isAuth, isAdmin, bulkDeleteProblemHandler);
//user routes
problemRoutes.route("/all-problems").get(isAuth, getAllProblemsHandler);
problemRoutes.route("/get-problem/:id").get(isAuth, getProblemHandler);
problemRoutes.route("/tags").get(isAuth, getAllTagsHandler);

export default problemRoutes;
