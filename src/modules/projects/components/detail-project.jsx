import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { TABLE_NAME, PATH_NAME } from "../projects.constants";
import { deleteProject } from "../projects.services";
import { getDetail } from "../../../services/api";
import EditProject from "./edit-project";
import Button from "../../../components/button";
import Loader from "../../../components/loader";
import ButtonBack from "../../../components/button-back";
import ListRoute from "../../../components/list-route";

import * as PATHS from "../../../constants/pathName";

export default function DetailProject() {
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
    dispatch(deleteProject(id));
  };

  const handleEdit = () => {
    setEdit(false);
  };

  if (!detail.name) {
    return <Loader />;
  }
  const handleBack = () => {
    history.goBack();
  };
  return edit ? (
    <div className="rounded-xl">
      <ButtonBack onClick={handleBack} />
      <div className="bg-white flex flex-col rounded-xl shadow">
        <div className=" border-b border-gray-bgTag flex justify-between">
          <p className=" text-2xl font-medium p-5 px-8 uppercase">Project : {detail.name}</p>

          <div className="flex flex-row float-right justify-end  p-5">
            <Button onClick={handleDelete} name="Delete" color="red" />
            <Button onClick={handleEdit} name="Edit" color="blue" />
          </div>
        </div>
        <div className="flex p-5 px-8">
          <div className="flex-1">
            <label className=" text-sm font-normal text-gray-600">Description:</label>
            <div className=" text-lg">{detail.description}</div>
            <label className=" text-sm font-normal text-gray-600 block">Project status :</label>
            <div className="py-1">
              <ListRoute path={PATHS.PATH_PROJECT_STATUS} dataList={detail.projectStatus} />
            </div>
            <label className=" text-sm font-normal text-gray-600 block">Project types :</label>
            <div className="py-1">
              <ListRoute path={PATHS.PATH_PROJECT_TYPE} dataList={detail.projectType} />
            </div>
            <label className=" text-sm font-normal text-gray-600 block">Departments :</label>
            <div className="py-1">
              <ListRoute path={PATHS.PATH_DEPARTMENT} dataList={detail.department} />
            </div>
          </div>
          <div className="flex-1">
            <label className=" text-sm font-normal text-gray-600 block">Staffs :</label>
            <div className="py-1">
              <ListRoute path={PATHS.PATH_STAFF} dataList={detail.staff} />
            </div>
            <label className=" text-sm font-normal text-gray-600 block">Tech stacks :</label>
            <div className="py-1">
              <ListRoute path={PATHS.PATH_TECH_STACK} dataList={detail.techStack} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <EditProject detail={detail} onClose={handleClose} />
  );
}
