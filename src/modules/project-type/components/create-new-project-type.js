import React, { useState } from "react";
import Modal from "../../../components/modal";
// import { createProjectTypeSuccess } from "../project-type.action";

const initState = { name: "", description: "", status: "" };

const CreateNewProjectType = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(initState);
  // const dispatch = useDispatch();

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onClose = () => {
    setShow(false);
    Array.from(document.querySelectorAll("input")).forEach(input => (input.value = ""));
    setFormData(initState);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (0==0) {
  //     dispatch(createProjectTypeSuccess(formData));
  //   } else {
  //     dispatch(createProjectTypeError("false"));
  //   }
  //   onClose();
  // };

  return (
    <div className="my-3 flex flex-row justify-end">
      <button className="py-1 px-3 border rounded-sm border-gray-500" onClick={() => setShow(true)}>
        Create
      </button>
      <Modal title="Create Project Type" onClose={onClose} show={show}>
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

export default CreateNewProjectType;
