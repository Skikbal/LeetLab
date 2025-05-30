import React from "react";
import { useAuthStore } from "../../store/useAuthStore.js";
import { Code, User, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const regex = /^\/editor\/[a-f0-9\-]{36}$/i; // UUID v4 pattern (simple)
  const pathMatches = regex.test(location.pathname);
  const { logoutUser, authUser, isCheckingAuth } = useAuthStore();
  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.log("Error loggingout: ", error);
    }
  };
  if (isCheckingAuth) return <div>loading...</div>;
  if (pathMatches) return null;
  return (
    <>
      <div className="navbar flex bg-base-100 shadow-sm justify-between sticky top-0 z-60 border-b border-b-accent">
        <div className="flex">
          <Link to="/" className="text-2xl font-bold">
            CODEZERO
          </Link>
        </div>
        <div className="flex gap-3 items-center w-1/6">
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    authUser.avatar ||
                    "https://avatar.iran.liara.run/public/boy"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/profile"}>
                  <User className="h-5 w-5 text-primary" />
                  Profile
                </Link>
              </li>
              {authUser.role === "ADMIN" && (
                <li>
                  <Link to={"/add-problem"}>
                    <Code className="h-5 w-5 text-primary" />
                    Add Problem
                  </Link>
                </li>
              )}
              {/* <li>
                <a>
                  <Settings className="h-5 w-5 text-primary" />
                  Settings
                </a>
              </li> */}
              <li className="bg-primary rounded-sm mt-3" onClick={handleLogout}>
                <a>
                  <LogOut className="h-5 w-5 text-white" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="text-sm capitalize text-primary font-medium">{authUser?.name}</p>
            <p className=" text-accent">{authUser?.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
