import AsyncHandler from "../utils/AsyncHandler.js";
import {
  submitBatch,
  poolBatchResult,
  getLanguageName,
} from "../services/judge0.service.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { prisma } from "../libs/db.js";
import e from "express";

const executeProblemHandler = AsyncHandler(async (req, res) => {
  const { id: userId } = req.user;
  const { source_code, problemId, language_id, mode } = req.body;

  const problem = await prisma.problem.findUnique({
    where: {
      id: problemId,
    },
  });

  if (!problem) {
    throw new ApiError(404, "Problem not found");
  }

  //filter testcases if run mode
  const testCases = problem.testcases.filter((tc) =>
    mode === "run" ? tc.isSample === true : true,
  );

  //stdin array
  const stdIn = testCases.map((test) => {
    return `${test.input}`;
  });

  if (!Array.isArray(testCases) || testCases.length === 0) {
    return res.status(400).json({ message: "Invalid or missing test cases" });
  }

  //prepare our submission
  const submission = testCases.map(({ input, output }) => ({
    source_code,
    language_id,
    stdin: input,
    expected_output: output,
  }));
  //batch submission
  const submissionResult = await submitBatch(submission);
  const tokens = submissionResult.map((result) => result.token);
  const results = await poolBatchResult(tokens);

  let isAllCasesPassed = true;

  const detailedResult = results.map((result, index) => {
    const stdOut = result.stdout?.trim();
    const expectedOutput = result.expected_output?.trim();
    const passed = stdOut === expectedOutput;

    if (!passed) isAllCasesPassed = false;

    return {
      testCase: index + 1,
      passed: passed,
      stdout: stdOut,
      expected: expectedOutput,
      stderr: result.stderr || null,
      compiledOutput: result.compile_output || null,
      status: result.status.description,
      memory: result.memory ? `${result.memory} KB` : undefined,
      time: result.time ? `${result.time} SEC` : undefined,
    };
  });

  if (!isAllCasesPassed) {
    throw new ApiError(400, `Testcase failed output does not match`);
  }

  if (mode === "run") {
    //save individual testcases result
    const testCaseResult = detailedResult.map((r) => {
      return {
        testCase: r.testCase,
        passed: r.passed,
        stdout: r.stdout,
        expected: r.expected,
        stderr: r.stderr,
        compiledOutput: r.compiledOutput,
        status: r.status,
        memory: r.memory,
        time: r.time,
      };
    });

    return res
      .status(200)
      .json(
        new ApiResponse(200, "Testcases executed successfully", testCaseResult),
      );
  }

  //store submission summary
  const submissionToDB = await prisma.Submission.create({
    data: {
      userId,
      problemId,
      sourceCode: source_code,
      language: getLanguageName(language_id),
      stdin: JSON.stringify(stdIn),
      stdout: JSON.stringify(detailedResult.map((r) => r.stdout)),
      stderr: detailedResult.some((r) => r.stderr)
        ? JSON.stringify(detailedResult.map((r) => r.stderr))
        : null,
      compileOutput: detailedResult.some((r) => r.compile_output)
        ? JSON.stringify(detailedResult.map((r) => r.compile_output))
        : null,
      status: isAllCasesPassed ? "ACCEPTED" : "REJECTED",
      memory: detailedResult.some((r) => r.memory)
        ? JSON.stringify(detailedResult.map((r) => r.memory))
        : null,
      time: detailedResult.some((r) => r.time)
        ? JSON.stringify(detailedResult.map((r) => r.time))
        : null,
    },
  });

  //if all passed and submission db then we make it mark as done
  if (isAllCasesPassed && submissionToDB) {
    await prisma.problemSolved.upsert({
      where: {
        userId_problemId: {
          userId,
          problemId,
        },
      },
      update: {},
      create: {
        userId,
        problemId,
      },
    });
  }
  //save individual testcases result
  const testCaseResult = detailedResult.map((r) => {
    return {
      submissionId: submissionToDB.id,
      testCase: r.testCase,
      passed: r.passed,
      stdout: r.stdout,
      expected: r.expected,
      stderr: r.stderr,
      compiledOutput: r.compiledOutput,
      status: r.status,
      memory: r.memory,
      time: r.time,
    };
  });
  await prisma.TestCasesResult.createMany({
    data: testCaseResult,
  });

  const fetchedTestCases = await prisma.Submission.findUnique({
    where: {
      id: submissionToDB.id,
    },
    include: {
      testCases: true,
    },
  });
  if (!fetchedTestCases) {
    throw new ApiError(
      500,
      "Something went wrong while saving test case result",
    );
  }
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        "All Testcases passed successfully",
        fetchedTestCases,
      ),
    );
});

export { executeProblemHandler };
