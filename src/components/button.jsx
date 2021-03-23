import React from "react";

export default function Button({ onClick, name, color }) {
  const colors = {
    blue: "bg-blue-primary",
    red: "bg-red-primary",
  };

  return (
    <button
      className={`focus:outline-none hover:bg-opacity-80 py-2.5 text-white
       px-5 mr-2 text-base-nl rounded-xl font-medium shadow ${colors[color]}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
