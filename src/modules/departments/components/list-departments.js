import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { getAllDepartmentSevice } from "../departments.services";
import * as PATH from "constants/pathName";
import { PATH_NAME, LIMIT_DEPARTMENT } from "../departments.constants";
import Pagination from "components/pagination";
import { totalOfPage } from "utils/pagination";

function ListDepartment() {
  const listDepartment = useSelector(state => state.departments.data);
  const { loading } = useSelector(state => state.departments);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const page = JSON.parse(new URLSearchParams(location.search).get("page")) || 1;
  const totalPage = totalOfPage(listDepartment.length, LIMIT_DEPARTMENT);

  useEffect(() => {
    dispatch(getAllDepartmentSevice());
  }, [loading]);

  const handleClick = item => {
    history.push(`${PATH_NAME}/${item.id}`);
  };

  const getList = () => {
    return listDepartment.slice(LIMIT_DEPARTMENT * (page - 1), LIMIT_DEPARTMENT * page);
  };

  return (
    <div className=" ">
      <table className=" text-sm w-full text-left bg-white ">
        <thead>
          <tr className=" border border-gray-200 bg-white shadow-md">
            <th className="p-2 px-4 ">Name</th>
            <th className="p-2 px-4 ">Description</th>
          </tr>
        </thead>
        <tbody className="shadow-md">
          {listDepartment ? (
            <tr className=" border-b border-gray-200 bg-gray-primary">
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
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        onNext={() => {
          history.push(`${PATH.PATH_DEPARTMENT}?page=${page + 1}`);
        }}
        onPrevious={() => {
          history.push(`${PATH.PATH_DEPARTMENT}?page=${page - 1}`);
        }}
        page={page}
        totalPage={totalPage}
      />
    </div>
  );
}

export default ListDepartment;
