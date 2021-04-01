import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createProjectSevice } from "../projects.services";

import Modal from "components/modal";
import CreateButton from "components/create-button";
import SelectList from "components/select-list";

import * as TABLE from "constants/table";
import { getTable } from "services/api";
import { randomId } from "utils/api";
import { validateInput } from "utils/validateInput";
import { isValidSubmit } from "utils/submitForm";
import Toast from "components/toast";

const CreateNewProject = () => {
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
    setName({ value, errorMessage, isInputValid });
  };

  const handleChangeDescription = e => {
    const { name, value } = e.target;
    const { isInputValid, errorMessage } = validateInput(name, value);
    setDescription({ value, errorMessage, isInputValid });
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
    const formData = [name, description];
    if (isValidSubmit(formData)) {
      const data = {
        name: name.value,
        description: description.value,
        techStack: techStack.value,
        staff: staff.value,
        projectStatus: projectStatus.value,
        projectType: projectType.value,
        department: department.value,
        id: randomId(),
      };
      dispatch(createProjectSevice(data));
      setNotification({
        show: true,
        title: "Success",
        message: `Create success ${name.value}`,
        type: "success",
      });
      onClose();
    }
  };

  const data = {
    staffs: getTable(TABLE.TABLE_STAFF) || [],
    techStacks: getTable(TABLE.TABLE_TECH_STACK) || [],
    departments: getTable(TABLE.TABLE_DEPARTMENT) || [],
    projectTypes: getTable(TABLE.TABLE_PROJECT_TYPE) || [],
    projectStatus: getTable(TABLE.TABLE_PROJECT_STATUS) || [],
  };
  return (
    <div className="my-3 flex flex-row justify-end">
      <CreateButton onClick={() => setShow(true)} />
      <Toast {...notification} onClose={() => setNotification({ ...notification, show: false })} />
      <Modal title="Create Project" onClose={() => onClose()} show={show}>
        <form onSubmit={handleSubmit}>
          <div className="flex lg:flex-row flex-col">
            <div className="w-1/2 lg:pr-3">
              <input
                className={`w-full p-2 border-2 my-1 border-gray-outline 
                focus:outline-none focus:border-gray-outlineFocus rounded-md 
                ${name.value.length ? " border-gray-outlineFocus" : ""}`}
                type="text"
                name="name"
                placeholder="Name"
                value={name.value}
                onChange={handleChangeName}
              />
              <div className="text-red-500 text-sm h-5 px-3">{name.errorMessage}</div>
            </div>
            <div className="w-1/2 lg:pl-3">
              <SelectList
                selectedData={projectStatus.value}
                callBackData={handleChangeProjectStatus}
                list={data.projectStatus}
                title="Select project status ..."
              />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col">
            <div className="w-1/2 lg:pr-3">
              <SelectList
                selectedData={techStack.value}
                callBackData={handleChangeTechStack}
                list={data.techStacks}
                title="Select tech stacks ..."
              />
              <div className="text-red-500 text-sm h-5 px-3">{techStack.errorMessage}</div>
            </div>
            <div className="w-1/2 lg:pl-3">
              <SelectList
                selectedData={staff.value}
                callBackData={handleChangeStaff}
                list={data.staffs}
                title="Select staffs ..."
              />
              <div className="text-red-500 text-sm h-5 px-3">{staff.errorMessage}</div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col">
            <div className="w-1/2 lg:pr-3">
              <SelectList
                selectedData={department.value}
                callBackData={handleChangeDepartment}
                list={data.departments}
                title="Select departments ..."
              />
              <div className="text-red-500 text-sm h-5 px-3">{department.errorMessage}</div>
            </div>
            <div className="w-1/2 lg:pl-3">
              <SelectList
                selectedData={projectType.value}
                callBackData={handleChangeProjectType}
                list={data.projectTypes}
                title="Select project types ..."
              />
              <div className="text-red-500 text-sm h-5 px-3">{projectType.errorMessage}</div>
            </div>
          </div>
          <textarea
            className={`w-full p-2 border-2 my-1 border-gray-outline 
            focus:outline-none focus:border-gray-outlineFocus rounded-md 
            ${description.value.length ? " border-gray-outlineFocus" : ""}`}
            name="description"
            placeholder="Description"
            value={description.value}
            onChange={handleChangeDescription}
          />
          <div className="text-red-500 text-sm h-5 px-3">{description.errorMessage}</div>

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

export default CreateNewProject;
