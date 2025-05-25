import React from "react";

const EditorialContent = ({ problem }) => {
  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-semibold text-nowrap">{problem?.title}</h1>
        <div className="mt-3">
          <p className="">{problem?.editorial}</p>
        </div>
      </div>
    </div>
  );
};

export default EditorialContent;
