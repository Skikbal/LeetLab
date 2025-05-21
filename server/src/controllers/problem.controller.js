import AsyncHandler from "../utils/asyncHandler.js";
import { prisma } from "../libs/db.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import judge0Validator from "../services/judge0Validator.service.js";

//create problem
const createProblemHandler = AsyncHandler(async (req, res) => {
  // Get data from request body
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
    referencesolution,
  } = req.body;
  const { id: userId, role: userRole } = req.user;

  // Check user role again
  if (userRole !== "ADMIN") {
    throw new ApiError(403, "You are not authorized to create a problem");
  }

  // Here we're extracting language and code from referencesolution
  const result = await judge0Validator({ referencesolution, testcases });
  if (!result.success) {
    throw new ApiError(400, result.message);
  }

  // Create or update tags and get their records
  const tagRecords = await Promise.all(
    tags.map(async (tag) => {
      return await prisma.tag.upsert({
        where: {
          name: tag.toLowerCase(),
        },
        update: {},
        create: {
          name: tag.toLowerCase(),
        },
      });
    }),
  );
  // Here we will create the problem in our database
  const problem = await prisma.problem.create({
    data: {
      title,
      description,
      difficulty,
      examples,
      constraints,
      hints,
      editorial,
      testcases,
      codesnippets,
      referencesolution,
      userId,
      tags: {
        connect: tagRecords.map((tag) => ({
          id: tag.id,
        })),
      },
    },
    include: {
      tags: {
        select: {
          id: true,
          name: true,
        },
      },
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
  const { search, tags } = req.query;
  const tag = Array.isArray(tags)
    ? tags
    : typeof tags === "string"
      ? [tags]
      : [];
  const problems = await prisma.problem.findMany({
    where: {
      AND: [
        {
          isDeleted: false,
        },
        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          ...(tag.length > 0 && {
            tags: {
              some: {
                name: {
                  in: tag,
                },
              },
            },
          }),
        },
      ],
    },
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
      isDeleted: false,
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

  if (userRole !== "ADMIN") {
    throw new ApiError(403, "You are not authorized to update a problem");
  }

  for (const field of fieldsToCheck) {
    if (JSON.stringify(req.body[field]) !== JSON.stringify(problem[field])) {
      updateData[field] = req.body[field];
    }
  }

  const { codesnippets, referencesolution, testcases } = req.body;

  //this will strip the extra spaces and new lines
  const normalizeCode = (code) => code.replace(/\s+/g, " ").trim();
  //check if codesnippets are same or not
  const codesnippetsEquals =
    Object.entries(codesnippets).length ===
      Object.entries(problem.codesnippets).length &&
    Object.entries(codesnippets).every(
      ([language, code]) =>
        Object.hasOwn(problem.codesnippets, language) &&
        code === problem.codesnippets[language],
    );

  if (!codesnippetsEquals) {
    updateData.codesnippets = codesnippets;
  } else {
    delete updateData.codesnippets;
  }
  //check if referencesolution are same or not
  const referencesolutionEquals =
    Object.entries(referencesolution).length ===
      Object.entries(problem.referencesolution).length &&
    Object.entries(referencesolution).every(
      ([language, solution]) =>
        Object.hasOwn(problem.referencesolution, language) &&
        solution === problem.referencesolution[language],
    );

  if (!referencesolutionEquals) {
    const result = await judge0Validator({ referencesolution, testcases });
    if (result.success) {
      updateData.referencesolution = referencesolution;
    }
  } else {
    delete updateData.referencesolution;
  }

  // donot db update if updateData is empty
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

  const deletedProblem = await prisma.problem.update({
    where: {
      id,
    },
    data: {
      isDeleted: true,
    },
  });

  if (!deletedProblem) {
    throw new ApiError(404, "Error deleting problem");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "Problem deleted successfully"));
});

//bulk delete problem handler
const bulkDeleteProblemHandler = AsyncHandler(async (req, res) => {
  const problemIds = req.body.problemIds;
  const { role: userRole } = req.user;

  if (userRole !== "ADMIN") {
    throw new ApiError(403, "You are not authorized to delete a problem");
  }

  // validate if problems exist before deletion
  const problems = await prisma.problem.findMany({
    where: {
      id: {
        in: problemIds,
      },
    },
  });

  if (problems.length !== problemIds.length) {
    throw new ApiError(404, "Problem not found");
  }

  await prisma.problem.updateMany({
    where: {
      id: {
        in: problemIds,
      },
    },
    data: {
      isDeleted: true,
    },
  });
  return res
    .status(200)
    .json(new ApiResponse(200, "Problems deleted successfully"));
});
const getSolvedProblemsHandler = AsyncHandler(async (req, res) => {});

const getAllTagsHandler = AsyncHandler(async (req, res, next) => {
  const tags = await prisma.tag.findMany();
  if (!tags) {
    throw new ApiError(404, "Tags not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "Tags fetched successfully", tags));
});

export {
  createProblemHandler,
  getAllProblemsHandler,
  getProblemHandler,
  updateProblemHandler,
  deleteProblemHandler,
  bulkDeleteProblemHandler,
  getSolvedProblemsHandler,
  getAllTagsHandler,
};
