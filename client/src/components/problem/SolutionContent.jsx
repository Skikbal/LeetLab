import React from "react";
const SolutionContent = ({ problem }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-nowrap">{problem?.title}</h1>
      {Object.entries(problem?.referencesolutions).map(
        ([language, code], index) => {
          return (
            <div key={index}>
              <p className="mt-3 mb-2 font-medium ">{language}</p>
              <div className="bg-base-200 p-3 rounded-md text-sm w-full min-w-120" key={language}>
                <pre>{code}</pre>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default SolutionContent;
