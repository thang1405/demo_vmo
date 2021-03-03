import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTable } from "../../../services/api";
import { getAllProjectStatus } from "../project-status.services";
import { TABLE_NAME, PATH_NAME } from "../project-status.constants";

function TableProjectStatus() {
  const listProjectStatus = useSelector(state => state.projectStatus.data);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const data = getTable(TABLE_NAME);
    dispatch(getAllProjectStatus(data));
  }, []);

  const handleClick = item => {
    history.push(`${PATH_NAME}/${item.id}`);
  };

  return (
    <table className=" text-sm w-full text-left border-l border-r border-b border-gray-100 rounded-md">
      <thead className=" border border-gray-200 bg-gray-100 ">
        <tr>
          <th className="p-3">Name</th>
          <th className="p-3">Description</th>
          <th className="p-3">Status</th>
        </tr>
      </thead>
      <tbody>
        {listProjectStatus.map((item, index) => (
          <tr key={index} onClick={() => handleClick(item)}>
            <td className="p-3 border-b border-gray-100">{item.name}</td>
            <td className="p-3 border-b border-gray-100">{item.description}</td>
            <td className="p-3 border-b border-gray-100">{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableProjectStatus;
