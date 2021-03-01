import * as CONSTANTS from "./customers.constants";

// get info table
export const getInfoAllCustomerSuccess = data => {
  return {
    type: CONSTANTS.GET_INFO_ALL_CUSTOMER_SUCCESS,
    payload: data,
  };
};

export const getInfoAllCustomerError = error => {
  return {
    type: CONSTANTS.GET_INFO_ALL_CUSTOMER_ERROR,
    error: error,
  };
};

//get info detail
export const getInfoCustomerSuccess = data => {
  return {
    type: CONSTANTS.GET_INFO_CUSTOMER_SUCCESS,
    payload: data,
  };
};

export const getInfoCustomerError = error => {
  return {
    type: CONSTANTS.GET_INFO_CUSTOMER_ERROR,
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