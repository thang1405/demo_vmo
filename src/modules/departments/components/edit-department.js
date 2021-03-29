import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { validateInput } from "utils/validateInput";
import { isValidSubmit } from "utils/submitForm";
import { editDepartmentDetailSevice } from "../departments.services";
import { TABLE_NAME } from "../departments.constants";
import SelectList from "components/select-list";

import Button from "components/button";
import { getDetail, getTable } from "services/api";
import ButtonBack from "components/button-back";
import * as TABLE from "constants/table";

export default function EditDepartment() {
  const { id } = useParams();
  const history = useHistory();
  const [name, setName] = useState({
    value: "",
    errorMessage: "",
    isInputValid: true,
  });
  const [description, setDescription] = useState({
    value: "",
    errorMessage: "",
    isInputValid: true,
  });

  const [techStack, setTechStack] = useState({
    value: "",
    errorMessage: "",
    isInputValid: true,
  });

  const [project, setProject] = useState({
    value: "",
    errorMessage: "",
    isInputValid: true,
  });

  const [staff, setStaff] = useState({
    value: "",
    errorMessage: "",
    isInputValid: true,
  });

  const dispatch = useDispatch();

  const handleChangeName = e => {
    const { name, value } = e.target;
    const { isInputValid, errorMessage } = validateInput(name, value);
    setName({ value, errorMessage, isInputValid });
  };

  const handleChangeDescription = e => {
    const { name, value } = e.target;
    const { isInputValid, errorMessage } = validateInput(name, value);
    setDescription({ value, errorMessage, isInputValid });
  };

  const handleChangeTechStack = data => {
    setTechStack({ ...techStack, value: data });
  };

  const handleChangeProject = data => {
    setProject({ ...project, value: data });
  };

  const handleChangeStaff = data => {
    setStaff({ ...staff, value: data });
  };

  const checkForm = () => {
    const validName = validateInput("name", name.value);
    const validDescription = validateInput("description", description.value);
    setName({
      value: name.value.trim(),
      errorMessage: validName.errorMessage,
      isInputValid: validName.isInputValid,
    });
    setDescription({
      value: description.value.trim(),
      errorMessage: validDescription.errorMessage,
      isInputValid: validDescription.isInputValid,
    });
  };

  const clearInput = () => {
    const initState = {
      value: "",
      errorMessage: "",
      isInputValid: true,
    };
    setName(initState);
    setDescription(initState);
  };

  const handleSubmit = () => {
    checkForm();
    const formData = [name, description];
    if (isValidSubmit(formData)) {
      const data = {
        name: name.value,
        description: description.value,
        techStack: techStack.value,
        project: project.value,
        staff: staff.value,
        id,
      };
      dispatch(editDepartmentDetailSevice(data));
      clearInput();
      handleBack();
    }
  };

  useEffect(() => {
    const detail = getDetail(TABLE_NAME, id);
    if (detail) {
      setName({ ...name, value: detail.name });
      setDescription({ ...description, value: detail.description });
      setProject({ ...project, value: detail.project });
      setStaff({ ...staff, value: detail.staff });
      setTechStack({ ...techStack, value: detail.techStack });
    }
  }, []);

  const handleBack = () => {
    history.goBack();
  };
  const data = {
    staffs: getTable(TABLE.TABLE_STAFF) || [],
    techStacks: getTable(TABLE.TABLE_TECH_STACK) || [],
    projects: getTable(TABLE.TABLE_PROJECT) || [],
  };
  return (
    <div className="rounded-xl">
      <ButtonBack onClick={handleBack} />
      <div className="bg-white flex flex-col rounded-xl shadow">
        <div className=" text-2xl font-medium p-5 px-8 border-b border-gray-bgTag">
          Department edit
        </div>
        <div className="p-5 px-8">
          <div className="flex lg:flex-row flex-col">
            <div className="flex-1 lg:mr-3">
              <label className="block">Name:</label>
              <input
                className={`w-full p-2 border-2 my-1 border-gray-outline focus:outline-none
                 focus:border-gray-outlineFocus rounded-md 
                 ${name.value.length ? " border-gray-outlineFocus" : ""}`}
                type="text"
                name="name"
                placeholder="Name"
                value={name.value}
                onChange={handleChangeName}
              />
              <div className="text-red-500 text-sm h-5 px-3">{name.errorMessage}</div>
            </div>
            <div className="flex-1 lg:ml-3">
              <label className="block">Staffs:</label>
              <SelectList
                selectedData={staff.value}
                callBackData={handleChangeStaff}
                list={data.staffs}
                title="Select staffs ..."
              />
              <div className="text-red-500 text-sm h-5 px-3">{staff.errorMessage}</div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col">
            <div className="flex-1 lg:mr-3">
              <label className="block">Tech stacks:</label>
              <SelectList
                selectedData={techStack.value}
                callBackData={handleChangeTechStack}
                list={data.techStacks}
                title="Select tech stacks ..."
              />
              <div className="text-red-500 text-sm h-5 px-3">{techStack.errorMessage}</div>
            </div>
            <div className="flex-1 lg:ml-3">
              <label className="block">Projects:</label>
              <SelectList
                selectedData={project.value}
                callBackData={handleChangeProject}
                list={data.projects}
                title="Select projects ..."
              />
              <div className="text-red-500 text-sm h-5 px-3">{project.errorMessage}</div>
            </div>
          </div>
          <label className="block">Description:</label>
          <textarea
            className={`w-full p-2 border-2 my-1 border-gray-outline focus:outline-none
             focus:border-gray-outlineFocus rounded-md 
              ${description.value.length ? " border-gray-outlineFocus" : ""}`}
            name="description"
            placeholder="Description"
            value={description.value}
            onChange={handleChangeDescription}
          />

          <div className="text-red-500 text-sm h-5 px-3">{description.errorMessage}</div>

          <div className="flex justify-start py-4">
            <div className="flex flex-row float-right justify-end">
              <Button onClick={handleSubmit} name="Update" color="blue" />
              <Button onClick={handleBack} name="Cancel" color="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
