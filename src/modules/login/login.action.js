import * as CONSTANTS from "./login.constants";

// get info table
export const getAllDepartmentSuccess = data => {
  return {
    type: CONSTANTS.GET_ALL_DEPARTMENT_SUCCESS,
    payload: data,
  };
};
export const getAllDepartmentError = error => {
  return {
    type: CONSTANTS.GET_ALL_DEPARTMENT_ERROR,
    error: error,
  };
};

//get info detail
export const getDepartmentDetailSuccess = data => {
  return {
    type: CONSTANTS.GET_DEPARTMENT_DETAIL_SUCCESS,
    payload: data,
  };
};

export const getDepartmentDetailError = error => {
  return {
    type: CONSTANTS.GET_DEPARTMENT_DETAIL_ERROR,
    error: error,
  };
};

// create new Customer
export const createDepartmentSuccess = data => {
  return {
    type: CONSTANTS.CREATE_DEPARTMENT_SUCCESS,
    payload: data,
  };
};

export const createDepartmentError = error => {
  return {
    type: CONSTANTS.CREATE_DEPARTMENT_ERROR,
    error: error,
  };
};

// edit detail customer
export const editDepartmentDetailSuccess = data => {
  return {
    type: CONSTANTS.EDIT_DEPARTMENT_DETAIL_SUCCESS,
    payload: data,
  };
};

export const editDepartmentDetailError = error => {
  return {
    type: CONSTANTS.EDIT_DEPARTMENT_DETAIL_ERROR,
    error: error,
  };
};

// deleta Customer
export const deleteDepartmentSuccess = departmentId => {
  return {
    type: CONSTANTS.DELETE_DEPARTMENT_SUCCESS,
    payload: departmentId,
  };
};

export const deleteDepartmentError = error => {
  return {
    type: CONSTANTS.DELETE_DEPARTMENT_SUCCESS,
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
