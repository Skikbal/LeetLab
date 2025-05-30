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
  "/forgot-password": {
    title: "Forgot Your Password?",
    description:
      "Don’t worry — this happens to everyone. Just check your inbox after submitting the form.",
  },
  "/reset-password/": {
    title: "Reset Your Password",
    description:
      "For your security, this link will expire shortly. If it doesn’t work, please request a new password reset.",
  },
};
const OnboardLayout = ({ children }) => {
  const location = useLocation();
  const meta = metaMap[location.pathname] || {
    title: "Welcome",
    description: "Get started",
  };
  return (
    <div className="h-screen grid lg:grid-cols-2 bg-gradient-dark-green bg-rays">
      <div className=" flex flex-col justify-center items-center">
        {/* <p className="text-4xl font-bold absolute top-5 left-5">CODEZERO</p> */}
        {children}
        <footer class="mt-12 mb-3 text-center text-sm opacity-70">
          Copyright © 2025 - <span class="font-semibold">CodeZero</span>. All
          rights reserved.
        </footer>
      </div>
      {/* Right Side - Image/Pattern */}
      <AuthImagePattern title={meta.title} subtitle={meta.description} />
    </div>
  );
};

export default OnboardLayout;
