import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { TABLE_NAME, PATH_NAME } from "../departments.constants";
import * as PATHS from "constants/pathName";
import { deleteDepartmentSevice } from "../departments.services";
import { getDetail } from "services/api";
import EditDepartment from "./edit-department";
import Button from "components/button";
import Loader from "components/loader";
import ListRoute from "components/list-route";

export default function DetailDepartment() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [edit, setEdit] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const data = getDetail(TABLE_NAME, id);
    if (data) {
      setDetail(data);
    }
  }, [edit]);

  const handleClose = () => {
    setEdit(true);
  };

  const handleDelete = () => {
    history.replace(`/${PATH_NAME}`);
    dispatch(deleteDepartmentSevice(id));
  };

  const handleEdit = () => {
    setEdit(false);
  };

  const handleBack = () => {
    history.goBack();
  };

  if (!detail.name) {
    return <Loader />;
  }
  return edit ? (
    <div className="rounded-xl ">
      <div
        className="mb-3 bg-white flex h-10 w-10
         justify-center items-center rounded-xl hover:text-orange shadow"
        onClick={handleBack}
      >
        <i className="fas fa-arrow-left "></i>
      </div>
      <div className="bg-white flex flex-col rounded-xl shadow">
        <div className=" border-b border-gray-bgTag flex justify-between">
          <p className=" text-2xl font-medium p-5 px-8 uppercase">Department : {detail.name}</p>

          <div className="flex flex-row float-right justify-end  p-5">
            <Button onClick={handleDelete} name="Delete" color="red" />
            <Button onClick={handleEdit} name="Edit" color="blue" />
          </div>
        </div>
        <div className="flex p-5 px-8">
          <div className="flex-1">
            <label className=" text-sm font-normal text-gray-600">Description:</label>
            <div className=" text-lg">{detail.description}</div>
            <label className=" text-sm font-normal text-gray-600 block">Staffs :</label>
            <div className="py-1">
              <ListRoute path={PATHS.PATH_STAFF} dataList={detail.staff} />
            </div>
          </div>
          <div className="flex-1">
            <label className=" text-sm font-normal text-gray-600 block">Tech stacks :</label>
            <div className="py-1">
              <ListRoute path={PATHS.PATH_TECH_STACK} dataList={detail.techStack} />
            </div>
            <label className=" text-sm font-normal text-gray-600 block">Projects :</label>
            <div className="py-1">
              <ListRoute path={PATHS.PATH_PROJECT} dataList={detail.project} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <EditDepartment detail={detail} onClose={handleClose} />
  );
}
