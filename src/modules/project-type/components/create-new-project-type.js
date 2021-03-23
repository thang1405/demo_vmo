import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "components/modal";
import { createProjectTypeSevice } from "../project-type.services";
import { validateInput } from "utils/validateInput";
import { isValidSubmit } from "utils/submitForm";
import { randomId } from "utils/api";
import CreateButton from "components/create-button";

const CreateNewProjectType = () => {
  const [show, setShow] = useState(false);

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
  const [status, setStatus] = useState({
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

  const handleChangeStatus = e => {
    const { name, value } = e.target;
    const { isInputValid, errorMessage } = validateInput(name, value);
    setStatus({ value, errorMessage, isInputValid });
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
    setStatus(initState);
  };

  const checkForm = () => {
    const validName = validateInput("name", name.value);
    const validDescription = validateInput("description", description.value);
    const validStatus = validateInput("status", status.value);
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
    setStatus({
      value: status.value.trim(),
      errorMessage: validStatus.errorMessage,
      isInputValid: validStatus.isInputValid,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    checkForm();
    const formData = [name, description, status];
    if (isValidSubmit(formData)) {
      const data = {
        name: name.value,
        description: description.value,
        status: status.value,
        id: randomId(),
      };
      dispatch(createProjectTypeSevice(data));
      onClose();
    }
  };

  return (
    <div className="my-3 flex flex-row justify-end">
      <CreateButton onClick={() => setShow(true)} />

      <Modal title="Create project type" onClose={() => onClose()} show={show}>
        <form onSubmit={handleSubmit}>
          <div className="flex lg:flex-row flex-col">
            <div className="flex-1 lg:mr-3">
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
              <select
                className={` w-full p-2 border-2 my-1 border-gray-outline 
                focus:outline-none focus:border-gray-outlineFocus rounded-md 
                ${status.value.length ? " border-gray-outlineFocus" : ""}`}
                name="status"
                value={status.value}
                onChange={handleChangeStatus}
              >
                <option value="">Choose status...</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <div className="text-red-500 text-sm h-5 px-3">{status.errorMessage}</div>
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
              className=" mt-4 px-8 py-2 bg-blue-primary
               text-md-nl text-white rounded-xl focus:outline-none"
              type="submit"
              value="Create"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CreateNewProjectType;
