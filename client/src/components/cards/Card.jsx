import React from "react";

const Card = ({ title, children, className }) => {
  return (
    <div
      className={`card border border-base-200 bg-base-200 w-full rounded-sm ${className}`}
    >
      <div className="card-body px-4 py-2">
        {title ? <h2 className="card-title">{title}</h2> : null}
        {children}
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
