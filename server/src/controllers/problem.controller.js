import AsyncHandler from "../utils/asyncHandler.js";

const createProblemHandler = AsyncHandler(async (req, res) => {
  console.log("hello");
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
