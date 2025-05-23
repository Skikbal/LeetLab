import React from "react";
import { useAuthStore } from "../store/useAuthStore.js";
import { Outlet, Navigate } from "react-router-dom";
import OnboardLayout from "../layout/OnboardLayout.jsx";
const GuestGuard = () => {
  const { authUser, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) return null;
  return authUser === null ? (
    <OnboardLayout>
      <Outlet />
    </OnboardLayout>
  ) : (
    <Navigate to="/" replace />
  );
};

export default GuestGuard;
