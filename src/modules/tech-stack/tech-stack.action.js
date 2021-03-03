import * as CONSTANTS from "./tech-stack.constants";

// get info table
export const getAllTechStackSuccess = data => {
  return {
    type: CONSTANTS.GET_ALL_TECH_STACK_SUCCESS,
    payload: data,
  };
};

export const getAllTechStackError = error => {
  return {
    type: CONSTANTS.GET_ALL_TECH_STACK_ERROR,
    error: error,
  };
};

//get info detail
export const getTechStackDetailSuccess = data => {
  return {
    type: CONSTANTS.GET_TECH_STACK_DETAIL_SUCCESS,
    payload: data,
  };
};

export const getTechStackDetailError = error => {
  return {
    type: CONSTANTS.GET_TECH_STACK_DETAIL_ERROR,
    error: error,
  };
};

// create new TechStack
export const createTechStackSuccess = data => {
  return {
    type: CONSTANTS.CREATE_TECH_STACK_SUCCESS,
    payload: data,
  };
};

export const createTechStackError = error => {
  return {
    type: CONSTANTS.CREATE_TECH_STACK_ERROR,
    error: error,
  };
};

// edit detail TechStack
export const editTechStackDetailSuccess = data => {
  return {
    type: CONSTANTS.EDIT_TECH_STACK_DETAIL_SUCCESS,
    payload: data,
  };
};

export const editTechStackDetailError = error => {
  return {
    type: CONSTANTS.EDIT_TECH_STACK_DETAIL_ERROR,
    error: error,
  };
};

// deleta TechStack
export const deleteTechStackSuccess = TechStackId => {
  return {
    type: CONSTANTS.DELETE_TECH_STACK_SUCCESS,
    payload: TechStackId,
  };
};

export const deleteTechStackError = error => {
  return {
    type: CONSTANTS.DELETE_TECH_STACK_SUCCESS,
    payload: error,
  };
};
