import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { validateInput } from "../../../utils/validateInput";
import { isValidSubmit } from "../../../utils/submitForm";
import { editStaffDetail } from "../staff.services";

import MultiSelectTechStack from "../../../components/multi-select-tech-stack";
import MultiSelectProject from "../../../components/multi-select-project";
import Button from "../../../components/button";
import ButtonBack from "../../../components/button-back";

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

  const [dateBirth, setDateBirth] = useState({
    value: "",
    errorMessage: "",
    isInputValid: true,
  });

  const handleChangeDateBirth = e => {
    const { name, value } = e.target;
    const { isInputValid, errorMessage } = validateInput(name, value);
    setDateBirth({
      value: value,
      errorMessage: errorMessage,
      isInputValid: isInputValid,
    });
  };

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
        dateBirth: dateBirth.value,
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
      setDateBirth({ ...dateBirth, value: detail.dateBirth || "" });
    }
  }, []);

  return (
    <div className="rounded-xl">
      <ButtonBack onClick={onClose} />
      <div className="bg-white flex flex-col rounded-xl shadow">
        <div className=" text-2xl font-medium p-5 px-8 border-b border-gray-bgTag">Staff edit</div>
        <div className="p-5 px-8">
          <div className="flex lg:flex-row flex-col">
            <div className="flex-1 lg:mr-3">
              <label className="block">Name:</label>
              <input
                className={`w-full p-2 border-2 my-1 border-gray-outline focus:outline-none focus:border-gray-outlineFocus rounded-md ${
                  name.value.length ? " border-gray-outlineFocus" : ""
                }`}
                type="text"
                name="name"
                placeholder="Name"
                value={name.value}
                onChange={handleChangeName}
              />
              <div className="text-red-500 text-sm h-5 px-3">{name.errorMessage}</div>
            </div>
            <div className="flex-1 lg:ml-3">
              <label className="block">Date of birth:</label>
              <input
                className={`w-full p-2 border-2 text-base h-11 my-1 border-gray-outline focus:outline-none focus:border-gray-outlineFocus rounded-md ${
                  dateBirth.value.length ? " border-gray-outlineFocus" : ""
                }`}
                type="date"
                name="date"
                value={dateBirth.value}
                onChange={handleChangeDateBirth}
              />
              <div className="text-red-500 text-sm h-5 px-3">{dateBirth.errorMessage}</div>
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
              <label className="block">Projects:</label>
              <MultiSelectProject valueData={project.value} callBackData={handleChangeProject} />
              <div className="text-red-500 text-sm h-5 px-3">{project.errorMessage}</div>
            </div>
          </div>
          <label className="block">Description:</label>
          <textarea
            className={`w-full p-2 border-2 my-1 border-gray-outline focus:outline-none focus:border-gray-outlineFocus rounded-md ${
              description.value.length ? " border-gray-outlineFocus" : ""
            }`}
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
