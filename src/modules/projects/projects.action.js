import * as CONSTANTS from "./projects.constants";

// get info table
export const getAllProject = data => {
  return {
    type: CONSTANTS.GET_ALL_PROJECT,
    payload: data,
  };
};

// get info detail
export const getProjectDetail = data => {
  return {
    type: CONSTANTS.GET_PROJECT_DETAIL,
    payload: data,
  };
};

// create new Project
export const createProject = data => {
  return {
    type: CONSTANTS.CREATE_PROJECT,
    payload: data,
  };
};

// edit detail Project
export const editProjectDetail = data => {
  return {
    type: CONSTANTS.EDIT_PROJECT_DETAIL,
    payload: data,
  };
};

// deleta Project
export const deleteProject = id => {
  return {
    type: CONSTANTS.DELETE_PROJECT,
    payload: id,
  };
};
