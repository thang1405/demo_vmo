import * as CONSTANTS from "./tech-stack.constants";

// get info table
export const getAllTechStack = data => {
  return {
    type: CONSTANTS.GET_ALL_TECH_STACK,
    payload: data,
  };
};

// get info detail
export const getTechStackDetail = data => {
  return {
    type: CONSTANTS.GET_TECH_STACK_DETAIL,
    payload: data,
  };
};

// create new TechStack
export const createTechStack = data => {
  return {
    type: CONSTANTS.CREATE_TECH_STACK,
    payload: data,
  };
};

// edit detail TechStack
export const editTechStackDetail = data => {
  return {
    type: CONSTANTS.EDIT_TECH_STACK_DETAIL,
    payload: data,
  };
};

// deleta TechStack
export const deleteTechStack = id => {
  return {
    type: CONSTANTS.DELETE_TECH_STACK,
    payload: id,
  };
};
