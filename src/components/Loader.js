import React from "react";

export const Loader = () => {
  return (
    <div className="text-center">
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
