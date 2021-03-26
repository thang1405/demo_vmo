import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { TABLE_NAME, PATH_NAME } from "../project-type.constants";
import { deleteProjectTypeSevice } from "../project-type.services";
import { getDetail } from "services/api";
import TagStatus from "components/tag-status";
import Loader from "components/loader";
import Button from "components/button";
import ButtonBack from "components/button-back";

export default function DetailProjectType() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const data = getDetail(TABLE_NAME, id);
    setDetail(data);
  }, []);

  const handleDelete = () => {
    history.replace(`/${PATH_NAME}`);
    dispatch(deleteProjectTypeSevice(id));
  };

  const handleEdit = () => {
    history.push(`/${PATH_NAME}/${id}/edit`);
  };

  if (!detail.name) {
    return <Loader />;
  }

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="rounded-xl">
      <ButtonBack onClick={handleBack} />
      <div className="bg-white flex flex-col rounded-xl shadow">
        <div className=" border-b border-gray-bgTag flex justify-between">
          <p className=" text-2xl font-medium p-5 px-8 uppercase">Project type : {detail.name}</p>
          <div className="flex flex-row float-right justify-end p-5">
            <Button onClick={handleDelete} name="Delete" color="red" isConfim={true} />
            <Button onClick={handleEdit} name="Edit" color="blue" />
          </div>
        </div>
        <div className="flex p-5 px-8">
          <div className=" w-1/2">
            <div className="">
              <label className=" text-sm font-normal text-gray-600 inline-block">
                Description:
              </label>
              <span className=" px-2 text-lg">{detail.description}</span>
            </div>
          </div>
          <div className="w-1/2">
            <div className="">
              <label className=" text-sm font-normal text-gray-600">Status :</label>
              <TagStatus value={detail.status} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
