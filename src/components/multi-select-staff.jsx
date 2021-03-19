import React, { useState, useEffect, useRef } from "react";
import { getTable } from "../services/api";
import { TABLE_NAME } from "../modules/staff/staff.constants";

const MultiSelectStaff = ({ valueData, callBackData }) => {
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
    const data = tableData ? tableData.map(item => ({ name: item.name, id: item.id })) : [];
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
    <div className="w-full relative  my-1" ref={wrapperRef}>
      <div
        className={`border-2 flex-wrap flex py-0.5 ${
          show ? "border-2 border-gray-outlineFocus rounded-md " : " border-gray-outline rounded"
        } ${selected.length ? " border-gray-outlineFocus" : ""}`}
        onClick={handleShow}
      >
        {selected.length ? (
          selected.map((item, index) => {
            return (
              <div
                key={index}
                className="border text-md bg-indigo-200 inline-block text-blue-600 mx-1 p-1.25 rounded-md"
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
            {"Select staffs ..."}
          </div>
        )}
      </div>
      {show ? (
        data.length ? (
          <ul className="max-h-32 z-10 w-full max-w-xs overflow-scroll overflow-x-hidden absolute rounded-md bg-white border-2">
            {data.map((item, index) => (
              <li
                className={`p-2 pl-3 border-b border-gray-300 ${
                  isSelected(item) ? "bg-indigo-200 border-blue-300 text-blue-600" : ""
                }`}
                onClick={() => handleSelect(item)}
                key={index}
              >
                {item.name}
              </li>
            ))}
          </ul>
        ) : (
          <div className=" z-10 w-full p-3  max-w-xs absolute rounded-md bg-white border-2">
            no data
          </div>
        )
      ) : null}
    </div>
  );
};

export default MultiSelectStaff;
