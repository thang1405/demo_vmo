import React, { useState, useEffect, useRef } from "react";
import { getTable } from "services/api";
import { TABLE_NAME } from "modules/project-type/project-type.constants";

const MultiSelectProjectType = ({ valueData, callBackData }) => {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState({
    selected: [],
    data: [],
  });
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    const tableData = getTable(TABLE_NAME);
    const data = [];
    if (tableData) {
      tableData.forEach(element => {
        if (element.status === "active") {
          data.push({ name: element.name, id: element.id });
        }
      });
    }
    if (valueData) {
      setSelect({ selected: valueData, data });
    }
    else {
      setSelect({ selected: [], data });
    }
  }, [valueData]);

  const handleShow = () => {
    setShow(!show);
  };

  const isSelected = item => {
    let isExist = false;
    const { selected } = select;
    for (const current of selected) {
      if (item.id === current.id) {
        isExist = true;
        break;
      }
    }
    return isExist;
  };

  const handleSelect = item => {
    if (!isSelected(item)) {
      const newSelected = select.selected.map(value => value);
      newSelected.push(item);
      setSelect({ ...select, selected: newSelected });
      callBackData(newSelected);
    }
    else {
      const newSelected = select.selected.filter(value => value.id !== item.id);
      setSelect({ ...select, selected: newSelected });
      callBackData(newSelected);
    }
  };

  const handleDelete = (event, current) => {
    event.stopPropagation();
    let newSelected = select.selected.map(item => item);
    newSelected = newSelected.filter(item => current.id !== item.id);
    setSelect({ ...select, selected: newSelected });
    callBackData(newSelected);
  };

  const dropDownSelect = data => {
    return data.length ? (
      <ul
        className="max-h-32 z-10 w-full max-w-xs overflow-scroll
        overflow-x-hidden absolute rounded-md bg-white border-2"
      >
        {data.map((item, index) => (
          <li
            className={`p-2 pl-3 border-b border-gray-300  ${
              isSelected(item) ? " bg-indigo-50 text-blue-700" : ""
            }`}
            onClick={() => handleSelect(item)}
            key={index}
          >
            <input
              type="checkbox"
              className="mr-2"
              name={item.name}
              checked={isSelected(item)}
              onChange={() => handleSelect(item)}
            />
            {item.name}
          </li>
        ))}
      </ul>
    ) : (
      <div className=" z-10 w-full p-3  max-w-xs absolute rounded-md bg-white border-2">
        no data
      </div>
    );
  };

  const { selected, data } = select;

  return (
    <div className="w-full relative  my-1 " ref={wrapperRef}>
      <div
        className={`border-2 py-0.5 h-11 flex
          ${show ? "border-2 border-gray-outlineFocus rounded-md " : " border-gray-outline rounded"}
          ${selected.length ? " border-gray-outlineFocus" : ""}`}
        onClick={handleShow}
      >
        <div className="overflow-hidden whitespace-nowrap flex flex-1">
          {selected.length ? (
            selected.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border text-md bg-indigo-50
                  inline-block text-blue-700 mx-1 p-1.25 rounded-md"
                >
                  {item.name}
                  <div className="px-1 inline-block " onClick={event => handleDelete(event, item)}>
                    <i className="fas fa-times"></i>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-md-nl pl-2 p-1.5 text-gray-secondary rounded-md">
              {"Select project types ..."}
            </div>
          )}
        </div>
        <div className="flex items-center px-2">
          {show ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
        </div>
      </div>
      {show ? dropDownSelect(data) : null}
    </div>
  );
};

export default MultiSelectProjectType;
