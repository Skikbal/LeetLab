import React from "react";

const ErrorSpan = ({ error }) => {
  return (
    <label className="label">
      <span className="label-text-alt text-wrap text-red-500">{error}</span>
    </label>
  );
};

export default ErrorSpan;
