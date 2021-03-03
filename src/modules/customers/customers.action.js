import * as CONSTANTS from "./customers.constants";

// get info table
export const getAllCustomerSuccess = data => {
  return {
    type: CONSTANTS.GET_ALL_CUSTOMER_SUCCESS,
    payload: data,
  };
};

export const getAllCustomerError = error => {
  return {
    type: CONSTANTS.GET_ALL_CUSTOMER_ERROR,
    error: error,
  };
};

//get info detail
export const getCustomerDetailSuccess = data => {
  return {
    type: CONSTANTS.GET_CUSTOMER_DETAIL_SUCCESS,
    payload: data,
  };
};

export const getCustomerDetailError = error => {
  return {
    type: CONSTANTS.GET_CUSTOMER_DETAIL_ERROR,
    error: error,
  };
};

// create new Customer
export const createCustomerSuccess = data => {
  return {
    type: CONSTANTS.CREATE_CUSTOMER_SUCCESS,
    payload: data,
  };
};

export const createCustomerError = error => {
  return {
    type: CONSTANTS.CREATE_CUSTOMER_ERROR,
    error: error,
  };
};

// edit detail customer
export const editCustomerDetailSuccess = data => {
  return {
    type: CONSTANTS.EDIT_CUSTOMER_DETAIL_SUCCESS,
    payload: data,
  };
};

export const editCustomerDetailError = error => {
  return {
    type: CONSTANTS.EDIT_CUSTOMER_DETAIL_ERROR,
    error: error,
  };
};

// deleta Customer
export const deleteCustomerSuccess = customerId => {
  return {
    type: CONSTANTS.DELETE_CUSTOMER_SUCCESS,
    payload: customerId,
  };
};

export const deleteCustomerError = error => {
  return {
    type: CONSTANTS.DELETE_CUSTOMER_SUCCESS,
    payload: error,
  };
};
