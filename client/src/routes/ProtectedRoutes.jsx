import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";
import Layout from "../layout/Layout.jsx";
const ProtectedRoutes = () => {
  const { authUser } = useAuthStore();
  console.log(authUser);
  return authUser !== null ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoutes;
