import React from "react";

const TestResultContent = ({ TestResult, testIndex, setTestIndex }) => {
  return TestResult === null ? (
    <div className="flex items-center justify-center p-4 overflow-auto no-scrollbar h-auto">
      <p className="text-lg font-medium">you must run your code first</p>
    </div>
  ) : (
    <div className="testCase p-4 overflow-auto no-scrollbar h-auto">
      <div className="flex gap-5 item-center">
        <p className="">
          {TestResult.data.testCases.every((e) => e.passed === true) ? (
            <span className="text-success text-base font-semibold">
              Correct Answer
            </span>
          ) : (
            <span className="text-error text-base font-semibold">
              Wrong Answer
            </span>
          )}
        </p>
        <p className="text-base font-semibold">
          Runtime: {TestResult?.data?.testCases[testIndex].time}
        </p>
      </div>

      <div className="flex gap-3 mt-3">
        {Object.keys(TestResult.data.testCases).length > 0 &&
          TestResult?.data?.testCases?.map((testcase, index) => {
            return (
              <p
                className="font-semibold bg-accent/100 px-2 py-1 rounded-md cursor-pointer hover:bg-accent/40"
                onClick={() => setTestIndex(index)}
                key={index}
              >
                Case {index + 1}
              </p>
            );
          })}
      </div>
      <div className="flex gap-3 flex-col mt-7">
        <p className="font-semibold bg-base-200 px-2 py-2 rounded-md">
          Input :{" "}
          <span className="">
            {" "}
            {Object.keys(TestResult.data.testCases).length > 0 &&
              TestResult?.data?.testCases[testIndex].stdin[testIndex]}
          </span>
        </p>
        <p className="font-semibold bg-base-200 px-2 py-2 rounded-md">
          Output:{" "}
          <span className="">
            {" "}
            {Object.keys(TestResult.data.testCases).length > 0 &&
            TestResult.data.testCases[testIndex].stdout ? (
              TestResult.data.testCases[testIndex].stdout[testIndex]
            ) : (
              <span className="text-red-500">Undefined</span>
            )}
          </span>
        </p>
        <p
          className={`font-semibold bg-base-200 px-2 py-2 rounded-md ${
            TestResult.data.testCases[testIndex].passed === true
              ? "text-success"
              : "text-red-500"
          }`}
        >
          Expected Output:{" "}
          <span className="">
            {" "}
            {Object.keys(TestResult.data.testCases).length > 0 &&
              TestResult.data.testCases[testIndex].expected}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TestResultContent;
