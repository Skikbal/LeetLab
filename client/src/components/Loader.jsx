// components/Loader.jsx
import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = ({ loading = true, size = 40 }) => {
  return (
    <div className="fixed inset-0 bg-base-100/70 flex items-center justify-center z-50">
      <BounceLoader color="#5ca300" speedMultiplier={1} loading={loading} size={size}/>
    </div>
  );
};

export default Loader;
