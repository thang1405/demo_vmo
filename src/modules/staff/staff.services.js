import { setDetail, deleteById, getTable, setTable } from "../../services/api";
import { TABLE_NAME } from "./staff.constants";
import {
  createStaffSuccess,
  createStaffError,
  getAllStaffError,
  getAllStaffSuccess,
  getStaffDetailError,
  getStaffDetailSuccess,
  editStaffDetailSuccess,
  editStaffDetailError,
  deleteStaffError,
  deleteStaffSuccess,
} from "./staff.action";

export const createStaff = newData => dispatch => {
  let data = getTable(TABLE_NAME) ? getTable(TABLE_NAME) : [];
  data.push(newData);
  setTable(TABLE_NAME, data);
  if (newData) {
    return dispatch(createStaffSuccess(newData));
  } else {
    return dispatch(createStaffError("get table error"));
  }
};

export const getAllStaff = data => dispatch => {
  if (data) {
    return dispatch(getAllStaffSuccess(data));
  } else {
    return dispatch(getAllStaffError("get table error"));
  }
};

export const getStaffDetail = data => dispatch => {
  if (data) {
    return dispatch(getStaffDetailSuccess(data));
  } else {
    return dispatch(getStaffDetailError("get info error"));
  }
};

export const editStaffDetail = data => dispatch => {
  if (data) {
    setDetail(TABLE_NAME, data);
    return dispatch(editStaffDetailSuccess(data));
  } else {
    return dispatch(editStaffDetailError("edit detail error"));
  }
};

export const deleteStaff = id => dispatch => {
  if (id) {
    deleteById(TABLE_NAME, id);
    return dispatch(deleteStaffSuccess(id));
  } else {
    return dispatch(deleteStaffError("delete Staff error"));
  }
};
