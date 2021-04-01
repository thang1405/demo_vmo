import * as CONSTANTS from "./customers.constants";

// get info table
export const getAllCustomer = data => {
  return {
    type: CONSTANTS.GET_ALL_CUSTOMER,
    payload: data,
  };
};

// get info detail
export const getCustomerDetail = data => {
  return {
    type: CONSTANTS.GET_CUSTOMER_DETAIL,
    payload: data,
  };
};

// create new Customer
export const createCustomer = data => {
  return {
    type: CONSTANTS.CREATE_CUSTOMER,
    payload: data,
  };
};

// edit detail customer
export const editCustomerDetail = data => {
  return {
    type: CONSTANTS.EDIT_CUSTOMER_DETAIL,
    payload: data,
  };
};

// deleta Customer
export const deleteCustomer = id => {
  return {
    type: CONSTANTS.DELETE_CUSTOMER,
    payload: id,
  };
};
