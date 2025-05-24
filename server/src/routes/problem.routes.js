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
  getAllCompaniesHandler,
} from "../controllers/problem.controller.js";
import isAuth from "../middlewares/isAuth.middlware.js";
import isAdmin from "../middlewares/isAdmin.middleware.js";
import { ProblemSchema } from "../validators/Problem.validators.js";
import validation from "../middlewares/validation.middleware.js";
import isVerified from "../middlewares/isUserVerified.middleware.js";
const problemRoutes = Router();

//admin routes
problemRoutes
  .route("/create-problem")
  .post(
    validation(ProblemSchema),
    isAuth,
    isVerified,
    isAdmin,
    createProblemHandler,
  );
problemRoutes
  .route("/update-problem/:id")
  .put(isAuth, isAdmin, isAdmin, updateProblemHandler);
problemRoutes
  .route("/delete-problem/:id")
  .delete(isAuth, isVerified, isAdmin, deleteProblemHandler);
problemRoutes
  .route("/delete-problems")
  .delete(isAuth, isVerified, isAdmin, bulkDeleteProblemHandler);
//user routes
problemRoutes
  .route("/all-problems")
  .get(isAuth, isVerified, getAllProblemsHandler);
problemRoutes
  .route("/get-problem/:id")
  .get(isAuth, isVerified, getProblemHandler);

problemRoutes.route("/tags").get(isAuth, isVerified, getAllTagsHandler);

problemRoutes
  .route("/companies")
  .get(isAuth, isVerified, getAllCompaniesHandler);

export default problemRoutes;
