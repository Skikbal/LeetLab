import React from "react";

const ErrorSpan = ({ error }) => {
  return (
    <label className="label">
      <span className="label-text-alt text-error">{error}</span>
    </label>
  );
};

export default ErrorSpan;
