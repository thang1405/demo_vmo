import React, { useState, useEffect, useRef } from "react";
import { getTable } from "../services/api";
import { TABLE_NAME } from "../modules/project-type/project-type.constants";

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
        if (element.status == "active") {
          data.push({ name: element.name, id: element.id });
        }
      });
    }
    if (valueData) {
      setSelect({ selected: valueData, data: data });
    } else {
      setSelect({ selected: [], data: data });
    }
  }, [valueData]);

  const handleShow = () => {
    setShow(!show);
  };

  const isSelected = item => {
    let isExist = false;
    const { selected } = select;
    for (const current of selected) {
      if (item.id == current.id) {
        isExist = true;
        break;
      }
    }
    return isExist;
  };

  const handleSelect = item => {
    if (!isSelected(item)) {
      let newSelected = select.selected.map(value => value);
      newSelected.push(item);
      setSelect({ ...select, selected: newSelected });
      callBackData(newSelected);
    } else {
      let newSelected = select.selected.filter(value => value.id != item.id);
      setSelect({ ...select, selected: newSelected });
      callBackData(newSelected);
    }
  };

  const handleDelete = (event, current) => {
    event.stopPropagation();
    let newSelected = select.selected.map(item => item);
    newSelected = newSelected.filter(item => current.id != item.id);
    setSelect({ ...select, selected: newSelected });
    callBackData(newSelected);
  };

  const { selected, data } = select;

  return (
    <div className="w-full relative py-0.5 my-1" ref={wrapperRef}>
      <div
        className={`border flex-wrap flex ${
          show
            ? "border-t border-l border-r border-indigo-500 rounded-t "
            : " border-gray-500 rounded"
        }`}
        onClick={handleShow}
      >
        {selected.length ? (
          selected.map((item, index) => {
            return (
              <div
                key={index}
                className="border bg-indigo-200 text-blue-600 py-0.5 px-1 m-0.5 ml-1"
              >
                {item.name}
                <span className="px-1" onClick={event => handleDelete(event, item)}>
                  <i className="fas fa-times"></i>
                </span>
              </div>
            );
          })
        ) : (
          <div className="p-1 pl-2 border border-transparent">{"Select ..."}</div>
        )}
      </div>
      {show ? (
        <ul className=" rounded-b scroll_hidden absolute overflow-scroll overflow-x-hidden max-h-32 z-20 bg-white w-full max-w-xs border border-indigo-400">
          {data.map((item, index) => (
            <li
              className={`p-1 pl-3 border-b border-t border-gray-300 ${
                isSelected(item) ? "bg-indigo-200 text-blue-600 border-indigo-300" : ""
              }`}
              onClick={() => handleSelect(item)}
              key={index}
            >
              {item.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default MultiSelectProjectType;
