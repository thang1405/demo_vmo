import * as CONSTANTS from "./staff.constants";

// get info table
export const getAllStaff = data => {
  return {
    type: CONSTANTS.GET_ALL_STAFF,
    payload: data,
  };
};

// get info detail
export const getStaffDetail = data => {
  return {
    type: CONSTANTS.GET_STAFF_DETAIL,
    payload: data,
  };
};

// create new Customer
export const createStaff = data => {
  return {
    type: CONSTANTS.CREATE_STAFF,
    payload: data,
  };
};

// edit detail customer
export const editStaffDetail = data => {
  return {
    type: CONSTANTS.EDIT_STAFF_DETAIL,
    payload: data,
  };
};

// deleta Customer
export const deleteStaff = staffId => {
  return {
    type: CONSTANTS.DELETE_STAFF,
    payload: staffId,
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
