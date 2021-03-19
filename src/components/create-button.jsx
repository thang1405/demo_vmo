import React from "react";

export default function CreateButton({ onClick }) {
  return (
    <button
      className=" w-10 h-10 bg-orange text-xl text-white rounded-xl focus:outline-none hover:bg-opacity-80"
      onClick={onClick}
    >
      <i className="fas fa-plus"></i>
    </button>
  );
}
