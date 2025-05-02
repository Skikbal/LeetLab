import AsyncHandler from "../utils/AsyncHandler.js";
import { submitBatch, poolBatchResult } from "../services/judge0.service.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const executeProblemHandler = AsyncHandler(async (req, res) => {
  const { source_code, problemId, language_id, mode = "run" } = req.body;

  const problem = await prisma.problem.findUnique({
    where: {
      id: problemId,
    },
  });

  if (!problem) {
    throw new ApiError(404, "Problem not found");
  }

  //filter testcases
  const testCases = problem.testcases.filter((tc) =>
    mode === "run" ? tc.isSample === true : tc.isSample === false,
  );

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

  // Check if all the testcases passed
  for (let i = 0; i < results.length; i++) {
    if (results[i].status.id !== 3) {
      throw new ApiError(400, `Testcase ${i + 1} failed`);
    }

    //if test case passed
    const actualOutput = results[i].stdout;
    const expectedOutput = results[i].expected_output;
    console.log(actualOutput, expectedOutput);
    if (actualOutput !== expectedOutput) {
      throw new ApiError(400, `Testcase ${i + 1} failed output does not match`);
    }
  }

  if (mode === "run") {
    return res
      .status(200)
      .json(new ApiResponse(200, "All Testcases passed successfully"));
  }
});

export { executeProblemHandler };
