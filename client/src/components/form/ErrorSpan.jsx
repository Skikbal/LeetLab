import React from "react";

const ErrorSpan = ({ error }) => {
  if (!error) return null;
  return <p className="text-error text-sm mt-1">{error}</p>;
};

export default ErrorSpan;
