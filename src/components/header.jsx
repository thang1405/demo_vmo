import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { imgURL } from "../constants/image";
import { logout } from "../modules/login/login.service";

export default function Header() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="w-full">
      <div className=" w-10/12  flex-col mx-auto my-0 flex bg-white rounded-2xl shadow">
        <div className=" flex justify-end  mx-2 cursor-default ">
          <div className="flex relative items-center ">
            <button
              className="text-sm flex focus:outline-none px-5 py-3 font-semibold "
              onClick={handleShow}
            >
              <img className=" rounded-full h-10 w-10" src={imgURL} alt="" />
            </button>
            {show ? (
              <div className="absolute bg-white rounded w-64 top-full right-0 m-1 border z-10 p-3 flex justify-between">
                <div className="flex my-auto mx-2">
                  <img className="  rounded-full h-11 w-11" src={imgURL} alt="" />
                  <div className="px-2">
                    <p className=" font-semibold text-base">Neel</p>
                    <p className=" text-sm">Thắng</p>
                  </div>
                </div>
                <div className="my-auto mx-2">
                  <button
                    className=" text-white py-1 bg-indigo-700 px-3 rounded-full "
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    Log out
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
