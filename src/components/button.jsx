import React from "react";

export default function Button({ onClick, name, color }) {
  const colors = {
    blue: "bg-blue-primary",
    red: "bg-red-primary",
  };

  return (
    <button
      className={`focus:outline-none hover:opacity-90 py-2.5 text-white  px-5 mr-2 text-base-nl font-normal rounded-lg shadow ${colors[color]}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
