import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { validateInput } from "utils/validateInput";
import { isValidSubmit } from "utils/submitForm";
import { editProjectDetailSevice } from "../projects.services";

import MultiSelectTechStack from "components/multi-select-tech-stack";
import MultiSelectStaff from "components/multi-select-staff";
import MultiSelectDepartment from "components/multi-select-department";
import MultiSelectProjectType from "components/multi-select-project-type";
import MultiSelectProjectStatus from "components/multi-select-project-status";
import Button from "components/button";
import ButtonBack from "components/button-back";

export default function EditProject({ detail, onClose }) {
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

  const [staff, setStaff] = useState({
    value: "",
    errorMessage: "",
    isInputValid: true,
  });

  const [projectStatus, setProjectStatus] = useState({
    value: [],
    errorMessage: "",
    isInputValid: true,
  });

  const [projectType, setProjectType] = useState({
    value: [],
    errorMessage: "",
    isInputValid: true,
  });

  const [department, setDepartment] = useState({
    value: [],
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

  const handleChangeStaff = data => {
    setStaff({ ...staff, value: data });
  };

  const handleChangeProjectStatus = data => {
    setProjectStatus({ ...projectStatus, value: data });
  };

  const handleChangeProjectType = data => {
    setProjectType({ ...projectType, value: data });
  };

  const handleChangeDepartment = data => {
    setDepartment({ ...department, value: data });
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

  const handleSubmit = e => {
    e.preventDefault();
    checkForm();
    const formData = [name, description];
    if (isValidSubmit(formData)) {
      const data = {
        name: name.value,
        description: description.value,
        techStack: techStack.value,
        staff: staff.value,
        projectStatus: projectStatus.value,
        projectType: projectType.value,
        department: department.value,
        id: detail.id,
      };
      dispatch(editProjectDetailSevice(data));
      clearInput();
      onClose();
    }
  };

  useEffect(() => {
    if (detail) {
      setName({ ...name, value: detail.name });
      setDescription({ ...description, value: detail.description });
      setStaff({ ...staff, value: detail.staff });
      setTechStack({ ...techStack, value: detail.techStack });
      setDepartment({ ...department, value: detail.department });
      setProjectStatus({ ...projectStatus, value: detail.projectStatus });
      setProjectType({ ...projectType, value: detail.projectType });
    }
  }, []);
  return (
    <div className="rounded-xl">
      <ButtonBack onClick={onClose} />
      <div className="bg-white flex flex-col rounded-xl shadow">
        <div className=" text-2xl font-medium p-5 px-8 border-b border-gray-bgTag">
          Project edit
        </div>
        <div className="p-5 px-8">
          <div className="flex lg:flex-row flex-col">
            <div className="flex-1 lg:mr-3">
              <label className="block">Name:</label>
              <input
                className={`w-full p-2 border-2 my-1 border-gray-outline 
                focus:outline-none focus:border-gray-outlineFocus rounded-md 
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
              <label className="block">Status:</label>
              <MultiSelectProjectStatus
                valueData={projectStatus.value}
                callBackData={handleChangeProjectStatus}
              />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col">
            <div className="flex-1 lg:mr-3">
              <label className="block">Tech stacks:</label>
              <MultiSelectTechStack
                valueData={techStack.value}
                callBackData={handleChangeTechStack}
              />
              <div className="text-red-500 text-sm h-5 px-3">{techStack.errorMessage}</div>
            </div>
            <div className="flex-1 lg:ml-3">
              <label className="block">Staffs:</label>
              <MultiSelectStaff valueData={staff.value} callBackData={handleChangeStaff} />
              <div className="text-red-500 text-sm h-5 px-3">{staff.errorMessage}</div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col">
            <div className="flex-1 lg:mr-3">
              <label className="block">Departments:</label>
              <MultiSelectDepartment
                valueData={department.value}
                callBackData={handleChangeDepartment}
              />
              <div className="text-red-500 text-sm h-5 px-3">{department.errorMessage}</div>
            </div>
            <div className="flex-1 lg:ml-3">
              <label className="block">Project types:</label>
              <MultiSelectProjectType
                valueData={projectType.value}
                callBackData={handleChangeProjectType}
              />
              <div className="text-red-500 text-sm h-5 px-3">{projectType.errorMessage}</div>
            </div>
          </div>
          <label className="block">Description:</label>
          <textarea
            className={`w-full p-2 border-2 my-1 border-gray-outline 
            focus:outline-none focus:border-gray-outlineFocus rounded-md 
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
              <Button onClick={onClose} name="Cancel" color="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
