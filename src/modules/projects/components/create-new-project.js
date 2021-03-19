import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createProject } from "../projects.services";

import Modal from "../../../components/modal";
import MultiSelectTechStack from "../../../components/multi-select-tech-stack";
import MultiSelectStaff from "../../../components/multi-select-staff";
import MultiSelectDepartment from "../../../components/multi-select-department";
import MultiSelectProjectType from "../../../components/multi-select-project-type";
import MultiSelectProjectStatus from "../../../components/multi-select-project-status";
import CreateButton from "../../../components/create-button";

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
      <CreateButton onClick={() => setShow(true)} />
      <Modal title="Create Project" onClose={() => onClose()} show={show}>
        <form onSubmit={handleSubmit}>
          <div className="flex lg:flex-row flex-col">
            <div className="flex-1 lg:mr-3">
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
            <div className="flex-1 lg:ml-3">
              <MultiSelectProjectStatus
                valueData={projectStatus.value}
                callBackData={handleChangeProjectStatus}
              />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col">
            <div className="flex-1 lg:mr-3">
              <MultiSelectTechStack
                valueData={techStack.value}
                callBackData={handleChangeTechStack}
              />
              <div className="text-red-500 text-sm h-5 px-3">{techStack.errorMessage}</div>
            </div>
            <div className="flex-1 lg:ml-3">
              <MultiSelectStaff valueData={staff.value} callBackData={handleChangeStaff} />
              <div className="text-red-500 text-sm h-5 px-3">{staff.errorMessage}</div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col">
            <div className="flex-1 lg:mr-3">
              <MultiSelectDepartment
                valueData={department.value}
                callBackData={handleChangeDepartment}
              />
              <div className="text-red-500 text-sm h-5 px-3">{department.errorMessage}</div>
            </div>
            <div className="flex-1 lg:ml-3">
              <MultiSelectProjectType
                valueData={projectType.value}
                callBackData={handleChangeProjectType}
              />
              <div className="text-red-500 text-sm h-5 px-3">{projectType.errorMessage}</div>
            </div>
          </div>
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

          <div className="">
            <input
              className=" mt-4 px-8 py-2 bg-blue-primary text-md-nl text-white rounded-xl focus:outline-none"
              type="submit"
              value="Create"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CreateNewProject;
