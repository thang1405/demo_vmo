import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { getTable } from "../../../services/api";
import { moveToNextPage, moveToPreviousPage } from "../staff.action";
import { getAllStaff } from "../staff.services";
import { TABLE_NAME, PATH_NAME, LIMIT_STAFF } from "../staff.constants";
import Pagination from "../../../components/pagination";

function TableStaff() {
  const listStaff = useSelector(state => state.staffs.data);
  const { page, totalPage } = useSelector(state => state.staffs);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const data = getTable(TABLE_NAME);
    dispatch(getAllStaff(data));
  }, [totalPage]);

  const handleClick = item => {
    history.push(`${PATH_NAME}/${item.id}`);
  };

  const getList = () => {
    return listStaff.slice(LIMIT_STAFF * (page - 1), LIMIT_STAFF * page);
  };

  return (
    <div className=" ">
      <table className=" text-sm w-full text-left border-l border-r bg-white border-b border-gray-100">
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
        onNext={() => dispatch(moveToNextPage())}
        onPrevious={() => dispatch(moveToPreviousPage())}
        page={page}
        totalPage={totalPage}
      />
    </div>
  );
}

export default TableStaff;
