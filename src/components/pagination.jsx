import React from "react";

export default function Pagination({ onNext, onPrevious, page, totalPage }) {
  return (
    <div className="flex p-2 justify-end">
      <div
        className={`text-xl bg-gray-300 rounded-full h-9 w-9 justify-center flex items-center text-white m-1 ${
          page > 1 ? "hover:opacity-80 bg-indigo-500" : ""
        }`}
        onClick={onPrevious}
      >
        <i className="fas fa-arrow-left"></i>
      </div>
      <div className=" items-center flex text-lg p-1">page {page}</div>
      <div
        className={`text-xl bg-gray-300 rounded-full h-9 w-9 justify-center flex items-center text-white m-1 ${
          page < totalPage ? "hover:opacity-80 bg-indigo-500" : ""
        }`}
        onClick={onNext}
      >
        <i className="fas fa-arrow-right"></i>
      </div>
    </div>
  );
}
