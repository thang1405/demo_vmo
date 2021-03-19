import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTable } from "../../../services/api";

import { moveToNextPage, moveToPreviousPage } from "../project-status.action";
import { getAllProjectStatus } from "../project-status.services";
import { TABLE_NAME, PATH_NAME, LIMIT_PROJECT_STATUS } from "../project-status.constants";

import TagStatus from "../../../components/tag-status";
import Pagination from "../../../components/pagination";

function TableProjectStatus() {
  const listProjectStatus = useSelector(state => state.projectStatus.data);
  const { page, totalPage } = useSelector(state => state.projectStatus);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const data = getTable(TABLE_NAME);
    dispatch(getAllProjectStatus(data));
  }, [totalPage]);

  const handleClick = item => {
    history.push(`${PATH_NAME}/${item.id}`);
  };

  const getList = () => {
    return listProjectStatus.slice(LIMIT_PROJECT_STATUS * (page - 1), LIMIT_PROJECT_STATUS * page);
  };

  return (
    <div className="">
      <table className=" text-sm w-full text-left border-l border-r bg-white border-b border-gray-100">
        <thead className=" border border-gray-100 bg-white">
          <tr>
            <th className="p-2 px-4 border-r border-gray-100">Name</th>
            <th className="p-2 px-4 border-r border-gray-100">Description</th>
            <th className="p-2 px-4 border-r border-gray-100">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" border-b border-gray-100 bg-gray-primary">
            <td className="p-1 px-4 "></td>
            <td className="p-1 px-4 "></td>
            <td className="p-1 px-4 "></td>
          </tr>
          {getList().map((item, index) => (
            <tr key={index} onClick={() => handleClick(item)} className=" hover:bg-gray-100">
              <td className="p-2 px-4 border-r border-b border-gray-100">{item.name}</td>
              <td className="p-2 px-4 border-r border-b border-gray-100">{item.description}</td>
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

export default TableProjectStatus;
