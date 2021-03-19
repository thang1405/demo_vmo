import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { validateInput } from "../../../utils/validateInput";
import { isValidSubmit } from "../../../utils/submitForm";
import { editTechStackDetail } from "../tech-stack.services";
import Button from "../../../components/button";
import ButtonBack from "../../../components/button-back";

export default function EditTechStack({ detail, onClose }) {
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
      dispatch(editTechStackDetail(data));
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
    <div className="rounded-xl">
      <ButtonBack onClick={onClose} />
      <div className="bg-white flex flex-col rounded-xl shadow">
        <div className=" text-2xl font-medium p-5 px-8 border-b border-gray-bgTag">
          Tech stack edit
        </div>
        <div className="p-5 px-8">
          <div className="flex flex-row">
            <div className="flex-1 mr-3">
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
            <div className="flex-1 ml-3">
              <label className="block">Status:</label>
              <select
                className={` w-full p-2 border-2 my-1 border-gray-outline focus:outline-none focus:border-gray-outlineFocus rounded-md ${
                  status.value.length ? " border-gray-outlineFocus" : ""
                }`}
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
