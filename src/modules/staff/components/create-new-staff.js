import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "components/modal";
import SelectList from "components/select-list";

import * as TABLE from "constants/table";
import { getTable } from "services/api";
import { createStaffSevice } from "../staff.services";
import { randomId } from "utils/api";
import { validateInput } from "utils/validateInput";
import { isValidSubmit } from "utils/submitForm";
import CreateButton from "components/create-button";
import Toast from "components/toast";

const CreateNewStaff = () => {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    title: "",
    message: "",
    type: "",
  });
  const dispatch = useDispatch();
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
    setDateBirth({ value, errorMessage, isInputValid });
  };

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
  const onClose = () => {
    const initState = {
      value: "",
      errorMessage: "",
      isInputValid: true,
    };
    setShow(false);
    setName(initState);
    setDescription(initState);
    setTechStack(initState);
    setProject(initState);
    setDateBirth(initState);
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

  const handleSubmit = e => {
    e.preventDefault();
    checkForm();
    const formData = [name, description];
    if (isValidSubmit(formData)) {
      const data = {
        name: name.value,
        description: description.value,
        techStack: techStack.value,
        project: project.value,
        dateBirth: dateBirth.value,
        id: randomId(),
      };
      dispatch(createStaffSevice(data));
      setNotification({
        show: true,
        title: "Success",
        message: `Create success ${name.value}`,
        type: "success",
      });
      onClose();
    }
  };
  const data = {
    techStacks: getTable(TABLE.TABLE_TECH_STACK) || [],
    projects: getTable(TABLE.TABLE_PROJECT) || [],
  };
  return (
    <div className="my-3 flex flex-row justify-end">
      <CreateButton onClick={() => setShow(true)} />
      <Toast {...notification} onClose={() => setNotification({ ...notification, show: false })} />
      <Modal title="Create Staff" onClose={() => onClose()} show={show}>
        <form onSubmit={handleSubmit}>
          <div className="flex lg:flex-row flex-col">
            <div className="flex-1 lg:mr-3">
              <input
                className={`w-full p-2 border-2 my-1 border-gray-outline focus:outline-none 
                  focus:border-gray-outlineFocus rounded-md 
                  ${name.value.length ? "border-gray-outlineFocus" : ""}`}
                type="text"
                name="name"
                placeholder="Name"
                value={name.value}
                onChange={handleChangeName}
              />
              <div className="text-red-500 text-sm h-5 px-3">{name.errorMessage}</div>
            </div>
            <div className=" w-1/2 lg:pl-3 ">
              <div className="flex flex-row items-center">
                <div className="pr-3 ">Date of birth: </div>
                <input
                  className={`flex-1 p-2 border-2 my-1 h-11
                   border-gray-outline focus:outline-none 
                   focus:border-gray-outlineFocus rounded-md 
                   ${dateBirth.value.length ? " border-gray-outlineFocus" : ""}`}
                  type="date"
                  name="date"
                  placeholder="Date of Birth"
                  value={dateBirth.value}
                  onChange={handleChangeDateBirth}
                />
              </div>

              <div className="text-red-500 text-sm h-5 px-3">{dateBirth.errorMessage}</div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col">
            <div className="w-1/2 lg:pr-3">
              <SelectList
                selectedData={project.value}
                callBackData={handleChangeProject}
                list={data.projects}
                title="Select projects ..."
              />
              <div className="text-red-500 text-sm h-5 px-3">{project.errorMessage}</div>
            </div>
            <div className="w-1/2 lg:pr-3">
              <SelectList
                selectedData={techStack.value}
                callBackData={handleChangeTechStack}
                list={data.techStacks}
                title="Select tech stacks ..."
              />
              <div className="text-red-500 text-sm h-5 px-3">{techStack.errorMessage}</div>
            </div>
          </div>

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
          <div className="">
            <input
              className=" mt-4 px-8 py-2 bg-blue-primary text-md-nl
              text-white rounded-xl focus:outline-none"
              type="submit"
              value="Create"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CreateNewStaff;
