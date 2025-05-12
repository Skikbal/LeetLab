import { Signup, Login, Dashboard } from "../pages/index.js";
import { Routes, Route } from "react-router-dom";
import OnboardLayout from "../layout/OnboardLayout.jsx";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" index element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
export default AppRoutes;
