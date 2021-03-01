import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getInfoAll } from "../../../services/get-info";
import { getInfoAllProjectTypeError, getInfoAllProjectTypeSuccess } from "../project-type.action";
import { TABLE_NAME } from "../project-type.constants";

function TableProjectType() {
  const listProjectType = useSelector(state => state.projectType.data);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log(TABLE_NAME);
    const data = getInfoAll(TABLE_NAME);
    if (data) {
      dispatch(getInfoAllProjectTypeSuccess(data));
    } else {
      dispatch(getInfoAllProjectTypeError("null"));
    }
  }, []);

  const handleRowClick = id => {
    history.push(`/${TABLE_NAME}/${id}`);
  };

  return (
    <table className=" text-sm w-full text-left border-l border-r border-b border-gray-100 rounded-md">
      <thead className=" border border-gray-200 bg-gray-100 ">
        <tr>
          <th className="p-3">Name</th>
          <th className="p-3">Description</th>
          <th className="p-3">Priority</th>
          <th className="p-3">Status</th>
        </tr>
      </thead>
      <tbody>
        {listProjectType.map((item, index) => (
          <tr key={index} onClick={() => handleRowClick(index)}>
            <td className="p-3 border-b border-gray-100">{item.name}</td>
            <td className="p-3 border-b border-gray-100">{item.description}</td>
            <td className="p-3 border-b border-gray-100">{item.priority}</td>
            <td className="p-3 border-b border-gray-100">{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableProjectType;
