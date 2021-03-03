import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { TABLE_NAME, PATH_NAME } from "../project-type.constants";
import { getProjectTypeDetail, deleteProjectType } from "../project-type.services";
import { getDetail } from "../../../services/api";
import EditProjectType from "./edit-project-type";

export default function DetailProjectType() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [edit, setEdit] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const data = getDetail(TABLE_NAME, id);
    dispatch(getProjectTypeDetail(data));
    if (data) {
      setDetail(data);
    }
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

  return edit ? (
    <div className="border-gray-300 border h-full flex flex-col rounded-2xl">
      <div className=" p-5 border-b border-gray-300 bg-gray-100 rounded-t-2xl text-lg">
        Project Type Detail
      </div>
      <div className=" p-5">
        <p className="py-2 ">Name: {detail.name}</p>
        <p className="py-2 ">Description: {detail.description}</p>
        <p className="py-2 ">Status: {detail.status}</p>
      </div>
      <div className="flex flex-row float-right justify-end  p-5">
        <button
          className=" focus:outline-none py-2 px-5 mx-2 text-white bg-red-600 border rounded-md border-gray-500"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className=" focus:outline-none py-2 px-5 mx-2 text-white bg-green-600 border rounded-md border-gray-500"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
    </div>
  ) : (
    <EditProjectType detail={detail} onClose={handleClose} />
  );
}
