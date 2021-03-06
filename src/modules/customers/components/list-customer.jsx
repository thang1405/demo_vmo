import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { getAllCustomerSevice } from "../customers.services";

import * as PATH from "constants/pathName";
import { LIMIT_CUSTOMER } from "../customers.constants";
import { totalOfPage } from "utils/pagination";

import TagStatus from "components/tag-status";
import Pagination from "components/pagination";

function ListCustomer() {
  const listCustomer = useSelector(state => state.customers.data);
  const { loading } = useSelector(state => state.customers);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const page = JSON.parse(new URLSearchParams(location.search).get("page")) || 1;
  const totalPage = totalOfPage(listCustomer.length, LIMIT_CUSTOMER);

  useEffect(() => {
    dispatch(getAllCustomerSevice());
  }, [loading]);
  const handleClick = item => {
    history.push(`${PATH.PATH_CUSTOMER}/${item.id}`);
  };

  const getList = () => {
    return listCustomer.slice(LIMIT_CUSTOMER * (page - 1), LIMIT_CUSTOMER * page);
  };

  return (
    <div className=" ">
      <table className=" text-sm w-full text-left bg-white ">
        <thead>
          <tr className=" border border-gray-200 bg-white shadow-md">
            <th className="p-2 px-4 ">Name</th>
            <th className="p-2 px-4 ">Description</th>
            <th className="p-2 px-4 ">Priority</th>
            <th className="p-2 px-4 ">Status</th>
          </tr>
        </thead>
        <tbody className="shadow-md">
          {listCustomer.length ? (
            <tr className=" border-b border-gray-200 bg-gray-primary">
              <td className="p-1 px-4 "></td>
              <td className="p-1 px-4 "></td>
              <td className="p-1 px-4 "></td>
              <td className="p-1 px-4 "></td>
            </tr>
          ) : null}
          {getList().map((item, index) => (
            <tr
              key={index}
              onClick={() => handleClick(item)}
              className="hover:bg-gray-50 cursor-pointer
              border-l border-r border-gray-200 "
            >
              <td className="p-2 px-4 border-b ">{item.name}</td>
              <td className="p-2 px-4 border-b ">{item.description}</td>
              <td className="p-2 px-4 border-b ">{item.priority}</td>
              <td className="p-2 px-4 border-b ">
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
