import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
const Layout = ({ children }) => {

  return (
    <div className="h-screen bg-base-200 overflow-auto">
      <Navbar />
      <div className="px-2">{children}</div>
    </div>
  );
};

export default Layout;
