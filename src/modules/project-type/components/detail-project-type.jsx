import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { TABLE_NAME, PATH_NAME } from "../project-type.constants";
import { getProjectTypeDetail, deleteProjectType } from "../project-type.services";
import { getDetail } from "../../../services/api";
import EditProjectType from "./edit-project-type";

import TagStatus from "../../../components/tag-status";
import Loader from "../../../components/loader";
import Button from "../../../components/button";

export default function DetailProjectType() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [edit, setEdit] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const data = getDetail(TABLE_NAME, id);
    dispatch(getProjectTypeDetail(data));
    setDetail(data);
  }, [edit]);

  const handleClose = () => {
    setEdit(true);
  };

  const handleDelete = () => {
    history.replace(`/${PATH_NAME}`);
    dispatch(deleteProjectType(id));
  };

  const handleEdit = () => {
    setEdit(false);
  };

  const handleBack = () => {
    history.push(`/${PATH_NAME}`);
  };

  if (!detail.name) {
    return <Loader />;
  }

  return edit ? (
    <div className="rounded-xl">
      <div
        className="my-3 bg-white flex h-10 w-10 justify-center items-center rounded-xl"
        onClick={handleBack}
      >
        <i className="fas fa-arrow-left"></i>
      </div>
      <div className="bg-white h-full flex flex-col rounded-xl">
        <div className=" border-t border-b border-gray-bgTag flex justify-between">
          <div className=" text-2xl font-medium p-5">Project type detail</div>
          <div className="flex flex-row float-right justify-end  p-5">
            <Button onClick={handleDelete} name="Delete" />
            <Button onClick={handleEdit} name="Edit" />
          </div>
        </div>
        <div className="flex p-5">
          <div className="flex-1">
            <label className=" text-sm font-normal text-gray-600">Name :</label>
            <div className="">{detail.name}</div>
            <label className=" text-sm font-normal text-gray-600">Description:</label>
            <div className="">{detail.description}</div>
          </div>
          <div className="flex-1">
            <label className=" text-sm font-normal text-gray-600">Status :</label>
            <TagStatus value={detail.status} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <EditProjectType detail={detail} onClose={handleClose} />
  );
}
