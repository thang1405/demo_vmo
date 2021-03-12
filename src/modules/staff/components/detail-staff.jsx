import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { TABLE_NAME, PATH_NAME } from "../staff.constants";
import { deleteStaff } from "../staff.services";
import { getDetail } from "../../../services/api";
import EditStaff from "./edit-staff";
import Button from "../../../components/button";
import Loader from "../../../components/loader";

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
    dispatch(deleteStaff(id));
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
        Staff Detail
      </div>
      <div className=" p-5 flex-row flex">
        <div className=" flex-1 mx-1">
          <div className="py-1 ">Name: {detail.name}</div>
          <div className="py-1 ">Description: {detail.description}</div>
          <div className="py-1 ">
            Project:
            {detail.project
              ? detail.project.map(item => {
                  return <li key={item.id}>{item.name}</li>;
                })
              : null}
          </div>
          <div className="py-1 ">
            Tech Stack:
            {detail.techStack
              ? detail.techStack.map(item => {
                  return <li key={item.id}>{item.name}</li>;
                })
              : null}
          </div>
        </div>
      </div>

      <div className="flex flex-row float-right justify-end  p-5">
        <Button onClick={handleDelete} name="Delete" color="red" />
        <Button onClick={handleEdit} name="Edit" color="green" />
      </div>
    </div>
  ) : (
    <EditStaff detail={detail} onClose={handleClose} />
  );
}
