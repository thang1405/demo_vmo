import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInfoAll } from "../../../services/get-info";
import { getInfoAllCustomerError, getInfoAllCustomerSuccess } from "../customers.action";
import { TABLE_NAME } from "../customers.constants";

function TableCustomer() {
  const listCustomer = useSelector(state => state.customers.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = getInfoAll(TABLE_NAME);
    if (data) {
      dispatch(getInfoAllCustomerSuccess(data));
    } else {
      dispatch(getInfoAllCustomerError("null"));
    }
  }, []);

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
          <tr key={index}>
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
