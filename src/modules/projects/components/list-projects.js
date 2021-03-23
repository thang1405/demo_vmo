import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { getTable } from "../../../services/api";
import { getAllProjectSevice } from "../projects.services";
import { TABLE_NAME, PATH_NAME, LIMIT_PROJECT } from "../projects.constants";
import * as PATH from "../../../constants/pathName";

import Pagination from "../../../components/pagination";

function ListProject() {
  const listProject = useSelector(state => state.projects.data);
  const { totalPage, total } = useSelector(state => state.projects);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const page = JSON.parse(new URLSearchParams(location.search).get("page")) || 1;

  useEffect(() => {
    const data = getTable(TABLE_NAME);
    dispatch(getAllProjectSevice(data));
  }, [total]);

  const handleClick = item => {
    history.push(`${PATH_NAME}/${item.id}`);
  };

  const getList = () => {
    return listProject.slice(LIMIT_PROJECT * (page - 1), LIMIT_PROJECT * page);
  };

  return (
    <div className=" ">
      <table
        className=" text-sm w-full text-left border-l
       border-r bg-white border-b border-gray-100"
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
            <tr key={index} onClick={() => handleClick(item)} className="hover:bg-gray-50">
              <td className="p-2 px-4 border-r border-b border-gray-100">{item.name}</td>
              <td className="p-2 px-4 border-r border-b border-gray-100">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        onNext={() => {
          history.push(`${PATH.PATH_PROJECT}?page=${page + 1}`);
        }}
        onPrevious={() => {
          history.push(`${PATH.PATH_PROJECT}?page=${page - 1}`);
        }}
        page={page}
        totalPage={totalPage}
      />
    </div>
  );
}

export default ListProject;