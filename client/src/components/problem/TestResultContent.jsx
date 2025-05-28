import {
  Ban,
  ChartNoAxesCombined,
  CircleCheck,
  ClipboardCheck,
  ClipboardCheckIcon,
  ClipboardX,
  Clock,
  MemoryStick,
} from "lucide-react";
import React from "react";

const TestResultContent = ({ TestResult }) => {
  const testCases = TestResult?.data?.testCases ?? [];

  const totalTestResult = testCases.length;
  const passedTestResult = testCases.filter((e) => e.passed === true).length;
  const successRate =
    totalTestResult > 0 ? (passedTestResult / totalTestResult) * 100 : 0;

  const executionTime = testCases.map(
    (e) => Number(e.time?.split(" ")[0]) || 0
  );
  const memoryUsage = testCases.map(
    (e) => Number(e.memory?.split(" ")[0]) || 0
  );

  const avgExeTime =
    executionTime.length > 0
      ? executionTime.reduce((a, b) => a + b, 0) / executionTime.length
      : 0;

  const avgMemory =
    memoryUsage.length > 0
      ? memoryUsage.reduce((a, b) => a + b, 0) / memoryUsage.length
      : 0;

  if (!TestResult || Object.keys(TestResult).length === 0) {
    return (
      <div className="flex items-center justify-center p-4 overflow-auto no-scrollbar h-auto">
        <p className="text-lg font-medium">you must run your code first</p>
      </div>
    );
  }
  return (
    <div className="testCase p-4 overflow-auto no-scrollbar h-auto">
      <div className="flex gap-5 item-center justify-between">
        <div className="bg-base-200 py-2 px-4 rounded-md">
          <p className="text-sm flex gap-1 items-center">
            <ClipboardCheckIcon className="w-4 h-4" /> Status
          </p>
          {TestResult.data.testCases.every((e) => e.passed === true) ? (
            <span className="text-success text-base font-semibold">
              ACCEPTED
            </span>
          ) : (
            <span className="text-red-500 text-base font-semibold">
              {" "}
              REJECTED
            </span>
          )}
        </div>
        <div className="bg-base-200 py-2 px-4 rounded-md">
          <p className="text-sm flex gap-1 items-center">
            <ChartNoAxesCombined className="w-4 h-4" /> Success Rate
          </p>
          {
            <span className="text-success text-base font-semibold">
              {successRate.toFixed(1) ?? 0} %
            </span>
          }
        </div>
        <div className="bg-base-200 py-2 px-3 rounded-md">
          <p className="text-sm  flex gap-1 items-center">
            <Clock className="w-4 h-4" /> Avg. Runtime
          </p>
          {
            <span className="text-success text-base font-semibold">
              {avgExeTime.toFixed(3) ?? 0} S
            </span>
          }
        </div>
        <div className="bg-base-200 py-2 px-4 rounded-md">
          <p className="text-sm flex gap-1 items-center">
            <MemoryStick className="w-4 h-4" /> Avg. Memory
          </p>
          {
            <span className="text-success text-base font-semibold">
              {Math.round(avgMemory) ?? 0} KB
            </span>
          }
        </div>
      </div>
      <p className="my-3 text-lg font-semibold">Test Cases Results</p>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-200">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Status</th>
              <th>Expected Output</th>
              <th>Your Output</th>
              <th>Memory</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(TestResult.data.testCases).length > 0 &&
              TestResult.data.testCases.map((testcase, index) => {
                return (
                  <tr key={index} className="hover:bg-base-300">
                    <td>
                      {testcase.passed === true ? (
                        <span className="text-success flex items-center gap-1">
                          <CircleCheck className="w-5 h-5" /> Accepted
                        </span>
                      ) : (
                        <span className="text-red-500 flex items-center gap-1">
                          <Ban className="w-4 h-4" /> Rejected
                        </span>
                      )}
                    </td>
                    <td className="text-center">
                      {testcase.expected ?? "undefined"}
                    </td>
                    <td className="text-center">
                      {testcase.stdout ?? "undefined"}
                    </td>
                    <td>{testcase.memory ?? "undefined"}</td>
                    <td>{testcase.time ?? "undefined"}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestResultContent;
