import React from "react";

const Cards = ({ children,className }) => {
  return (
    <div className={`mx-0 py-8 px-4 ${className}`}>
      <div className="card shadow-xl bg-base-100 border">
        <div className="card-body p-6 md:p-6">{children}</div>
      </div>
    </div>
  );
};

export default Cards;
