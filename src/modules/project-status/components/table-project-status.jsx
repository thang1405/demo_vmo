import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInfoAll } from "../../../services/get-info";
import {
  getInfoAllProjectStatusError,
  getInfoAllProjectStatusSuccess,
} from "../project-status.action";
import { TABLE_NAME } from "../project-status.constants";

function TableProjectStatus() {
  const listProjectStatus = useSelector(state => state.projectStatus.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = getInfoAll(TABLE_NAME);
    if (data) {
      dispatch(getInfoAllProjectStatusSuccess(data));
    } else {
      dispatch(getInfoAllProjectStatusError("null"));
    }
  }, []);

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
          <tr key={index}>
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
