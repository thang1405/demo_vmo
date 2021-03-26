import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { getTable } from "../../../services/api";
import * as PATH from "../../../constants/pathName";

import { getAllStaffSevice } from "../staff.services";
import { TABLE_NAME, PATH_NAME, LIMIT_STAFF } from "../staff.constants";
import Pagination from "../../../components/pagination";

function TableStaff() {
  const listStaff = useSelector(state => state.staffs.data);
  const { totalPage, total } = useSelector(state => state.staffs);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const page = JSON.parse(new URLSearchParams(location.search).get("page")) || 1;

  useEffect(() => {
    const data = getTable(TABLE_NAME);
    dispatch(getAllStaffSevice(data));
  }, [total]);

  const handleClick = item => {
    history.push(`${PATH_NAME}/${item.id}`);
  };

  const getList = () => {
    return listStaff.slice(LIMIT_STAFF * (page - 1), LIMIT_STAFF * page);
  };

  return (
    <div className=" ">
      <table
        className=" text-sm w-full text-left
      border-l border-r bg-white border-b border-gray-100"
      >
        <thead className=" border border-gray-100 bg-white">
          <tr>
            <th className="p-2 px-4 border-r border-gray-100">Name</th>
            <th className="p-2 px-4 border-r border-gray-100">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" border-b border-gray-100 bg-gray-primary">
            <td className="p-1 px-4 "></td>
            <td className="p-1 px-4 "></td>
          </tr>
          {getList().map((item, index) => (
            <tr
              key={index}
              onClick={() => handleClick(item)}
              className="hover:bg-gray-50 cursor-pointer"
            >
              <td className="p-2 px-4 border-r border-b border-gray-100">{item.name}</td>
              <td className="p-2 px-4 border-r border-b border-gray-100">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        onNext={() => {
          history.push(`${PATH.PATH_STAFF}?page=${page + 1}`);
        }}
        onPrevious={() => {
          history.push(`${PATH.PATH_STAFF}?page=${page - 1}`);
        }}
        page={page}
        totalPage={totalPage}
      />
    </div>
  );
}

export default TableStaff;
