import { setDetail, deleteById, getTable, setTable } from "services/api";
import { TABLE_NAME } from "./customers.constants";
import {
  createCustomer,
  getAllCustomer,
  getCustomerDetail,
  editCustomerDetail,
  deleteCustomer,
} from "./customers.action";

export const createCustomerSevice = newData => dispatch => {
  const data = getTable(TABLE_NAME) ? getTable(TABLE_NAME) : [];
  data.push(newData);
  setTable(TABLE_NAME, data);
  if (newData) {
    return dispatch(createCustomer(newData));
  }
};

export const getAllCustomerSevice = () => dispatch => {
  const data = getTable(TABLE_NAME);
  if (data) {
    return dispatch(getAllCustomer(data));
  }
};

export const getCustomerDetailSevice = data => dispatch => {
  if (data) {
    return dispatch(getCustomerDetail(data));
  }
};

export const editCustomerDetailSevice = data => dispatch => {
  if (data) {
    setDetail(TABLE_NAME, data);
    return dispatch(editCustomerDetail(data));
  }
};

export const deleteCustomerSevice = id => dispatch => {
  if (id) {
    deleteById(TABLE_NAME, id);
    return dispatch(deleteCustomer(id));
  }
};
