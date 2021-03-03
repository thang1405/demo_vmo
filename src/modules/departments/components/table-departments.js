import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTable } from "../../../services/api";
import { getAllDepartment } from "../departments.services";
import { TABLE_NAME } from "../departments.constants";

function TableDepartment() {
  const listDepartment = useSelector(state => state.departments.data);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const data = getTable(TABLE_NAME);
    console.log(data);
    dispatch(getAllDepartment(data));
  }, []);

  const handleClick = item => {
    history.push(`${TABLE_NAME}/${item.id}`);
  };

  return (
    <table className=" text-sm w-full text-left border-l border-r border-b border-gray-100 rounded-md">
      <thead className=" border border-gray-200 bg-gray-100 ">
        <tr>
          <th className="p-3">Name</th>
          <th className="p-3">Description</th>
          <th className="p-3">Tech stack</th>
        </tr>
      </thead>
      <tbody>
        {listDepartment.map((item, index) => (
          <tr key={index} onClick={() => handleClick(item)}>
            <td className="p-3 border-b border-gray-100">{item.name}</td>
            <td className="p-3 border-b border-gray-100">{item.description}</td>
            <td className="p-3 border-b border-gray-100">{item.techStack}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableDepartment;
