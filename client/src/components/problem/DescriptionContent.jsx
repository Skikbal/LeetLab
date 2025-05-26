import React from "react";
import { Tag, Lightbulb, Lock, Building2 } from "lucide-react";
const DescriptionContent = ({ problem }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-nowrap">{problem?.title}</h1>
      <div className="flex gap-2 my-3">
        <div className="badge rounded-xl bg-accent cursor-pointer capitalize text-warning font-medium">
          {problem?.difficulty?.toLowerCase()}
        </div>
        {problem?.tags?.length > 0 ? (
          <div className="badge rounded-xl bg-accent cursor-pointer capitalize text-warning font-medium">
            <>
              <Tag className="h-3.5 w-3.5" /> Topics
            </>
          </div>
        ) : null}

        {problem?.companies?.length > 0 ? (
          <div className="badge rounded-xl bg-accent cursor-pointer capitalize text-warning font-medium">
            <>
              <Lock className="h-3 w-3" /> Companies
            </>
          </div>
        ) : null}

        {problem?.hints ? (
          <div className="badge rounded-xl bg-accent cursor-pointer capitalize text-warning font-medium">
            <>
              <Lightbulb className="h-4 w-4" /> Hints
            </>
          </div>
        ) : null}
      </div>
      <div className="text-justify text-nowrap">
        <p className="text-wrap">{problem?.description}</p>
      </div>
      <div className="flex flex-col mt-10 gap-3">
        {Object.entries(problem?.examples).map(([language, example], index) => {
          return (
            <div
              className="bg-base-200 rounded-md p-2 text-nowrap min-w-120 w-full"
              key={language}
            >
              <p className="font-semibold mb-1 text-warning">
                Eaxmple{" " + (index + 1)}
              </p>
              <p className="font-semibold">Input :{" " + example?.input}</p>
              <p className="font-semibold">Output :{" " + example?.output}</p>
              <p className="font-semibold text-wrap">
                Explanation : <br></br>
                {example?.explanation}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-7 p-2 min-w-120 w-full">
        <h1 className="text-md font-semibold">Constraints: </h1>
        <ol className="mt-2 bg-base-200 p-5 rounded-md list-disc">
          {problem?.constraints.map((constraint, index) => {
            return <li className="mb-1 ml-5" key={index}>{constraint}</li>;
          })}
        </ol>
      </div>
      <div className="join join-vertical bg-base-200 rounded-md mt-7 w-full min-w-120">
        <div className="collapse collapse-arrow join-item border-base-300 border rounded-md w-full">
          <input type="radio" name="my-accordion-4" />
          <div className="flex items-center gap-1 collapse-title font-semibold">
            <Tag className="h-4 w-4" /> Topics
          </div>
          <div className="collapse-content text-sm">
            {problem?.tags?.map((tag) => {
              return (
                <div
                  className="badge badge-md text-base-content  font-medium rounded-3xl p-2 cursor-pointer text-sm bg-accent mx-1"
                  key={tag.id}
                >
                  {tag.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="flex items-center gap-1 collapse-title font-semibold">
            <Building2 className="h-4 w-4" /> Companies
          </div>
          <div className="collapse-content text-sm">
            {problem?.companies?.map((company) => {
              return (
                <div
                  className="badge badge-md text-base-content  font-medium rounded-3xl p-2 cursor-pointer text-sm bg-accent mx-1"
                  key={company.id}
                >
                  {company.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="flex items-center gap-1 collapse-title font-semibold">
            <Lightbulb className="h-4 w-4" /> Hints
          </div>
          <div className="collapse-content text-sm">{problem?.hints}</div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionContent;
