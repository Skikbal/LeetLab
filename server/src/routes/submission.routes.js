import { Router } from "express";
import isAuth from "../middlewares/isAuth.middlware.js";
import {
  getAllSubmissionsHandler,
  getSubmissionForProblemHandler,
  countSubmissionForProblemHandler,
} from "../controllers/submission.controller.js";
const submissionRoute = Router();

submissionRoute.route("/").get(isAuth, getAllSubmissionsHandler);
submissionRoute
  .route("/problem/:problemId")
  .get(isAuth, getSubmissionForProblemHandler);
submissionRoute
  .route("/count-submission/:problemId")
  .get(isAuth, countSubmissionForProblemHandler);

export default submissionRoute;
