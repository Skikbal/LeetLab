import React from "react";
import ErrorSpan from "../form/ErrorSpan.jsx";
const StarterCode = ({ children, errors, language }) => {
  console.log(errors)
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body p-4 md:p-6">
        <h4 className="font-semibold text-base md:text-lg xl:text-base mb-4">
          Starter Code Template
        </h4>
        <div className="w-full border rounded-md overflow-hidden">
          {children}
        </div>
        {errors?.codesnippets?.[language] && (
          <ErrorSpan error={errors?.codesnippets?.[language]?.message} />
        )}
      </div>
    </div>
  );
};

export default StarterCode;
