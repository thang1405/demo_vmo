import React, { useState } from "react";
import Modal from "../../../components/modal";
// import { useDispatch } from "react-redux";

const initState = {
  name: {
    value: "",
    isInputValid: true,
    errorMessage: "",
  },
  description: {
    value: "",
    isInputValid: true,
    errorMessage: "",
  },
  status: {
    value: "",
    isInputValid: true,
    errorMessage: "",
  },
};

const CreateNewProjectStatus = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(initState);
  // const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    const newState = { ...formData[name] }; /* dummy object */
    newState.value = value.trim();
    setFormData({
      ...formData,
      [name]: newState,
    });
  };

  const onClose = () => {
    setShow(false);
    Array.from(document.querySelectorAll("input")).forEach(input => (input.value = ""));
    setFormData(initState);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // if (true) {
    //   let newData = {};
    //   for (const [key, value] of Object.entries(formData)) {
    //     newData[key] = value.value;
    //   }
    //   dispatch(createProjectStatusSuccess(newData));
    // } else {
    //   dispatch(createProjectStatusError("false"));
    // }
    // onClose();
  };

  return (
    <div className="my-3 flex flex-row justify-end">
      <button className="py-1 px-3 border rounded-sm border-gray-500" onClick={() => setShow(true)}>
        Create
      </button>
      <Modal title="Create Project Status" onClose={onClose} show={show}>
        <form onSubmit={handleSubmit}>
          <label className="block">Name:</label>
          <input
            className=" w-full p-1 border my-1 border-gray-300"
            type="text"
            name="name"
            onChange={handleChange}
          />
          <label className="block">Description:</label>
          <input
            className=" w-full p-1 border my-1 border-gray-300"
            type="text"
            name="description"
            onChange={handleChange}
          />
          <label className="block">Status:</label>
          <input
            className=" w-full p-1 border my-1 border-gray-300"
            type="select"
            name="status"
            onChange={handleChange}
          />
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

export default CreateNewProjectStatus;
