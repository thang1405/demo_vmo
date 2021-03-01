import React, { useState } from "react";
import Modal from "../../../components/modal";
import { createCustomerSuccess } from "../customers.action";
import { useDispatch } from "react-redux";
import { validateInput } from "../../../utils/validateInput";
import { isValidSubmit } from "../../../utils/submitForm";

const CreateNewCustomer = () => {
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

  const handleChangePriority = e => {
    const { name, value } = e.target;
    const { isInputValid, errorMessage } = validateInput(name, value);
    setPriority({
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

  const handleSubmit = e => {
    e.preventDefault();
    let formData = [name, description, priority, status];
    console.log(isValidSubmit(formData));
    if (isValidSubmit(formData)) {
      let data = {
        name: name.value,
        description: description.value,
        priority: priority.value,
        status: status.value,
      };
      dispatch(createCustomerSuccess(data));
      onClose();
    } else {
      console.log("submit error");
    }
  };

  return (
    <div className="my-3 flex flex-row justify-end">
      <button className="py-1 px-3 border rounded-sm border-gray-500" onClick={() => setShow(true)}>
        Create
      </button>
      <Modal title="Create Project Status" onClose={() => onClose()} show={show}>
        <form onSubmit={handleSubmit}>
          <label className="block">Name:</label>
          <input
            className=" w-full p-1 border my-1 border-gray-300"
            type="text"
            name="name"
            onChange={handleChangeName}
          />
          <div className=" text-red-500">{name.isInputValid ? "" : name.errorMessage}</div>
          <label className="block">Description:</label>
          <input
            className=" w-full p-1 border my-1 border-gray-300"
            type="text"
            name="description"
            onChange={handleChangeDescription}
          />
          <div className=" text-red-500">
            {description.isInputValid ? "" : description.errorMessage}
          </div>
          <label className="block">Priority:</label>
          <input
            className=" w-full p-1 border my-1 border-gray-300"
            type="text"
            name="priority"
            onChange={handleChangePriority}
          />
          <div className=" text-red-500">{priority.isInputValid ? "" : priority.errorMessage}</div>
          <label className="block">Status:</label>
          <input
            className=" w-full p-1 border my-1 border-gray-300"
            type="select"
            name="status"
            onChange={handleChangeStatus}
          />
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

export default CreateNewCustomer;
