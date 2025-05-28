import { Signup, Login, Dashboard, Forgotpassword } from "../pages/index.js";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import GuestGuard from "./GuestGuard.jsx";
import AdminRoutes from "./AdminRoutes.jsx";
import Notfound from "../pages/404/Notfound.jsx";
import AddProblem from "../pages/problem/AddProblem.jsx";
import Problems from "../pages/problem/Problems.jsx";
import ResetPassword from "../pages/auth/ResetPassword.jsx";
import MailVerification from "../pages/auth/MailVerification.jsx";
import RequireVerified from "./RequireVerified.jsx";
import ProblemEditor from "../pages/problem/ProblemEditor.jsx";
import EditProblem from "../pages/problem/EditProblem.jsx";
import Profile from "../pages/Dashboard/Profile.jsx";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<GuestGuard />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
      //ProtectedRoutes
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/problems"
          element={
            <RequireVerified>
              <Problems />
            </RequireVerified>
          }
        />
        <Route
          path="/editor/:id"
          element={
            <RequireVerified>
              <ProblemEditor />
            </RequireVerified>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireVerified>
              <Profile />
            </RequireVerified>
          }
        />
      </Route>
      <Route element={<AdminRoutes />}>
        <Route
          path="/add-problem"
          element={
            <RequireVerified>
              <AddProblem />
            </RequireVerified>
          }
        />
        <Route
          path="/problems"
          element={
            <RequireVerified>
              <Problems />
            </RequireVerified>
          }
        />
        <Route
          path="/editor/:id"
          element={
            <RequireVerified>
              <ProblemEditor />
            </RequireVerified>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <RequireVerified>
              <EditProblem />
            </RequireVerified>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireVerified>
              <Profile />
            </RequireVerified>
          }
        />
      </Route>
      <Route path="/verify-email" element={<MailVerification />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};
export default AppRoutes;
