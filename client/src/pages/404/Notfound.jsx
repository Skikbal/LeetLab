import React from "react";
import { Link } from "react-router-dom";
import { Terminal, Braces, FileCode, Code } from "lucide-react";
import logo from "../../assets/logo.svg";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-dark-green bg-rays">
      <div className="relative w-full max-w-2xl bg-base-200/90 backdrop-blur-md rounded-2xl shadow-lg border border-base-300 p-8 overflow-hidden">
        {/* Floating code icons */}
        <div className="absolute inset-0 opacity-10 text-primary">
          {[Braces, Code, FileCode, Terminal].map((Icon, index) => (
            <Icon
              key={index}
              size={40 + index * 5}
              className="absolute animate-pulse"
              style={{
                top: `${10 + index * 20}%`,
                left: `${10 + index * 20}%`,
                animationDelay: `${index * 300}ms`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <img src={logo} alt="logo" className="w-16 h-16 mb-6" />

          <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-error to-secondary mb-4">
            404
          </h1>

          <h2 className="text-3xl font-bold text-base-content mb-4">
            Page Not Found
          </h2>

          <p className="text-lg text-base-content/80 mb-8 max-w-md">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Link
            to="/"
            className="btn bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-content"
          >
            Return Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-base-content/60">
        <p>
          Copyright © 2025 -{" "}
          <span className="font-semibold text-primary">CodeZero</span>. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
