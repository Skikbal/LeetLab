import React from "react";
import { useAuthStore } from "../../store/useAuthStore.js";
import { Code, User, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { logoutUser, authUser, isCheckingAuth } = useAuthStore();
  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.log("Error loggingout: ", error);
    }
  };
  if (isCheckingAuth) return <div>loading...</div>;
  return (
    <div className="navbar flex bg-base-100 shadow-sm justify-between">
      <div className="flex">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-1">
        <Link to="/problems">Problems</Link>
      </div>
      <div className="flex gap-2">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />{" "}
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="">
                <User className="h-5 w-5 text-primary" />
                Profile
              </a>
            </li>
            {authUser.role === "ADMIN" && (
              <li>
                <Link to={"/add-problem"}>
                  <Code className="h-5 w-5 text-primary" />
                  Add Problem
                </Link>
              </li>
            )}
            <li>
              <a>
                <Settings className="h-5 w-5 text-primary" />
                Settings
              </a>
            </li>
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
  );
};

export default Navbar;
