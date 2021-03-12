import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createProject } from "../projects.services";

import Modal from "../../../components/modal";
import MultiSelectTechStack from "../../../components/multi-select-tech-stack";
import MultiSelectStaff from "../../../components/multi-select-staff";
import MultiSelectDepartment from "../../../components/multi-select-department";
import MultiSelectProjectType from "../../../components/multi-select-project-type";
import MultiSelectProjectStatus from "../../../components/multi-select-project-status";

import { randomId } from "../../../utils/api";
import { validateInput } from "../../../utils/validateInput";
import { isValidSubmit } from "../../../utils/submitForm";

const CreateNewProject = () => {
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
    value: [],
    errorMessage: "",
    isInputValid: true,
  });

  const [staff, setStaff] = useState({
    value: "",
    errorMessage: "",
    isInputValid: true,
  });

  const [projectStatus, setProjectStatus] = useState({
    value: [],
    errorMessage: "",
    isInputValid: true,
  });

  const [projectType, setProjectType] = useState({
    value: [],
    errorMessage: "",
    isInputValid: true,
  });

  const [department, setDepartment] = useState({
    value: [],
    errorMessage: "",
    isInputValid: true,
  });

  const dispatch = useDispatch();

  const handleChangeName = e => {
    const { value } = e.target;
    const { isInputValid, errorMessage } = validateInput("", value);
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

  const handleChangeStaff = data => {
    setStaff({ ...staff, value: data });
  };

  const handleChangeProjectStatus = data => {
    setProjectStatus({ ...projectStatus, value: data });
  };

  const handleChangeProjectType = data => {
    setProjectType({ ...projectType, value: data });
  };

  const handleChangeDepartment = data => {
    setDepartment({ ...department, value: data });
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
    setStaff(initState);
    setDepartment(initState);
    setProjectStatus(initState);
    setProjectType(initState);
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
        staff: staff.value,
        projectStatus: projectStatus.value,
        projectType: projectType.value,
        department: department.value,
        id: randomId(),
      };
      dispatch(createProject(data));
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
      <Modal title="Create Project" onClose={() => onClose()} show={show}>
        <form onSubmit={handleSubmit}>
          <label className="block">Name:</label>
          <input
            className=" w-full p-1 border my-1 border-gray-500"
            type="text"
            name="name"
            value={name.value}
            onChange={handleChangeName}
          />
          <div className=" text-red-500">{name.isInputValid ? "" : name.errorMessage}</div>
          <label className="block">Description:</label>
          <textarea
            className=" w-full p-1 border my-1 border-gray-500"
            name="description"
            value={description.value}
            onChange={handleChangeDescription}
          />
          <div className=" text-red-500">
            {description.isInputValid ? "" : description.errorMessage}
          </div>
          <div className="flex">
            <div className=" w-2/4 mr-1">
              <label className="block">Tech :</label>
              <MultiSelectTechStack
                valueData={techStack.value}
                callBackData={handleChangeTechStack}
              />
            </div>
            <div className=" w-2/4 ml-1">
              <label className="block">Staff :</label>
              <MultiSelectStaff valueData={staff.value} callBackData={handleChangeStaff} />
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 mr-1">
              <label className="block">Department :</label>
              <MultiSelectDepartment
                valueData={department.value}
                callBackData={handleChangeDepartment}
              />
            </div>
            <div className="flex-1 ml-1">
              <label className="block">Project Type :</label>
              <MultiSelectProjectType
                valueData={projectType.value}
                callBackData={handleChangeProjectType}
              />
            </div>
          </div>

          <label className="block">Project Status :</label>
          <MultiSelectProjectStatus
            valueData={projectStatus.value}
            callBackData={handleChangeProjectStatus}
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

export default CreateNewProject;
