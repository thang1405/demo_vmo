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

  if (!detail.name) {
    return <Loader />;
  }

  return edit ? (
    <div className="border-gray-300 bg-white border h-full flex flex-col rounded-2xl">
      <div className=" p-5 border-b border-gray-300 bg-gray-200 rounded-t-2xl font-bold text-2xl">
        Project Type Detail
      </div>
      <div className=" p-5 ">
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
    <EditProjectType detail={detail} onClose={handleClose} />
  );
}
