// components/Loader.jsx
import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = ({
  loading = true,
  size = 60,
  variant = "primary", // 'primary' | 'secondary' | 'accent'
  fullScreen = true,
  message = "Loading...",
}) => {
  // Theme-aware colors
  const colorMap = {
    primary: "oklch(var(--p))", // Your primary green
    secondary: "oklch(var(--s))", // Your secondary color
    accent: "oklch(var(--a))", // Your accent color
  };

  const loader = (
    <div
      className={`flex flex-col items-center justify-center ${
        fullScreen ? "fixed inset-0" : ""
      }`}
    >
      <div
        className={`${fullScreen ? "bg-base-100/80 backdrop-blur-sm" : ""} ${
          fullScreen ? "p-8 rounded-xl" : ""
        }`}
      >
        <BounceLoader
          color={colorMap[variant]}
          loading={loading}
          size={size}
          speedMultiplier={0.8} // Slightly slower for premium feel
        />
        {message && (
          <p className="mt-4 text-center font-medium text-base-content/80 animate-pulse">
            {message}
          </p>
        )}
      </div>
    </div>
  );

  return fullScreen ? (
    <div className="fixed inset-0 z-[100]">{loader}</div>
  ) : (
    loader
  );
};

export default Loader;
