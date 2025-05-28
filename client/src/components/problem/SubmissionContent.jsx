import React, { useEffect } from "react";
import { useExecuteStore } from "../../store/useExecutionStore.js";
import { Tag, Timer } from "lucide-react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Loader from "../Loader.jsx";

const SubmissionContent = ({ submissions }) => {
  // const { submissionById, submissions, isFetchingSubmission } =
  //   useExecuteStore();

  // const fetchSubmission = async () => {
  //   try {
  //     await submissionById(problemId);
  //   } catch (error) {
  //     console.log("Error getting submission: ", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchSubmission();
  // }, [problemId, submissionById]);
  // console.log(isFetchingSubmission);
  // if (isFetchingSubmission) return <Loader loading={isFetchingSubmission} />

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
                    }`}
                  >
                    {submission.status}
                  </p>
                  <p className="bg-accent py-1 px-3 rounded-md text-sm">{submission.language}</p>
                  <p>{new Date(submission.createdAt).toDateString()}</p>
                </div>
                <div className="collapse-content text-sm">
                  <div className="flex flex-col gap-1 bg-base-200 rounded-md min-h-70 overflow-auto">
                    <div className="bg-base-300 border border-accent overflow-auto rounded-md p-2 h-70 min-h-50 ">
                      <pre>{submission.sourceCode}</pre>
                    </div>
                    <div className="p-4 bg-base-200 border border-accent rounded-md mt-3 space-y-2 text-sm">
                      <p>
                        <strong>Status:</strong> {submission.status}
                      </p>
                      <p>
                        <strong>Time:</strong>{" "}
                        {JSON.parse(submission.time)?.join(", ")}
                      </p>
                      <p>
                        <strong>Memory:</strong>{" "}
                        {JSON.parse(submission.memory)?.join(", ")}
                      </p>
                      <p>
                        <strong>Stdin:</strong> {submission.stdin}
                      </p>
                      <p>
                        <strong>Stdout:</strong> {submission.stdout}
                      </p>
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
