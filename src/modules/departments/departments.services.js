import { setDetail, deleteById, getTable, setTable } from "../../services/api";
import { TABLE_NAME } from "./departments.constants";
import {
  createDepartmentSuccess,
  createDepartmentError,
  getAllDepartmentError,
  getAllDepartmentSuccess,
  getDepartmentDetailError,
  getDepartmentDetailSuccess,
  editDepartmentDetailSuccess,
  editDepartmentDetailError,
  deleteDepartmentError,
  deleteDepartmentSuccess,
} from "./departments.action";

export const createDepartment = newData => dispatch => {
  let data = getTable(TABLE_NAME) ? getTable(TABLE_NAME) : [];
  data.push(newData);
  setTable(TABLE_NAME, data);
  if (newData) {
    return dispatch(createDepartmentSuccess(newData));
  } else {
    return dispatch(createDepartmentError("get table error"));
  }
};

export const getAllDepartment = data => dispatch => {
  if (data) {
    return dispatch(getAllDepartmentSuccess(data));
  } else {
    return dispatch(getAllDepartmentError("get table error"));
  }
};

export const getDepartmentDetail = data => dispatch => {
  if (data) {
    return dispatch(getDepartmentDetailSuccess(data));
  } else {
    return dispatch(getDepartmentDetailError("get info error"));
  }
};

export const editDepartmentDetail = data => dispatch => {
  if (data) {
    setDetail(TABLE_NAME, data);
    return dispatch(editDepartmentDetailSuccess(data));
  } else {
    return dispatch(editDepartmentDetailError("edit detail error"));
  }
};

export const deleteDepartment = id => dispatch => {
  if (id) {
    deleteById(TABLE_NAME, id);
    return dispatch(deleteDepartmentSuccess(id));
  } else {
    return dispatch(deleteDepartmentError("delete department error"));
  }
};
