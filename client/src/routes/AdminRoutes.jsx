import React from "react";
import { useAuthStore } from "../store/useAuthStore.js";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
const AdminRoutes = () => {
  const { authUser, isCheckingAuth } = useAuthStore();
  if (isCheckingAuth) return null;
  return authUser.role === "ADMIN" ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/" replace />
  );
};

export default AdminRoutes;
