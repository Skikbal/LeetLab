import React from "react";

const TextArea = ({ register, name, placeholder, className }) => {
  return (
    <textarea
      id={name}
      className={`rounded border border-accent w-full text-base p-4 resize-y ${className} `}
      {...register(name)}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
