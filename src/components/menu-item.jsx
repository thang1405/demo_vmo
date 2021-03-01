import React from "react";
import { Link } from "react-router-dom";
import { routerMenu } from "../constants/router";

const MenuItem = ({ titleName, onClick, isFocus, focusItem, icon }) => {
  const linkPath = routerMenu[titleName][0].path;

  if (!isFocus) {
    return (
      <Link
        to={linkPath}
        className="px-4 py-3 block border-transparent border-l-4 text-sm hover:bg-gray-100"
        onClick={onClick}
      >
        <span className="mr-2 text-base">{icon}</span>
        <span>{titleName}</span>
      </Link>
    );
  }
  return (
    <div className="border-l-4 border-indigo-800 bg-gray-100 text-sm " onClick={onClick}>
      <Link to={linkPath} className="px-4 py-3 block font-medium text-indigo-800 hover:bg-gray-200">
        <span className="mr-2 text-base">{icon}</span>
        <span>{titleName}</span>
      </Link>
      {routerMenu[titleName].map((item, index) => {
        return (
          <li
            className={`list-none px-3 py-2 pl-9 hover:bg-gray-200 ${
              focusItem === item.path ? "text-indigo-800 bg-gray-200 font-medium" : ""
            }`}
            key={index + item}
          >
            <Link className="block" to={item.path}>
              {item.name}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default MenuItem;
