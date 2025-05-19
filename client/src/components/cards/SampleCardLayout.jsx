import React from "react";

const SampleCardLayout = ({ children,title,icon }) => {
  return (
    <div className="card bg-base-200 p-4 md:p-6 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold flex items-center gap-2">
          {icon}
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
};

export default SampleCardLayout;
