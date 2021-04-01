import * as CONSTANTS from "./departments.constants";

// get info table
export const getAllDepartment = data => {
  return {
    type: CONSTANTS.GET_ALL_DEPARTMENT,
    payload: data,
  };
};

// get info detail
export const getDepartmentDetail = data => {
  return {
    type: CONSTANTS.GET_DEPARTMENT_DETAIL,
    payload: data,
  };
};

// create new Customer
export const createDepartment = data => {
  return {
    type: CONSTANTS.CREATE_DEPARTMENT,
    payload: data,
  };
};

// edit detail customer
export const editDepartmentDetail = data => {
  return {
    type: CONSTANTS.EDIT_DEPARTMENT_DETAIL,
    payload: data,
  };
};

// deleta Customer
export const deleteDepartment = DepartmentId => {
  return {
    type: CONSTANTS.DELETE_DEPARTMENT,
    payload: DepartmentId,
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
