import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { getTable } from "../../../services/api";

import { moveToNextPage, moveToPreviousPage } from "../projects.action";

import { getAllProject } from "../projects.services";
import { TABLE_NAME, PATH_NAME, LIMIT_PROJECT } from "../projects.constants";

import Pagination from "../../../components/pagination";

function TableProject() {
  const listProject = useSelector(state => state.projects.data);
  const { page, totalPage } = useSelector(state => state.projects);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const data = getTable(TABLE_NAME);
    dispatch(getAllProject(data));
  }, [totalPage]);

  const handleClick = item => {
    history.push(`${PATH_NAME}/${item.id}`);
  };

  const getList = () => {
    return listProject.slice(LIMIT_PROJECT * (page - 1), LIMIT_PROJECT * page);
  };

  return (
    <div className="">
      <table className=" text-sm w-full text-left border-l border-r border-b border-gray-100 rounded-md bg-white">
        <thead className=" border border-gray-200 bg-gray-200 ">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Description</th>
          </tr>
        </thead>
        <tbody>
          {getList().map((item, index) => (
            <tr key={index} onClick={() => handleClick(item)} className="hover:bg-gray-100">
              <td className="p-3 border-b border-gray-100">{item.name}</td>
              <td className="p-3 border-b border-gray-100">{item.description}</td>
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

export default TableProject;
