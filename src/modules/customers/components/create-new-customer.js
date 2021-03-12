import React, { useState } from "react";
import Modal from "../../../components/modal";
import { createCustomer } from "../customers.services";
import { useDispatch } from "react-redux";
import { validateInput } from "../../../utils/validateInput";
import { isValidSubmit } from "../../../utils/submitForm";
import { randomId } from "../../../utils/api";

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

  const handleChangePriority = e => {
    const { name, value } = e.target;
    const { isInputValid, errorMessage } = validateInput(name, value);
    setPriority({
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
    let formData = [name, description, priority, status];
    if (isValidSubmit(formData)) {
      let data = {
        name: name.value,
        description: description.value,
        priority: priority.value,
        status: status.value,
        id: randomId(),
      };
      dispatch(createCustomer(data));
      onClose();
    } else {
      console.log("submit error");
    }
  };

  return (
    <div className="my-3 flex flex-row justify-end">
      <button className="py-1 px-3 border rounded-sm border-gray-500" onClick={() => setShow(true)}>
        Add
      </button>
      <Modal title="Create Customer" onClose={() => onClose()} show={show}>
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
          <div className="flex">
            <div className=" flex-1 pr-1">
              <label className="block">Priority:</label>
              <select
                className=" w-full p-1 border my-1 border-gray-300"
                name="priority"
                value={priority.value}
                onChange={handleChangePriority}
              >
                <option value="">Select...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <div className=" text-red-500">
                {priority.isInputValid ? "" : priority.errorMessage}
              </div>
            </div>
            <div className="flex-1 pl-1">
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
            </div>
          </div>

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
