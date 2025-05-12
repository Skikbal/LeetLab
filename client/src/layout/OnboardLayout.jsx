import React from "react";
import AuthImagePattern from "../components/AuthImagePattern.jsx";

const OnboardLayout = ({ children }) => {
  return (
    <div className="h-screen grid lg:grid-cols-2 bg-[#0d1117]">
      <div className="bg-[#0d1117] flex flex-col justify-center items-center">
        {children}
      </div>
      {/* Right Side - Image/Pattern */}
      <AuthImagePattern
        title={"Welcome to our platform!"}
        subtitle={
          "Sign up to access our platform and start using our services."
        }
      />
    </div>
  );
};

export default OnboardLayout;
