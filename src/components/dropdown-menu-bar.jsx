import React from "react";
import { routerMenu } from "../constants/router";
import { Link } from "react-router-dom";

export default function DropdownMenuBar({ title, focus }) {
  return (
    <div className="">
      <p className="px-3 py-2 hidden lg:block pl-4 text-lg text-gray-800 font-semibold">{title}</p>
      <ul>
        {routerMenu[title].map(item => (
          <li
            key={item.path}
            className={`${
              item.value === focus
                ? " border-r-4 border-orange text-orange bg-orange bg-opacity-10 "
                : "hover:bg-orange hover:bg-opacity-5 "
            } block uppercase text-gray-secondary py-2`}
          >
            <Link to={item.path} className="text-sm py-3 pl-8 flex">
              <span className="pr-4  text-xl-nl ">{item.icon}</span>
              <span className=" text-sm font-medium hidden lg:block">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
