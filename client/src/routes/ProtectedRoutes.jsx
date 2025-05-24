import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";
import Layout from "../layout/Layout.jsx";
const ProtectedRoutes = () => {
  const { authUser, isCheckingAuth } = useAuthStore();
  if (isCheckingAuth) return null;
  return authUser !== null ? (
      <Layout>
        <Outlet />
      </Layout>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoutes;
