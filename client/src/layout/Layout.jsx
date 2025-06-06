import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import { useAuthStore } from "../store/useAuthStore.js";
import { MailCheck } from "lucide-react";
const Layout = ({ children }) => {
  const { authUser, isVerified } = useAuthStore();
  return (
    <div className="h-screen bg-rays overflow-auto">
    {/* <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-5 blur-xl animate-pulse pointer-events-none"></div> */}

      <Navbar />

      {authUser && !isVerified ? (
        <div className="fixed inset-0 bg-base-100/70 flex items-center justify-center z-50">
          <div className="flex flex-col p-7  w-150 bg-base-100 rounded-2xl items-center justify-center border border-accent">
            <div className="bg-base-300 p-4 rounded-full mb-7">
              <MailCheck className="w-15 h-15 text-primary" />
            </div>
            <h1 className="text-3xl font-semibold mb-3 text-base-content">
              📧 Your email is not verified.
            </h1>
            <p className="text-lg text-wrap text-accent text-center">
              Please check your inbox and click the verification link to unlock
              full access.
            </p>
          </div>
        </div>
      ) : (
        <div className="px-6">{children}</div>
      )}
    </div>
  );
};

export default Layout;
