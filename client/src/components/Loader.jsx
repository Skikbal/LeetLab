// components/Loader.jsx
import { CSSProperties } from "react";
import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = ({ loading, size = 40 }) => {
  return (
    <div className="fixed inset-0 bg-base-100/70 flex items-center justify-center z-150">
      <BounceLoader
        color="#5ca300"
        speedMultiplier={2}
        loading={loading}
        size={size}
      />
    </div>
  );
};

export default Loader;
