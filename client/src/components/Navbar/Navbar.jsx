import React from "react";
import { useAuthStore } from "../../store/useAuthStore.js";
import { Code, User, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
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
    <nav className="sticky top-0 z-50 bg-base-100/60 backdrop-blur-md border-b border-base-content/10 px-6 md:px-8 py-3 flex items-center justify-between">
      {/* Logo + Name */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-8 h-8" />
        <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden md:inline">
          CodeZero
        </span>
      </Link>

      {/* Main Nav Links */}
      <div className="hidden md:flex gap-6 text-base font-medium">
        <Link to="/problems" className="hover:text-primary transition">
          Problems
        </Link>
        <Link to="/playlists" className="hover:text-primary transition">
          Playlists
        </Link>
        <Link to="/discuss" className="hover:text-primary transition">
          Discuss
        </Link>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        {/* Search Icon */}
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {/* Profile Avatar */}
        <div className="flex gap-3 items-center w-1/6">
          <div className="dropdown dropdown-end">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
