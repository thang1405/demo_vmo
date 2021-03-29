import React, { useState } from "react";

export default function Button({ onClick, name, color, isConfim = false }) {
  const [show, setShow] = useState(false);
  const colors = {
    blue: "bg-blue-primary",
    red: "bg-red-primary",
  };

  const handleClick = () => {
    if (isConfim) {
      setShow(!show);
    }
    else {
      onClick();
      setShow(false);
    }
  };

  return (
    <div className="relative">
      <button
        className={`focus:outline-none hover:bg-opacity-80 py-2.5 text-white
       px-5 mr-2 text-base-nl rounded-xl font-medium shadow ${colors[color]}`}
        onClick={handleClick}
      >
        {name}
      </button>
      {show ? (
        <div
          className=" absolute flex flex-col px-3 py-2 right-0
          z-10 shadow-md bg-white border-gray-primary bottom-full mb-2 w-40 rounded-xl"
        >
          <div className="">Are you sure ?</div>
          <div className="flex flex-row justify-between mt-2">
            <button
              className="px-3 py-2 text-sm-nl
              rounded-lg bg-blue-primary text-white"
              onClick={() => {
                onClick();
                setShow(false);
              }}
            >
              confim
            </button>
            <button
              className="px-3 py-2 text-sm-nl
              bg-red-primary  rounded-lg text-white"
              onClick={() => setShow(false)}
            >
              cancel
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
