import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "../../../components/modal";
import MultiSelectTechStack from "../../../components/multi-select-tech-stack";
import MultiSelectProject from "../../../components/multi-select-project";

import { createStaff } from "../staff.services";
import { randomId } from "../../../utils/api";
import { validateInput } from "../../../utils/validateInput";
import { isValidSubmit } from "../../../utils/submitForm";

const CreateNewStaff = () => {
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
    let formData = [name, description];
    if (isValidSubmit(formData)) {
      let data = {
        name: name.value,
        description: description.value,
        techStack: techStack.value,
        project: project.value,
        id: randomId(),
      };
      dispatch(createStaff(data));
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
      <Modal title="Create Staff" onClose={() => onClose()} show={show}>
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
          <label className="block">Tech :</label>
          <MultiSelectTechStack valueData={techStack.value} callBackData={handleChangeTechStack} />
          <label className="block">Project :</label>
          <MultiSelectProject valueData={project.value} callBackData={handleChangeProject} />
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

export default CreateNewStaff;
