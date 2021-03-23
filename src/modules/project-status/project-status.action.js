import * as CONSTANTS from "./project-status.constants";

// get info table
export const getAllProjectStatus = data => {
  return {
    type: CONSTANTS.GET_ALL_PROJECT_STATUS,
    payload: data,
  };
};

// get info detail
export const getProjectStatusDetail = data => {
  return {
    type: CONSTANTS.GET_PROJECT_STATUS_DETAIL,
    payload: data,
  };
};

// create new Customer
export const createProjectStatus = data => {
  return {
    type: CONSTANTS.CREATE_PROJECT_STATUS,
    payload: data,
  };
};

// edit detail customer
export const editProjectStatusDetail = data => {
  return {
    type: CONSTANTS.EDIT_PROJECT_STATUS_DETAIL,
    payload: data,
  };
};

// deleta Customer
export const deleteProjectStatus = ProjectStatusId => {
  return {
    type: CONSTANTS.DELETE_PROJECT_STATUS,
    payload: ProjectStatusId,
  };
};
