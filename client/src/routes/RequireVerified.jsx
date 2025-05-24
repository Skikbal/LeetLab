import React from "react";
import { useAuthStore } from "../store/useAuthStore.js";
import { Navigate } from "react-router-dom";
const RequireVerified = ({ children }) => {
  const { isVerified } = useAuthStore();
  console.log(isVerified)
  if (!isVerified) return <Navigate to="/" replace />;
  return children;
};

export default RequireVerified;
