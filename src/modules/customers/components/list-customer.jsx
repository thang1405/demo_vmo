import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { getAllCustomerSevice } from "../customers.services";

import * as PATH from "../../../constants/pathName";
import { LIMIT_CUSTOMER } from "../customers.constants";
import TagStatus from "../../../components/tag-status";

import Pagination from "../../../components/pagination";

function ListCustomer() {
  const listCustomer = useSelector(state => state.customers.data);
  const { totalPage, total } = useSelector(state => state.customers);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const page = JSON.parse(new URLSearchParams(location.search).get("page")) || 1;

  useEffect(() => {
    dispatch(getAllCustomerSevice());
  }, [total]);

  const handleClick = item => {
    history.push(`${PATH.PATH_CUSTOMER}/${item.id}`);
  };

  const getList = () => {
    return listCustomer.slice(LIMIT_CUSTOMER * (page - 1), LIMIT_CUSTOMER * page);
  };

  return (
    <div className=" ">
      <table
        className=" text-sm w-full
       text-left border-l border-r bg-white border-b border-gray-100"
      >
        <thead className=" border border-gray-100 bg-white cursor-default">
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
            <tr
              key={index}
              onClick={() => handleClick(item)}
              className=" hover:bg-gray-50 cursor-pointer"
            >
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
        onNext={() => {
          history.push(`${PATH.PATH_CUSTOMER}?page=${page + 1}`);
        }}
        onPrevious={() => {
          history.push(`${PATH.PATH_CUSTOMER}?page=${page - 1}`);
        }}
        page={page}
        totalPage={totalPage}
      />
    </div>
  );
}

export default ListCustomer;
