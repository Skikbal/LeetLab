import AsyncHandler from "../utils/asyncHandler";

const getAllSubmissionsHandle = AsyncHandler(async (req, res) => {});
const getSubmissionForProblemHandler = AsyncHandler(async (req, res) => {});
const countSubmissionForProblemHandler = AsyncHandler(async (req, res) => {});

export {
  getAllSubmissionsHandle,
  getSubmissionForProblemHandler,
  countSubmissionForProblemHandler,
};
