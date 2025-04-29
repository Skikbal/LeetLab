import AsyncHandler from "../utils/asyncHandler.js";
import { prisma } from "../libs/db.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import judge0Validator from "../services/judge0Validator.service.js";

//create problem
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
  const { id: userId, role: userRole } = req.user;
  //check user role again
  if (userRole !== "ADMIN") {
    throw new ApiError(403, "You are not authorized to create a problem");
  }

  //here we extracting language and code from refrencesolution
  const result = await judge0Validator({ refrencesolution, testcases });
  console.log(result);
  if (!result.success) {
    throw new ApiError(400, result.message);
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

  return res
    .status(200)
    .json(new ApiResponse(200, "Problem created successfully", problem));
});

//get all problems
const getAllProblemsHandler = AsyncHandler(async (req, res) => {
  const problems = await prisma.problem.findMany({
    select: {
      id: true,
      title: true,
      difficulty: true,
      tags: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!problems) {
    throw new ApiError(404, "Problems not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Problems fetched successfully", problems));
});
//get single problem by id
const getProblemHandler = AsyncHandler(async (req, res) => {
  const { id } = req.params;

  const problem = await prisma.problem.findUnique({
    where: {
      id,
    },
  });

  if (!problem) {
    throw new ApiError(404, "Problem not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Problem fetched successfully", problem));
});
//update problem handler
const updateProblemHandler = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  const problem = await prisma.problem.findUnique({
    where: {
      id,
    },
  });

  if (!problem) {
    throw new ApiError(404, "Problem not found");
  }
  const { id: userId, role: userRole } = req.user;
  let updateData = {};
  const fieldsToCheck = [
    "title",
    "description",
    "difficulty",
    "tags",
    "examples",
    "constraints",
    "hints",
    "editorial",
    "testcases",
  ];
  const { testcases, codesnippets, refrencesolution } = req.body;

  if (userRole !== "ADMIN") {
    throw new ApiError(403, "You are not authorized to update a problem");
  }

  for (const field of fieldsToCheck) {
    if (JSON.stringify(req.body[field]) !== JSON.stringify(problem[field])) {
      updateData[field] = req.body[field];
    }
  }
  //this will strip the extra spaces and new lines
  const normalizeCode = (code) => code.replace(/\s+/g, " ").trim();
  //check if codesnippets are same or not
  const codesnippetsEquals =
    codesnippets.length === problem.codesnippets.length &&
    codesnippets.every((snippet, index) => {
      const problemSnippet = problem.codesnippets[index];
      return (
        normalizeCode(snippet.language) ===
          normalizeCode(problemSnippet.language) &&
        normalizeCode(snippet.code) === normalizeCode(problemSnippet.code)
      );
    });
  if (!codesnippetsEquals) {
    updateData.codesnippets = codesnippets;
  } else {
    delete updateData.codesnippets;
  }
  //check if refrencesolution are same or not
  const refrencesolutionEquals =
    Object.keys(refrencesolution).length ===
      Object.keys(problem.refrencesolution).length &&
    Object.keys(refrencesolution).every(
      (language) =>
        Object.hasOwn(problem.refrencesolution, language) &&
        normalizeCode(refrencesolution[language]) ===
          normalizeCode(problem.refrencesolution[language]),
    );
  if (!refrencesolutionEquals) {
    const result = await judge0Validator({ refrencesolution, testcases });
    if (result.success) {
      updateData.refrencesolution = refrencesolution;
    }
  } else {
    delete updateData.refrencesolution;
  }
  //donot db update if updateData is empty
  if (Object.entries(updateData).length === 0) {
    return res
      .status(200)
      .json(new ApiResponse(200, "Problem updated Successfully"));
  }

  //here we will update the data
  const updatedProblem = await prisma.problem.update({
    where: {
      id,
    },
    data: { ...updateData, userId },
  });

  if (!updatedProblem) {
    throw new ApiError(404, "Error updating problem");
  }
  return res.status(200).json({
    success: true,
    message: "Problem updated successfully",
    data: updatedProblem,
  });
});

//delete problem handler
const deleteProblemHandler = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { role: userRole } = req.user;

  if (userRole !== "ADMIN") {
    throw new ApiError(403, "You are not authorized to delete a problem");
  }

  const problem = await prisma.problem.findUnique({
    where: {
      id,
    },
  });

  if (!problem) {
    throw new ApiError(404, "Problem not found");
  }

  const deletedProblem = await prisma.problem.delete({
    where: {
      id,
    },
  });

  if (!deletedProblem) {
    throw new ApiError(404, "Error deleting problem");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "Problem deleted successfully"));
});
const getSolvedProblemsHandler = AsyncHandler(async (req, res) => {
  
});

export {
  createProblemHandler,
  getAllProblemsHandler,
  getProblemHandler,
  updateProblemHandler,
  deleteProblemHandler,
  getSolvedProblemsHandler,
};
