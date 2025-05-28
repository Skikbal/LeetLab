import React from "react";
import { SquareCheck, ListChecks } from "lucide-react";
const TestContent = ({ problem }) => {
  return (
    <div className="testCase p-4 overflow-auto no-scrollbar h-auto">
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-200">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">Test Cases</th>
              <th className="text-center">Expected Output</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(problem).length > 0 &&
              problem.testcases.map((testcase, index) => {
                return (
                  <tr key={index} className="hover:bg-base-300">
                    <td className="text-center">{testcase.input}</td>
                    <td className="text-center">{testcase.output}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestContent;
