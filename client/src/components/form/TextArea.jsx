import React from "react";

const TextArea = ({ register, name, placeholder, className }) => {
  return (
    <textarea
      className={`rounded border border-accent bg-base-200 w-full text-base p-4 resize-y ${className} `}
      {...register(name)}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
