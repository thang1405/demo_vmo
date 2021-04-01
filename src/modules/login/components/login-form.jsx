import React from "react";
import { useDispatch } from "react-redux";

import { loginSevice } from "../login.service";
import { TOKEN } from "../login.constants";

import imgweb from "assets/img/imgweb2.jpg";

export default function LoginForm() {
  const dispatch = useDispatch();

  return (
    <div className="inset-0 bg-gray-primary fixed flex justify-center items-center bg-login-bg">
      <div className=" w-200 bg-white border rounded-2xl flex flex-row justify-center shadow-2xl">
        <div className=" w-1/2 flex flex-col p-9 text">
          <i className="fab fa-500px text-5xl text-center text-blue-secondary"></i>
          <h1 className=" text-2xl font-medium my-5 uppercase text-center text-blue-secondary">
            welcome
          </h1>
          <div className="border my-3 rounded-full flex flex-row items-center px-3">
            <i className=" far fa-user-circle text-xl text-gray-secondary"></i>
            <input className=" p-2 px-3 focus:outline-none " placeholder="Name" type="text" />
          </div>
          <div className="border my-3 rounded-full flex flex-row items-center px-3">
            <i className=" far fa-lock text-xl text-gray-secondary"></i>
            <input
              className=" p-2 px-3 focus:outline-none "
              placeholder="Password"
              type="password"
            />
          </div>
          <button
            className="px-4 py-3 bg-blue-secondary
            rounded-full text-white inline-block focus:outline-none my-5"
            onClick={() => dispatch(loginSevice(TOKEN))}
          >
            Login
          </button>
        </div>
        <div className="w-1/2 ">
          <img className=" rounded-r-2xl" src={imgweb} alt="" />
        </div>
      </div>
    </div>
  );
}
