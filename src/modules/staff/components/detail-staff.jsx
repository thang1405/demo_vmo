import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { TABLE_NAME, PATH_NAME } from "../staff.constants";
import { deleteStaffSevice } from "../staff.services";
import { getDetail } from "services/api";
import EditStaff from "./edit-staff";
import Button from "components/button";
import Loader from "components/loader";
import ListRoute from "components/list-route";
import ButtonBack from "components/button-back";

import * as PATHS from "constants/pathName";

export default function DetailStaff() {
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
    dispatch(deleteStaffSevice(id));
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
          <p className=" text-2xl font-medium p-5 px-8 uppercase">Staff : {detail.name}</p>

          <div className="flex flex-row float-right justify-end  p-5">
            <Button onClick={handleDelete} name="Delete" color="red" />
            <Button onClick={handleEdit} name="Edit" color="blue" />
          </div>
        </div>
        <div className="flex p-5 px-8">
          <div className="flex-1">
            <label className=" text-sm font-normal text-gray-600">Description:</label>
            <div className=" text-lg">{detail.description}</div>
            <label className=" text-sm font-normal text-gray-600">Date of birth:</label>
            <div className=" text-lg">
              {detail.dateBirth ? detail.dateBirth.replaceAll("-", "/") : ""}
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
    <EditStaff detail={detail} onClose={handleClose} />
  );
}
