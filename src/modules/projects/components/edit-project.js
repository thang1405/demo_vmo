import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { validateInput } from "../../../utils/validateInput";
import { isValidSubmit } from "../../../utils/submitForm";
import { editProjectDetail } from "../projects.services";

import MultiSelectTechStack from "../../../components/multi-select-tech-stack";
import MultiSelectStaff from "../../../components/multi-select-staff";
import MultiSelectDepartment from "../../../components/multi-select-department";
import MultiSelectProjectType from "../../../components/multi-select-project-type";
import MultiSelectProjectStatus from "../../../components/multi-select-project-status";
import Button from "../../../components/button";

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
    setName({
      value: value,
      errorMessage: errorMessage,
      isInputValid: isInputValid,
    });
  };

  const handleChangeDescription = e => {
    const { name, value } = e.target;
    const { isInputValid, errorMessage } = validateInput(name, value);
    setDescription({
      value: value,
      errorMessage: errorMessage,
      isInputValid: isInputValid,
    });
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
    let formData = [name, description];
    if (isValidSubmit(formData)) {
      let data = {
        name: name.value,
        description: description.value,
        techStack: techStack.value,
        staff: staff.value,
        projectStatus: projectStatus.value,
        projectType: projectType.value,
        department: department.value,
        id: detail.id,
      };
      dispatch(editProjectDetail(data));
      clearInput();
      onClose();
    } else {
      console.log("submit error");
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
    <div className="border-gray-300 border h-full flex flex-col rounded-2xl bg-white">
      <div className=" p-5 border-b border-gray-300 bg-gray-200 rounded-t-2xl font-bold text-2xl">
        Edit detail
      </div>
      <div className="p-5">
        <label className="block">Name:</label>
        <input
          className=" w-full p-1 border my-1 border-gray-300"
          type="text"
          name="name"
          value={name.value}
          onChange={handleChangeName}
        />
        <div className=" text-red-500">{name.isInputValid ? "" : name.errorMessage}</div>
        <label className="block">Description:</label>
        <textarea
          className=" w-full p-1 border my-1 border-gray-300"
          name="description"
          value={description.value}
          onChange={handleChangeDescription}
        />
        <div className=" text-red-500">
          {description.isInputValid ? "" : description.errorMessage}
        </div>

        <div className="flex">
          <div className="flex-1 mr-1">
            <label className="block">Tech :</label>
            <MultiSelectTechStack
              valueData={techStack.value}
              callBackData={handleChangeTechStack}
            />
            <label className="block">Staff :</label>
            <MultiSelectStaff valueData={staff.value} callBackData={handleChangeStaff} />
            <label className="block">Department :</label>
            <MultiSelectDepartment
              valueData={department.value}
              callBackData={handleChangeDepartment}
            />
          </div>
          <div className="flex-1 ml-1">
            <label className="block">Project Type :</label>
            <MultiSelectProjectType
              valueData={projectType.value}
              callBackData={handleChangeProjectType}
            />
            <label className="block">Project Status :</label>
            <MultiSelectProjectStatus
              valueData={projectStatus.value}
              callBackData={handleChangeProjectStatus}
            />
          </div>
        </div>

        <div className="flex justify-end py-4 px-1">
          <div className="flex flex-row float-right justify-end">
            <Button onClick={onClose} name="Cancel" color="red" />
            <Button onClick={handleSubmit} name="Update" color="green" />
          </div>
        </div>
      </div>
    </div>
  );
}
