import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { TABLE_NAME, PATH_NAME } from "../customers.constants";
import { deleteCustomerSevice } from "../customers.services";
import { getDetail } from "services/api";
import EditCustomer from "./edit-customer";

import TagStatus from "components/tag-status";
import Loader from "components/loader";
import Button from "components/button";
import ButtonBack from "components/button-back";

export default function DetailCustomer() {
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
    dispatch(deleteCustomerSevice(id));
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
          <p className=" text-2xl font-medium p-5 px-8 uppercase">customer : {detail.name}</p>

          <div className="flex flex-row float-right justify-end  p-5">
            <Button onClick={handleDelete} name="Delete" color="red" />
            <Button onClick={handleEdit} name="Edit" color="blue" />
          </div>
        </div>
        <div className="flex p-5 px-8">
          <div className="flex-1">
            <label className=" text-sm font-normal text-gray-600">Description:</label>
            <div className=" text-lg">{detail.description}</div>
            <label className=" text-sm font-normal text-gray-600 block mt-1">Priority :</label>
            <div className=" text-lg">{detail.priority}</div>
          </div>
          <div className="flex-1">
            <label className=" text-sm font-normal text-gray-600 block mb-1">Status :</label>
            <TagStatus value={detail.status} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <EditCustomer detail={detail} onClose={handleClose} />
  );
}
