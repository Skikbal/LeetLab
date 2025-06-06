import React from "react";
import AuthImagePattern from "../components/AuthImagePattern.jsx";
import { useLocation } from "react-router-dom";
import {useAuthStore} from "../store/useAuthStore.js";
import Loader from "../components/Loader.jsx";
const metaMap = {
  "/login": {
    title: "Welcome Back!",
    description: (
      <>
        Sign in to continue your journey with us.
        <br />
        Don't have an account?{" "}
        <span className="text-primary font-medium">Sign up now!</span>
      </>
    ),
  },
  "/signup": {
    title: "Welcome to CodeZero",
    description: (
      <>
        Your journey to{" "}
        <span className="text-secondary font-medium">
          infinite possibilities
        </span>{" "}
        starts here.
      </>
    ),
  },
  "/forgot-password": {
    title: "Reset Your Password",
    description: (
      <>
        No worries - we've all been there.
        <br />
        We'll send you reset instructions.
      </>
    ),
  },
  "/reset-password": {
    title: "Create New Password",
    description: (
      <>
        For your security, this link expires shortly.
        <br />
        Please complete the process now.
      </>
    ),
  },
};

const OnboardLayout = ({ children }) => {
  const { isCheckingAuth, isLoading } = useAuthStore();
  const location = useLocation();
  const meta = metaMap[location.pathname] || {
    title: "Welcome",
    description: "Begin your journey with CodeZero",
  };
  if (isCheckingAuth || isLoading)
    return <Loader variant="primary" fullScreen={true} size={40} />;
  return (
    <div className="grid lg:grid-cols-2 bg-shiny">
      {/* Left Side - Form Content */}
      <div className="flex flex-col justify-center items-center p-4 relative">
        <div className="w-full max-w-md">
          {children}
          <footer className="mt-8 text-center text-sm text-base-content/60">
            Copyright © 2025 -{" "}
            <span className="font-semibold text-primary">CodeZero</span>. All
            rights reserved.
          </footer>
        </div>
      </div>

      {/* Right Side - Visual Pattern */}
      <AuthImagePattern title={meta.title} subtitle={meta.description} />
    </div>
  );
};

export default OnboardLayout;
