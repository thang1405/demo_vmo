import * as CONSTANTS from "./project-type.constants";

// get info table
export const getInfoAllProjectTypeSuccess = data => {
  return {
    type: CONSTANTS.GET_INFO_ALL_PROJECT_TYPE_SUCCESS,
    payload: data,
  };
};

export const getInfoAllProjectTypeError = error => {
  return {
    type: CONSTANTS.GET_INFO_ALL_PROJECT_TYPE_ERROR,
    error: error,
  };
};

//get info detail ProjectType
export const getInfoProjectTypeSuccess = data => {
  return {
    type: CONSTANTS.GET_INFO_PROJECT_TYPE_ERROR,
    payload: data,
  };
};

export const getInfoProjectTypeError = error => {
  return {
    type: CONSTANTS.GET_INFO_PROJECT_TYPE_ERROR,
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
