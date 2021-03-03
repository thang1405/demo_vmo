import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTable } from "../../../services/api";
import { getAllCustomer } from "../customers.services";
import { TABLE_NAME, PATH_NAME } from "../customers.constants";

function TableCustomer() {
  const listCustomer = useSelector(state => state.customers.data);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const data = getTable(TABLE_NAME);
    dispatch(getAllCustomer(data));
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
          <th className="p-3">Priority</th>
          <th className="p-3">Status</th>
        </tr>
      </thead>
      <tbody>
        {listCustomer.map((item, index) => (
          <tr key={index} onClick={() => handleClick(item)}>
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

export default TableCustomer;
