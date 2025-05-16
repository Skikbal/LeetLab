import { Signup, Login, Dashboard, Forgotpassword } from "../pages/index.js";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes.jsx";
import GuestGuard from "./GuestGuard.jsx";
import AdminRoutes from "./AdminRoutes.jsx";
import Problem from "../pages/problem/Problem.jsx";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<GuestGuard />}>
        <Route path="/login" index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
      </Route>
      //ProtectedRoutes
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
      <Route element={<AdminRoutes />}>
        <Route path="/add-problem" element={<Problem />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
