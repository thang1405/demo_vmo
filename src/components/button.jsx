import React from "react";

export default function Button({ onClick, name }) {
  return (
    <button
      className="focus:outline-none py-2 bg-white border border-gray-outline px-4 mx-2 text-base-nl font-normal rounded-lg shadow"
      onClick={onClick}
    >
      {name}
    </button>
  );
}
