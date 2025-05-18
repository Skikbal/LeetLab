import React from "react";
import Card from "../cards/Card.jsx";
const Examples = ({sampleData,language}) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body p-4 md:p-6">
        <h4 className="font-semibold text-base md:text-lg xl:text-base mb-4">Example</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="form-control">
            <label className="label mb-1">
              <span className="label-text font-medium text-base-content">
                Input
              </span>
            </label>
            <Card>
              {sampleData?.examples?.[language]?.input && (
                <p>{sampleData?.examples?.[language]?.input}</p>
              )}
            </Card>
          </div>
          <div className="form-control">
            <label className="label mb-1">
              <span className="label-text font-medium text-base-content">
                Output
              </span>
            </label>
            <Card>
              {sampleData?.examples?.[language]?.output && (
                <p>{sampleData?.examples?.[language]?.output}</p>
              )}
            </Card>
          </div>
          <div className="form-control md:col-span-2">
            <label className="label mb-1">
              <span className="label-text font-medium text-base-content">
                Explanation
              </span>
            </label>
            <Card>
              {sampleData?.examples?.[language]?.explanation && (
                <p>{sampleData?.examples?.[language].explanation}</p>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;
