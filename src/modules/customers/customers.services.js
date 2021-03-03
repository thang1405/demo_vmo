import { setDetail, deleteById, getTable, setTable } from "../../services/api";
import { TABLE_NAME } from "./customers.constants";
import {
  createCustomerSuccess,
  createCustomerError,
  getAllCustomerError,
  getAllCustomerSuccess,
  getCustomerDetailError,
  getCustomerDetailSuccess,
  editCustomerDetailSuccess,
  editCustomerDetailError,
  deleteCustomerError,
  deleteCustomerSuccess,
} from "./customers.action";

export const createCustomer = newData => dispatch => {
  let data = getTable(TABLE_NAME) ? getTable(TABLE_NAME) : [];
  data.push(newData);
  setTable(TABLE_NAME, data);
  if (newData) {
    return dispatch(createCustomerSuccess(newData));
  } else {
    return dispatch(createCustomerError("get table error"));
  }
};

export const getAllCustomer = data => dispatch => {
  if (data) {
    return dispatch(getAllCustomerSuccess(data));
  } else {
    return dispatch(getAllCustomerError("get table error"));
  }
};

export const getCustomerDetail = data => dispatch => {
  if (data) {
    return dispatch(getCustomerDetailSuccess(data));
  } else {
    return dispatch(getCustomerDetailError("get info error"));
  }
};

export const editCustomerDetail = data => dispatch => {
  if (data) {
    setDetail(TABLE_NAME, data);
    return dispatch(editCustomerDetailSuccess(data));
  } else {
    return dispatch(editCustomerDetailError("edit detail error"));
  }
};

export const deleteCustomer = id => dispatch => {
  if (id) {
    deleteById(TABLE_NAME, id);
    return dispatch(deleteCustomerSuccess(id));
  } else {
    return dispatch(deleteCustomerError("delete customer error"));
  }
};
