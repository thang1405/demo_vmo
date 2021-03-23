import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { TABLE_NAME, PATH_NAME } from "../project-status.constants";
import {
  getProjectStatusDetailSevice,
  deleteProjectStatusSevice,
} from "../project-status.services";
import { getDetail } from "services/api";
import EditProjectStatus from "./edit-project-status";

import TagStatus from "components/tag-status";
import Button from "components/button";
import Loader from "components/loader";
import ButtonBack from "components/button-back";

export default function DetailProjectStatus() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [edit, setEdit] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const data = getDetail(TABLE_NAME, id);
    dispatch(getProjectStatusDetailSevice(data));
    if (data) {
      setDetail(data);
    }
  }, [edit]);

  const handleClose = () => {
    setEdit(true);
  };

  const handleDelete = () => {
    history.replace(`/${PATH_NAME}`);
    dispatch(deleteProjectStatusSevice(id));
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
          <p className=" text-2xl font-medium p-5 px-8 uppercase">Project status : {detail.name}</p>

          <div className="flex flex-row float-right justify-end  p-5">
            <Button onClick={handleDelete} name="Delete" color="red" />
            <Button onClick={handleEdit} name="Edit" color="blue" />
          </div>
        </div>
        <div className="flex p-5 px-8">
          <div className="flex-1">
            <label className=" text-sm font-normal text-gray-600">Description:</label>
            <div className=" text-lg">{detail.description}</div>
          </div>
          <div className="flex-1">
            <label className=" text-sm font-normal text-gray-600 block">Status :</label>
            <TagStatus value={detail.status} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <EditProjectStatus detail={detail} onClose={handleClose} />
  );
}
