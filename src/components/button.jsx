import React from "react";

export default function Button({ onClick, name, color }) {
  const colors = {
    red: "bg-red-600",
    green: "bg-green-600",
  };

  return (
    <button
      className={`focus:outline-none py-2 px-5 mx-2 text-base font-medium text-white rounded-2xl ${
        color ? colors[color] : colors["green"]
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
