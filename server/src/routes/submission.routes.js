import { Router } from "express";
import isAuth from "../middlewares/isAuth.middlware.js";
import isVerified from "../middlewares/isUserVerified.middleware.js";
import {
  getAllSubmissionsHandler,
  getSubmissionForProblemHandler,
  countSubmissionForProblemHandler,
  successpercentage
} from "../controllers/submission.controller.js";
const submissionRoute = Router();

submissionRoute.route("/").get(isAuth,isVerified,getAllSubmissionsHandler);
submissionRoute
  .route("/:problemId")
  .get(isAuth,isVerified,getSubmissionForProblemHandler);
submissionRoute
  .route("/count-submission/:problemId")
  .get(isAuth,isVerified,countSubmissionForProblemHandler);
submissionRoute.route("/successpercentage/:problemId").get(isAuth,isVerified,successpercentage);

export default submissionRoute;
