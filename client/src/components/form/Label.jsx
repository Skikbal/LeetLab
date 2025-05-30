import React from "react";

const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="label mb-1 text-base-content/80">
    <span className="label-text">{children}</span>
  </label>
);

export default Label;
