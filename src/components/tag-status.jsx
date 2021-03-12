import React from "react";

export default function TagStatus({ value }) {
  return (
    <div
      className={`${
        value == "active" ? " text-green-600 bg-green-200" : " text-red-600 bg-red-200"
      } rounded-xl inline-block p-1 px-2 uppercase text-sm`}
    >
      {value}
    </div>
  );
}
