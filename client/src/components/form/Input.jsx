import React from "react";

const Input = ({ register, name, placeholder, type }) => {
  return (
    <input
      type={type}
      className="w-full input-bordered rounded px-4 py-2 bg-base-200 border-1 border-accent"
      {...register(name)}
      placeholder={placeholder}
    />
  );
};

export default Input;
