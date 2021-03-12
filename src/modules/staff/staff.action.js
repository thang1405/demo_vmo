import * as CONSTANTS from "./staff.constants";

// get info table
export const getAllStaffSuccess = data => {
  return {
    type: CONSTANTS.GET_ALL_STAFF_SUCCESS,
    payload: data,
  };
};
export const getAllStaffError = error => {
  return {
    type: CONSTANTS.GET_ALL_STAFF_ERROR,
    error: error,
  };
};

//get info detail
export const getStaffDetailSuccess = data => {
  return {
    type: CONSTANTS.GET_STAFF_DETAIL_SUCCESS,
    payload: data,
  };
};

export const getStaffDetailError = error => {
  return {
    type: CONSTANTS.GET_STAFF_DETAIL_ERROR,
    error: error,
  };
};

// create new Customer
export const createStaffSuccess = data => {
  return {
    type: CONSTANTS.CREATE_STAFF_SUCCESS,
    payload: data,
  };
};

export const createStaffError = error => {
  return {
    type: CONSTANTS.CREATE_STAFF_ERROR,
    error: error,
  };
};

// edit detail customer
export const editStaffDetailSuccess = data => {
  return {
    type: CONSTANTS.EDIT_STAFF_DETAIL_SUCCESS,
    payload: data,
  };
};

export const editStaffDetailError = error => {
  return {
    type: CONSTANTS.EDIT_STAFF_DETAIL_ERROR,
    error: error,
  };
};

// deleta Customer
export const deleteStaffSuccess = staffId => {
  return {
    type: CONSTANTS.DELETE_STAFF_SUCCESS,
    payload: staffId,
  };
};

export const deleteStaffError = error => {
  return {
    type: CONSTANTS.DELETE_STAFF_SUCCESS,
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
