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
      <table className=" text-sm w-full text-left border-l border-r border-b border-gray-100 rounded-md bg-white">
        <thead className=" border border-gray-200 bg-gray-200 rounded-md overflow-hidden">
          <tr className="rounded-md overflow-hidden">
            <th className="p-3">Name</th>
            <th className="p-3">Description</th>
            <th className="p-3">Priority</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {getList().map((item, index) => (
            <tr key={index} onClick={() => handleClick(item)} className=" hover:bg-gray-100">
              <td className="p-3 border-b border-gray-100">{item.name}</td>
              <td className="p-3 border-b border-gray-100">{item.description}</td>
              <td className="p-3 border-b border-gray-100">{item.priority}</td>
              <td className="p-3 border-b border-gray-100">
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
