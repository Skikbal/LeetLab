import React from "react";
import AuthImagePattern from "../components/AuthImagePattern.jsx";
import { useLocation } from "react-router-dom";

const metaMap = {
  "/login": {
    title: "Welcome Back!",
    description:
      "Sign in to continue your journey with us. Don't have an account? Sign up now!",
  },
  "/signup": {
    title: "Welcome to our platform!",
    description: "Sign up to access our platform and start using our services.",
  },
};
const OnboardLayout = ({ children }) => {
  const location = useLocation();
  const meta = metaMap[location.pathname];
  return (
    <div className="h-screen grid lg:grid-cols-2 bg-[#0d1117]">
      <div className="bg-[#0d1117] flex flex-col justify-center items-center">
        {children}
      </div>
      {/* Right Side - Image/Pattern */}
      <AuthImagePattern title={meta.title} subtitle={meta.description} />
    </div>
  );
};

export default OnboardLayout;
