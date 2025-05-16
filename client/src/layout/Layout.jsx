import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <Navbar />
      <div className="px-5">{children}</div>
    </div>
  );
};

export default Layout;
