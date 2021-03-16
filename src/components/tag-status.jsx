import React from "react";

export default function TagStatus({ value }) {
  return (
    <div
      className={`${
        value == "active" ? " text-green-tag " : " text-red-600"
      } rounded-xl inline-block p-1 px-2 uppercase text-sm bg-gray-bgTag font-medium`}
    >
      {value}
    </div>
  );
}
