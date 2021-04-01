import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DropdownMenuBar from "./dropdown-menu-bar";

function LeftSideBar() {
  const [focus, setFocus] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pathArr = location.pathname.split("/");
    const currentPath = pathArr[1] ? pathArr[1] : "project-type";
    setFocus(currentPath);
  }, [location.pathname]);

  return (
    <div className="w-28 lg:w-80 fixed h-screen py-5 pl-5">
      <div className="bg-white rounded-3xl h-full shadow-lg">
        <div className=" pt-7 pb-3 flex justify-center text-5xl">
          <i className="fab fa-500px text-orange"></i>
        </div>
        <DropdownMenuBar title="Category" focus={focus} />
        <DropdownMenuBar title="Manage" focus={focus} />
      </div>
    </div>
  );
}

export default LeftSideBar;
