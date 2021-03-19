import React from "react";

export default function ButtonBack({ onClick }) {
  return (
    <div
      className="mb-3 bg-white flex h-10 w-10 justify-center items-center rounded-xl hover:text-orange shadow"
      onClick={onClick}
    >
      <i className="fas fa-arrow-left "></i>
    </div>
  );
}
