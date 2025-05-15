import { Signup, Login, Dashboard } from "../pages/index.js";
import { Routes, Route } from "react-router-dom";
import OnboardLayout from "../layout/OnboardLayout.jsx";
import ProtectedRoutes from "./protectedRoutes.jsx";
import GuestGuard from "./GuestGuard.jsx";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<GuestGuard />}>
        <Route path="/login" index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      //ProtectedRoutes
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
