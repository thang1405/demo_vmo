import * as CONSTANTS from "./project-status.constants";

// get info table
export const getAllProjectStatusSuccess = data => {
  return {
    type: CONSTANTS.GET_ALL_PROJECT_STATUS_SUCCESS,
    payload: data,
  };
};

export const getAllProjectStatusError = error => {
  return {
    type: CONSTANTS.GET_ALL_PROJECT_STATUS_ERROR,
    error: error,
  };
};

//get info detail
export const getProjectStatusDetailSuccess = data => {
  return {
    type: CONSTANTS.GET_PROJECT_STATUS_DETAIL_SUCCESS,
    payload: data,
  };
};

export const getProjectStatusDetailError = error => {
  return {
    type: CONSTANTS.GET_PROJECT_STATUS_DETAIL_ERROR,
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

// edit detail ProjectStatus
export const editProjectStatusDetailSuccess = data => {
  return {
    type: CONSTANTS.EDIT_PROJECT_STATUS_DETAIL_SUCCESS,
    payload: data,
  };
};

export const editProjectStatusDetailError = error => {
  return {
    type: CONSTANTS.EDIT_PROJECT_STATUS_DETAIL_ERROR,
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
