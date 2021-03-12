import React, { useState } from "react";
import Modal from "../../../components/modal";
import { createProjectType } from "../project-type.services";
import { useDispatch } from "react-redux";
import { validateInput } from "../../../utils/validateInput";
import { isValidSubmit } from "../../../utils/submitForm";
import { randomId } from "../../../utils/api";
import CreateButton from "../../../components/create-button";
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

  const handleChangeStatus = e => {
    const { name, value } = e.target;
    const { isInputValid, errorMessage } = validateInput(name, value);
    setStatus({
      value: value,
      errorMessage: errorMessage,
      isInputValid: isInputValid,
    });
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
    let formData = [name, description, status];
    if (isValidSubmit(formData)) {
      let data = {
        name: name.value,
        description: description.value,
        status: status.value,
        id: randomId(),
      };
      dispatch(createProjectType(data));
      onClose();
    } else {
      console.log("submit error");
    }
  };

  return (
    <div className="my-3 flex flex-row justify-end">
      <CreateButton onClick={() => setShow(true)} />

      <Modal title="Create project type" onClose={() => onClose()} show={show}>
        <form onSubmit={handleSubmit}>
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
          <label className="block">Status:</label>
          <select
            className=" w-full p-1 border my-1 border-gray-300"
            name="status"
            value={status.value}
            onChange={handleChangeStatus}
          >
            <option value="">Select...</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <div className=" text-red-500">{status.isInputValid ? "" : status.errorMessage}</div>
          <div className="p-3 flex justify-end">
            <input
              className="px-3 py-1 mt-2 bg-indigo-500 text-white rounded-sm"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CreateNewProjectType;
