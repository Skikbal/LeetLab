import React from "react";

const HeroPage = () => {
  return (
    <div className="h-screen bg-base-300">
      <div className="navbar justify-between bg-base-100/50 text-neutral-content sticky top-0">
        <button className="btn btn-ghost text-xl">logo</button>
        <div className="flex">
          <button className="btn">Create an Account</button>
          <button className="btn">Signin</button>
        </div>
      </div>
      <div className="hero min-h-screen">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="a"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect width="100%" height="100%" />
              <path
                fill="none"
                stroke="#fff"
                stroke-width=".5"
                d="M10 0v20ZM0 10h20Z"
              />
            </pattern>
          </defs>
          <rect
            width="800%"
            height="800%"
            fill="url(#a)"
            transform="translate(-11 -10)"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroPage;
