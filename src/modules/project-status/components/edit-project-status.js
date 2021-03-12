import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { validateInput } from "../../../utils/validateInput";
import { isValidSubmit } from "../../../utils/submitForm";
import { editProjectStatusDetail } from "../project-status.services";
import Button from "../../../components/button";

export default function EditProjectStatus({ detail, onClose }) {
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
      value: value.trim(),
      errorMessage: errorMessage,
      isInputValid: isInputValid,
    });
  };

  const handleChangeDescription = e => {
    const { name, value } = e.target;
    const { isInputValid, errorMessage } = validateInput(name, value);
    setDescription({
      value: value.trim(),
      errorMessage: errorMessage,
      isInputValid: isInputValid,
    });
  };

  const handleChangeStatus = e => {
    const { name, value } = e.target;
    const { isInputValid, errorMessage } = validateInput(name, value);
    setStatus({
      value: value.trim(),
      errorMessage: errorMessage,
      isInputValid: isInputValid,
    });
  };

  const checkForm = () => {
    const validName = validateInput("name", name.value);
    const validDescription = validateInput("description", description.value);
    const validStatus = validateInput("status", status.value);
    setName({
      ...name,
      errorMessage: validName.errorMessage,
      isInputValid: validName.isInputValid,
    });
    setDescription({
      ...description,
      errorMessage: validDescription.errorMessage,
      isInputValid: validDescription.isInputValid,
    });
    setStatus({
      ...status,
      errorMessage: validStatus.errorMessage,
      isInputValid: validStatus.isInputValid,
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
    setStatus(initState);
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
        id: detail.id,
      };
      dispatch(editProjectStatusDetail(data));
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
      setStatus({ ...status, value: detail.status });
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
        <label className="block">Status:</label>
        <select
          className=" w-full p-1 border my-1 border-gray-300"
          name="status"
          value={status.value}
          onChange={handleChangeStatus}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <div className=" text-red-500">{status.isInputValid ? "" : status.errorMessage}</div>
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
