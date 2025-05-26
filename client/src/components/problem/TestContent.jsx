import React from "react";
import { SquareCheck, ListChecks } from "lucide-react";
const TestContent = ({ problem, testIndex, setTestIndex }) => {
  return (
    <div className="testCase p-4 overflow-auto no-scrollbar h-auto">
      <div className="flex gap-3">
        {Object.keys(problem).length > 0 &&
          problem.testcases.map((testcase, index) => {
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
            {Object.keys(problem).length > 0 &&
              problem.testcases[testIndex].input}
          </span>
        </p>
        <p className="font-semibold bg-base-200 px-2 py-2 rounded-md">
          Output:{" "}
          <span className="">
            {" "}
            {Object.keys(problem).length > 0 &&
              problem.testcases[testIndex].output}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TestContent;
