import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { menu } from "../constants/router";
import MenuItem from "./menu-item";

function LeftSideBar() {
  const [focus, setFocus] = useState("Category");
  const location = useLocation();

  const changeFocus = item => {
    setFocus(item);
  };

  return (
    <div className="w-60 h-screen bg-gray-50">
      {menu.map((item, index) => (
        <MenuItem
          titleName={item.name}
          icon={item.icon}
          key={index}
          isFocus={focus === item.name}
          onClick={() => changeFocus(item.name)}
          focusItem={location.pathname}
        />
      ))}
    </div>
  );
}

export default LeftSideBar;
