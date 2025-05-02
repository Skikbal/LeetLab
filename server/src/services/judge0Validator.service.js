import {
  getJudge0LanguageId,
  submitBatch,
  poolBatchResult,
} from "./judge0.service.js";
import ApiError from "../utils/ApiError.js";
const judge0Validator = async ({ testcases, refrencesolution }) => {
  try {
    console.log(testcases,refrencesolution)
    for (const [language, solutionCode] of Object.entries(refrencesolution)) {
      const languageId = await getJudge0LanguageId(language);
      if (!languageId) {
        throw new ApiError(400, `${language} is not supported`);
      }
      // Prepare the testcases for Judge0 submission in batch
      const submission = testcases.map(({ input, output }) => ({
        source_code: solutionCode,
        language_id: languageId,
        stdin: input,
        expected_output: output,
      }));
      console.log(submission)
      // Submit the batch and get the tokens
      const submissionResult = await submitBatch(submission);
      console.log(submissionResult)
      //pool the results
      const tokens = submissionResult.map((result) => result.token);
      const results = await poolBatchResult(tokens);

      // Check if all the testcases passed
      for (let i = 0; i < results.length; i++) {
        if (results[i].status.id !== 3) {
          throw new ApiError(400, `Testcase ${i + 1} failed for ${language}`);
        }
      }
    }
    return { success: true, message: "All testcases passed" };
  } catch (error) {
    throw new ApiError(400, error);
  }
};

export default judge0Validator;
