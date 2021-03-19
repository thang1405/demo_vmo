import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { getAllCustomer } from "../customers.services";
import { moveToNextPage, moveToPreviousPage } from "../customers.action";

import * as PATH from "../../../constants/pathName";
import { LIMIT_CUSTOMER } from "../customers.constants";
import TagStatus from "../../../components/tag-status";

import Pagination from "../../../components/pagination";

function TableCustomer() {
  const listCustomer = useSelector(state => state.customers.data);
  const { page, totalPage } = useSelector(state => state.customers);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllCustomer());
  }, [totalPage]);

  const handleClick = item => {
    history.push(`${PATH.PATH_CUSTOMER}/${item.id}`);
  };

  const getList = () => {
    return listCustomer.slice(LIMIT_CUSTOMER * (page - 1), LIMIT_CUSTOMER * page);
  };

  return (
    <div className=" ">
      <table className=" text-sm w-full text-left border-l border-r bg-white border-b border-gray-100">
        <thead className=" border border-gray-100 bg-white">
          <tr>
            <th className="p-2 px-4 border-r border-gray-100">Name</th>
            <th className="p-2 px-4 border-r border-gray-100">Description</th>
            <th className="p-2 px-4 border-r border-gray-100">Priority</th>
            <th className="p-2 px-4 border-r border-gray-100">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" border-b border-gray-100 bg-gray-primary">
            <td className="p-1 px-4 "></td>
            <td className="p-1 px-4 "></td>
            <td className="p-1 px-4 "></td>
            <td className="p-1 px-4 "></td>
          </tr>
          {getList().map((item, index) => (
            <tr key={index} onClick={() => handleClick(item)} className=" hover:bg-gray-50">
              <td className="p-2 px-4 border-r border-b border-gray-100">{item.name}</td>
              <td className="p-2 px-4 border-r border-b border-gray-100">{item.description}</td>
              <td className="p-2 px-4 border-r border-b border-gray-100">{item.priority}</td>
              <td className="p-2 px-4 border-r border-b border-gray-100">
                <TagStatus value={item.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        onNext={() => dispatch(moveToNextPage())}
        onPrevious={() => dispatch(moveToPreviousPage())}
        page={page}
        totalPage={totalPage}
      />
    </div>
  );
}

export default TableCustomer;
