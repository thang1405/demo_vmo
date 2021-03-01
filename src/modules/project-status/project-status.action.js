import * as CONSTANTS from "./project-status.constants";

// get info table
export const getInfoAllProjectStatusSuccess = data => {
  return {
    type: CONSTANTS.GET_INFO_ALL_PROJECT_STATUS_SUCCESS,
    payload: data,
  };
};

export const getInfoAllProjectStatusError = error => {
  return {
    type: CONSTANTS.GET_INFO_ALL_PROJECT_STATUS_ERROR,
    error: error,
  };
};

//get info detail
export const getInfoProjectStatusSuccess = data => {
  return {
    type: CONSTANTS.GET_INFO_PROJECT_STATUS_ERROR,
    payload: data,
  };
};

export const getInfoProjectStatusError = error => {
  return {
    type: CONSTANTS.GET_INFO_PROJECT_STATUS_ERROR,
    error: error,
  };
};

// create new ProjectStatus
export const createProjectStatusSuccess = data => {
  return {
    type: CONSTANTS.CREATE_PROJECT_STATUS_SUCCESS,
    payload: data,
  };
};

export const createProjectStatusError = error => {
  return {
    type: CONSTANTS.CREATE_PROJECT_STATUS_ERROR,
    error: error,
  };
};
// deleta ProjectStatus
export const deleteProjectStatusSuccess = ProjectStatusId => {
  return {
    type: CONSTANTS.DELETE_PROJECT_STATUS_SUCCESS,
    payload: ProjectStatusId,
  };
};

export const deleteProjectStatusError = error => {
  return {
    type: CONSTANTS.DELETE_PROJECT_STATUS_SUCCESS,
    payload: error,
  };
};
