import React from "react";

import { Tag, Timer } from "lucide-react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Loader from "../Loader.jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import TestResultContent from "./TestResultContent.jsx";
import SubmissionResult from "./SubmissionResult.jsx";

const SubmissionContent = ({ submissions, problemName }) => {
  return (
    <div className="p-4">
      <p className="text-xl font-semibold">Submissions</p>
      {submissions?.length === 0 ? (
        <p className="text-center mt-10 text-2xl font-medium">
          No submissions yet
        </p>
      ) : (
        <div className="join join-vertical bg-base-200 rounded-md mt-7 w-full min-w-120 z-0">
          {submissions?.map((submission) => {
            return (
              <div
                className="collapse collapse-arrow join-item border-base-300 border rounded-md w-full "
                key={submission.id}
              >
                <input type="radio" name="my-accordion-4" />
                <div className="flex items-center gap-1 collapse-title font-semibold justify-between">
                  <p
                    className={`${
                      submission.status === "ACCEPTED"
                        ? "text-success"
                        : "text-red-500"
                    } capitalize`}
                  >
                    {submission.status.toLowerCase()}
                  </p>
                  <p className="bg-base-300 py-1 px-3 rounded-md text-sm capitalize">
                    {submission.language.toLowerCase()}
                  </p>
                  <p className="text-accent/100 text-sm">{new Date(submission.createdAt).toDateString()}</p>
                </div>
                <div className="collapse-content text-sm">
                  <div className="flex flex-col bg-base-200 rounded-md">
                    {/* Editor header */}
                    <div className="bg-base-100 px-4 py-2 flex items-center rounded-t border-t border-t-accent border-r border-l border-accent">
                      <div className="flex space-x-2 mr-4 ">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-secondary"></div>
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                      </div>
                      <div className="text-xs font-mono opacity-70">
                        {problemName}.
                        {submission.language === "PYTHON"
                          ? "py"
                          : submission.language === "JAVA"
                          ? "java"
                          : "js"}
                      </div>
                    </div>
                    <div className="bg-base-300 border border-accent rounded-b-md h-100 overflow-auto">
                      <div className="w-full bg-base-300 rounded-lg shadow-md shadow-zinc-900/40 overflow-hidden relative "></div>
                      <pre className=" m-0 p-0">
                        <SyntaxHighlighter
                          language={submission.language.toLowerCase()}
                          style={vscDarkPlus}
                          lineNumberContainerStyle={true}
                          showLineNumbers={true}
                          customStyle={{
                            background: "transparent",
                            fontSize: "0.875rem",
                            height: "100%",
                            overflow: "hidden",
                          }}
                        >
                          {submission.sourceCode}
                        </SyntaxHighlighter>
                      </pre>
                    </div>
                    <div className="px-4 py-2 bg-base-200 border border-accent rounded-md mt-3 space-y-2 text-sm">
                      <SubmissionResult TestResult={submission?.testCases} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SubmissionContent;
