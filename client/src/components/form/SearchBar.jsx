import React from "react";

const SearchBar = ({ onChange, value, className = "", placeholder }) => {
  return (
    <label className={`input input-bordered flex items-center gap-2 bg-base-200 border-base-300 ${className}`}>
      <svg
        className="w-4 h-4 opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        type="search"
        className="grow bg-transparent focus:outline-none"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

export default SearchBar;