import * as CONSTANTS from "./project-type.constants";

// get info table
export const getAllProjectType = data => {
  return {
    type: CONSTANTS.GET_ALL_PROJECT_TYPE,
    payload: data,
  };
};

// get info detail
export const getProjectTypeDetail = data => {
  return {
    type: CONSTANTS.GET_PROJECT_TYPE_DETAIL,
    payload: data,
  };
};

// create new ProjectType
export const createProjectType = data => {
  return {
    type: CONSTANTS.CREATE_PROJECT_TYPE,
    payload: data,
  };
};

// edit detail ProjectType
export const editProjectTypeDetail = data => {
  return {
    type: CONSTANTS.EDIT_PROJECT_TYPE_DETAIL,
    payload: data,
  };
};

// deleta ProjectType
export const deleteProjectType = id => {
  return {
    type: CONSTANTS.DELETE_PROJECT_TYPE,
    payload: id,
  };
};
