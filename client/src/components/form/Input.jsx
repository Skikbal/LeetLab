import React from "react";

const Input = ({
  id,
  type = "text",
  register,
  placeholder,
  icon: Icon,
  error,
  showPasswordToggle = false,
  onTogglePassword,
  isPasswordVisible,
  name,
}) => (
  <div className="relative">
    <input
      id={id}
      type={type}
      {...register(name)}
      placeholder={placeholder}
      className={`
        w-full bg-base-200 border border-base-300 focus:border-primary 
        rounded-lg px-4 py-2 text-white 
        ${error ? "border-error focus:border-error" : ""}
        ${Icon ? "pl-10" : ""}
      `}
    />
    {Icon && (
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-70">
        <Icon className="h-5 w-5 text-base-content/40" />
      </span>
    )}
    {showPasswordToggle && (
      <button
        type="button"
        onClick={onTogglePassword}
        className="cursor-pointer absolute inset-y-0 right-0 pr-3 flex items-center"
      >
        {isPasswordVisible}
      </button>
    )}
  </div>
);

export default Input;
