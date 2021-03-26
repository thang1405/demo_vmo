import React, { useState } from "react";
import Modal from "components/modal";
import { useDispatch } from "react-redux";

import { createCustomerSevice } from "../customers.services";
import { validateInput } from "utils/validateInput";
import { isValidSubmit } from "utils/submitForm";
import { randomId } from "utils/api";
import CreateButton from "components/create-button";
import Toast from "components/toast";

const CreateNewCustomer = () => {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    title: "",
    message: "",
    type: "",
  });
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
  const [priority, setPriority] = useState({
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

  const handleChangePriority = e => {
    const { name, value } = e.target;
    const { isInputValid, errorMessage } = validateInput(name, value);
    setPriority({ value, errorMessage, isInputValid });
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
    setPriority(initState);
    setStatus(initState);
  };

  const checkForm = () => {
    const validName = validateInput("name", name.value);
    const validPriority = validateInput("priority", priority.value);
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
    setPriority({
      value: priority.value.trim(),
      errorMessage: validPriority.errorMessage,
      isInputValid: validPriority.isInputValid,
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
    const formData = [name, description, priority, status];
    if (isValidSubmit(formData)) {
      const data = {
        name: name.value,
        description: description.value,
        priority: priority.value,
        status: status.value,
        id: randomId(),
      };
      dispatch(createCustomerSevice(data));
      setNotification({
        show: true,
        title: "Success",
        message: `Create success ${name.value}`,
        type: "success",
      });
      onClose();
    }
  };

  return (
    <div className="my-3 flex flex-row justify-end">
      <CreateButton onClick={() => setShow(true)} />
      <Toast {...notification} onClose={() => setNotification({ ...notification, show: false })} />
      <Modal title="Create Customer" onClose={() => onClose()} show={show}>
        <form onSubmit={handleSubmit}>
          <div className="flex lg:flex-row flex-col">
            <div className="flex-1 lg:mr-3">
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
              <select
                className={` w-full p-2 border-2 my-1 border-gray-outline focus:outline-none 
                focus:border-gray-outlineFocus rounded-md 
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
            className={`w-full p-2 border-2 my-1 border-gray-outline focus:outline-none 
            focus:border-gray-outlineFocus rounded-md
             ${description.value.length ? " border-gray-outlineFocus" : ""}`}
            name="description"
            placeholder="Description"
            value={description.value}
            onChange={handleChangeDescription}
          />
          <div className="text-red-500 text-sm h-5 px-3">{description.errorMessage}</div>
          <select
            className={` w-full p-2 border-2 my-1 border-gray-outline focus:outline-none 
            focus:border-gray-outlineFocus rounded-md
             ${priority.value.length ? " border-gray-outlineFocus" : ""}`}
            name="priority"
            value={priority.value}
            onChange={handleChangePriority}
          >
            <option value="">Choose priority...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <div className="text-red-500 text-sm h-5 px-3">{priority.errorMessage}</div>

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

export default CreateNewCustomer;
