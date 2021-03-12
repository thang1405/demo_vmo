import * as CONSTANTS from "./projects.constants";

// get info table
export const getAllProjectSuccess = data => {
  return {
    type: CONSTANTS.GET_ALL_PROJECT_SUCCESS,
    payload: data,
  };
};
export const getAllProjectError = error => {
  return {
    type: CONSTANTS.GET_ALL_PROJECT_ERROR,
    error: error,
  };
};

//get info detail
export const getProjectDetailSuccess = data => {
  return {
    type: CONSTANTS.GET_PROJECT_DETAIL_SUCCESS,
    payload: data,
  };
};

export const getProjectDetailError = error => {
  return {
    type: CONSTANTS.GET_PROJECT_DETAIL_ERROR,
    error: error,
  };
};

// create new Customer
export const createProjectSuccess = data => {
  return {
    type: CONSTANTS.CREATE_PROJECT_SUCCESS,
    payload: data,
  };
};

export const createProjectError = error => {
  return {
    type: CONSTANTS.CREATE_PROJECT_ERROR,
    error: error,
  };
};

// edit detail customer
export const editProjectDetailSuccess = data => {
  return {
    type: CONSTANTS.EDIT_PROJECT_DETAIL_SUCCESS,
    payload: data,
  };
};

export const editProjectDetailError = error => {
  return {
    type: CONSTANTS.EDIT_PROJECT_DETAIL_ERROR,
    error: error,
  };
};

// deleta Customer
export const deleteProjectSuccess = projectId => {
  return {
    type: CONSTANTS.DELETE_PROJECT_SUCCESS,
    payload: projectId,
  };
};

export const deleteProjectError = error => {
  return {
    type: CONSTANTS.DELETE_PROJECT_SUCCESS,
    payload: error,
  };
};

export const moveToNextPage = () => {
  return {
    type: CONSTANTS.MOVE_TO_NEXT_PAGE,
  };
};

export const moveToPreviousPage = () => {
  return {
    type: CONSTANTS.MOVE_TO_PREVIOUS_PAGE,
  };
};
