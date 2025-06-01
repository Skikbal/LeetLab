import React from "react";

const TextArea = ({ register, name, placeholder, className = "", error }) => {
  return (
    <div className="form-control">
      <textarea
        id={name}
        className={`textarea textarea-bordered w-full bg-base-200 border-base-300 text-base-content placeholder-base-content/50 ${className} ${
          error ? "textarea-error" : ""
        }`}
        {...register(name)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;