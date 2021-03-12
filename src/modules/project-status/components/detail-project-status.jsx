import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { TABLE_NAME, PATH_NAME } from "../project-status.constants";
import { getProjectStatusDetail, deleteProjectStatus } from "../project-status.services";
import { getDetail } from "../../../services/api";
import EditProjectStatus from "./edit-project-status";

import TagStatus from "../../../components/tag-status";
import Button from "../../../components/button";
import Loader from "../../../components/loader";

export default function DetailProjectStatus() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [edit, setEdit] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const data = getDetail(TABLE_NAME, id);
    dispatch(getProjectStatusDetail(data));
    if (data) {
      setDetail(data);
    }
  }, [edit]);

  const handleClose = () => {
    setEdit(true);
  };

  const handleDelete = () => {
    history.replace(`/${PATH_NAME}`);
    dispatch(deleteProjectStatus(id));
  };

  const handleEdit = () => {
    setEdit(false);
  };

  if (!detail.name) {
    return <Loader />;
  }

  return edit ? (
    <div className="border-gray-300 border h-full flex flex-col rounded-2xl bg-white">
      <div className=" p-5 border-b border-gray-300 bg-gray-200 rounded-t-2xl font-bold text-2xl">
        ProjectStatus Detail
      </div>
      <div className=" p-5">
        <p className="py-2 ">Name: {detail.name}</p>
        <p className="py-2 ">Description: {detail.description}</p>
        <div className="py-2 ">
          Status: <TagStatus value={detail.status} />
        </div>
      </div>
      <div className="flex flex-row float-right justify-end  p-5">
        <Button onClick={handleDelete} name="Delete" color="red" />
        <Button onClick={handleEdit} name="Edit" color="green" />
      </div>
    </div>
  ) : (
    <EditProjectStatus detail={detail} onClose={handleClose} />
  );
}
