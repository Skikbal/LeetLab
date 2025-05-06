import AsyncHandler from "../utils/asyncHandler.js";
import { prisma } from "../libs/db.js";
import ApiError from "../utils/ApiError.js";
import ApiRespone from "../utils/ApiResponse.js";

const getAllSubmissionsHandler = AsyncHandler(async (req, res) => {
  const userId = req.user.id;
  const submissions = await prisma.Submission.findMany({
    where: {
      userId,
    },
  });

  if (!submissions) {
    throw new ApiError(404, "Submissions not found");
  }

  return res
    .status(200)
    .json(new ApiRespone(200, "Submissions fetched successfully", submissions));
});
const getSubmissionForProblemHandler = AsyncHandler(async (req, res) => {
  const userId = req.user.id;
  const problemId = req.params.problemId;
  const submissions = await prisma.Submission.findMany({
    where: {
      userId,
      problemId,
    },
  });

  if (!submissions) {
    throw new ApiError(404, "Submissions not found");
  }

  return res
    .status(200)
    .json(new ApiRespone(200, "Submissions fetched successfully", submissions));
});
const countSubmissionForProblemHandler = AsyncHandler(async (req, res) => {
  const problemId = req.params.problemId;

  const submissionCount = await prisma.Submission.count({
    where: {
      problemId,
    },
  });

  if (!submissionCount) {
    throw new ApiError(404, "Submissions not found");
  }

  return res
    .status(200)
    .json(
      new ApiRespone(200, "Submissions fetched successfully", submissionCount),
    );
});

export {
  getAllSubmissionsHandler,
  getSubmissionForProblemHandler,
  countSubmissionForProblemHandler,
};
