import * as CONSTANTS from "./project-type.constants";

// get info table
export const getAllProjectTypeSuccess = data => {
  return {
    type: CONSTANTS.GET_ALL_PROJECT_TYPE_SUCCESS,
    payload: data,
  };
};

export const getAllProjectTypeError = error => {
  return {
    type: CONSTANTS.GET_ALL_PROJECT_TYPE_ERROR,
    error: error,
  };
};

//get info detail
export const getProjectTypeDetailSuccess = data => {
  return {
    type: CONSTANTS.GET_PROJECT_TYPE_DETAIL_SUCCESS,
    payload: data,
  };
};

export const getProjectTypeDetailError = error => {
  return {
    type: CONSTANTS.GET_PROJECT_TYPE_DETAIL_ERROR,
    error: error,
  };
};

// create new ProjectType
export const createProjectTypeSuccess = data => {
  return {
    type: CONSTANTS.CREATE_PROJECT_TYPE_SUCCESS,
    payload: data,
  };
};

export const createProjectTypeError = error => {
  return {
    type: CONSTANTS.CREATE_PROJECT_TYPE_ERROR,
    error: error,
  };
};

// edit detail ProjectType
export const editProjectTypeDetailSuccess = data => {
  return {
    type: CONSTANTS.EDIT_PROJECT_TYPE_DETAIL_SUCCESS,
    payload: data,
  };
};

export const editProjectTypeDetailError = error => {
  return {
    type: CONSTANTS.EDIT_PROJECT_TYPE_DETAIL_ERROR,
    error: error,
  };
};

// deleta ProjectType
export const deleteProjectTypeSuccess = ProjectTypeId => {
  return {
    type: CONSTANTS.DELETE_PROJECT_TYPE_SUCCESS,
    payload: ProjectTypeId,
  };
};

export const deleteProjectTypeError = error => {
  return {
    type: CONSTANTS.DELETE_PROJECT_TYPE_SUCCESS,
    payload: error,
  };
};

// pagination
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
