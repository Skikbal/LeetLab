import axios from "axios";
import { JUDGE0_API_URL } from "../config/envConfig.js";
import ApiError from "../utils/ApiError.js";
const getJudge0LanguageId = (language) => {
  const languageMap = {
    C: 50,
    "C++": 54,
    "C#": 51,
    JAVA: 62,
    JAVASCRIPT: 63,
    GO: 60,
    PYTHON: 71,
    RUST: 73,
    TYPESCRIPT: 74,
  };

  return languageMap[language.toUpperCase()] || null;
};

const submitBatch = async (submissions) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `${JUDGE0_API_URL}/submissions/batch`,
      params: {
        base64_encoded: false,
      },
      headers: {
        "Content-Type": "application/json",
      },
      data: { submissions },
    });
    return data;
  } catch (error) {
    throw new ApiError(
      400,
      "Error submitting batch",
      error.response.data.error,
    );
  }
};

const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const poolBatchResult = async (tokens) => {
  while (true) {
    const { data } = await axios({
      method: "get",
      url: `${JUDGE0_API_URL}/submissions/batch`,
      params: {
        tokens: tokens.join(","),
        base64_encoded: false,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data)
    const result = data.submissions;
    const isAllDone = result.every(
      (r) => r.status.id !== 1 && r.status.id !== 2,
    );

    if (isAllDone) return result;
    await sleep(1000);
  }
};

export { getJudge0LanguageId, submitBatch, poolBatchResult };
