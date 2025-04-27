import AsyncHandler from "../utils/asyncHandler.js";
import { prisma } from "../libs/db.js";
import {
  getJudge0LanguageId,
  submitBatch,
  poolBatchResult,
} from "../services/judge0.service.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const createProblemHandler = AsyncHandler(async (req, res) => {
  //get data from re body
  const {
    title,
    description,
    difficulty,
    tags,
    examples,
    constraints,
    hints,
    editorial,
    testcases,
    codesnippets,
    refrencesolution,
  } = req.body;
  const { id: userId, role:userRole } = req.user;
  //check user role again
  if (userRole !== "ADMIN") {
    throw new ApiError(403, "You are not authorized to create a problem");
  }

  //here we extracting language and code from refrencesolution
  for (const [language, solutionCode] of Object.entries(refrencesolution)) {
    //we will find the id of the language
    const languageId = getJudge0LanguageId(language);
    if (!languageId) {
      throw new ApiError(400, `${language} is not supported`);
    }
    //we will ready the testcases for judge0 submission in batch
    const submission = testcases.map(({ input, output }) => ({
      source_code: solutionCode,
      language_id: languageId,
      stdin: input,
      expected_output: output,
    }));

    //here i will get array of of token in return from judge0
    const submissionResult = await submitBatch(submission);
    const tokenResults = submissionResult.map((res) => res.token);

    //here we will perform pooling
    const results = await poolBatchResult(tokenResults);

    //here we will loop over results and check if all the status are 3 or not
    for (let i = 0; i < results.length; i++) {
      if (results[i].status.id !== 3) {
        throw new ApiError(400, `Testcase ${i + 1} failed for ${language}`);
      }
    }
  }
  //here we will create the problem in our database
  const problem = await prisma.problem.create({
    data: {
      title,
      description,
      tags,
      difficulty,
      examples,
      constraints,
      hints,
      editorial,
      testcases,
      codesnippets,
      refrencesolution,
      userId,
    },
  });

  if (!problem) {
    throw new ApiError(400, "Problem not created");
  }

  return res.status(200).json(new ApiResponse(200, "Problem created successfully", problem));
});

const getAllProblemsHandler = AsyncHandler(async (req, res) => {});
const getProblemHandler = AsyncHandler(async (req, res) => {});
const updateProblemHandler = AsyncHandler(async (req, res) => {});
const deleteProblemHandler = AsyncHandler(async (req, res) => {});
const getSolvedProblemsHandler = AsyncHandler(async (req, res) => {});

export {
  createProblemHandler,
  getAllProblemsHandler,
  getProblemHandler,
  updateProblemHandler,
  deleteProblemHandler,
  getSolvedProblemsHandler,
};
