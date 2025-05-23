import React from "react";

const Label = ({children,name}) => {
  return (
    <label htmlFor={name} className="label mb-1" >
      <span className="label-text text-base-content text-base font-semibold">
        {children}
      </span>
    </label>
  );
};

export default Label;
