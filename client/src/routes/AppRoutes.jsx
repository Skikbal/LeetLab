import { Signup, Login, Dashboard, Forgotpassword } from "../pages/index.js";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes.jsx";
import GuestGuard from "./GuestGuard.jsx";
import AdminRoutes from "./AdminRoutes.jsx";
import Notfound from "../pages/404/Notfound.jsx";
import AddProblem from "../pages/problem/AddProblem.jsx";
import Problems from "../pages/problem/Problems.jsx";
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
        <Route path="/problems" element={<Problems />} />
        <Route element={<AdminRoutes />}>
          <Route path="/add-problem" element={<AddProblem />} />
          {/* <Route path="/problems" element={<Problems />} /> */}
        </Route>
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};
export default AppRoutes;
