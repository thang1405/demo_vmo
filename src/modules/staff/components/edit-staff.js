import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { validateInput } from "../../../utils/validateInput";
import { isValidSubmit } from "../../../utils/submitForm";
import { editStaffDetail } from "../staff.services";

import MultiSelectTechStack from "../../../components/multi-select-tech-stack";
import MultiSelectProject from "../../../components/multi-select-project";
import Button from "../../../components/button";

export default function EditStaff({ detail, onClose }) {
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

  const handleChangeProject = data => {
    setProject({ ...project, value: data });
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
        project: project.value,
        id: detail.id,
      };
      dispatch(editStaffDetail(data));
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
      setProject({ ...project, value: detail.project });
      setTechStack({ ...techStack, value: detail.techStack });
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
          </div>
          <div className="flex-1 ml-1">
            <label className="block">Project :</label>
            <MultiSelectProject valueData={project.value} callBackData={handleChangeProject} />
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
