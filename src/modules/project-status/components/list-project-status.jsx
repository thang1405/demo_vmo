import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getTable } from "services/api";

import { getAllProjectStatusSevice } from "../project-status.services";
import { TABLE_NAME, PATH_NAME, LIMIT_PROJECT_STATUS } from "../project-status.constants";
import * as PATH from "constants/pathName";

import TagStatus from "components/tag-status";
import Pagination from "components/pagination";

function ListProjectStatus() {
  const listProjectStatus = useSelector(state => state.projectStatus.data);
  const { totalPage, total } = useSelector(state => state.projectStatus);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const page = JSON.parse(new URLSearchParams(location.search).get("page")) || 1;

  useEffect(() => {
    const data = getTable(TABLE_NAME);
    dispatch(getAllProjectStatusSevice(data));
  }, [total]);

  const handleClick = item => {
    history.push(`${PATH_NAME}/${item.id}`);
  };

  const getList = () => {
    return listProjectStatus.slice(LIMIT_PROJECT_STATUS * (page - 1), LIMIT_PROJECT_STATUS * page);
  };

  return (
    <div className="">
      <table className=" text-sm w-full text-left bg-white ">
        <thead>
          <tr className=" border border-gray-200 bg-white shadow-md">
            <th className="p-2 px-4 ">Name</th>
            <th className="p-2 px-4 ">Description</th>
            <th className="p-2 px-4 ">Status</th>
          </tr>
        </thead>
        <tbody className="shadow-md">
          <tr className=" border-b border-gray-200 bg-gray-primary">
            <td className="p-1 px-4 "></td>
            <td className="p-1 px-4 "></td>
            <td className="p-1 px-4 "></td>
          </tr>
          {getList().map((item, index) => (
            <tr
              key={index}
              onClick={() => handleClick(item)}
              className="hover:bg-gray-50 cursor-pointer
              border-l border-r border-gray-200 "
            >
              <td className="p-2 px-4 border-b ">{item.name}</td>
              <td className="p-2 px-4 border-b ">{item.description}</td>
              <td className="p-2 px-4 border-b ">
                <TagStatus value={item.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        onNext={() => {
          history.push(`${PATH.PATH_PROJECT_STATUS}?page=${page + 1}`);
        }}
        onPrevious={() => {
          history.push(`${PATH.PATH_PROJECT_STATUS}?page=${page - 1}`);
        }}
        page={page}
        totalPage={totalPage}
      />
    </div>
  );
}

export default ListProjectStatus;
