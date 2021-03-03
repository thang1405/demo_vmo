import { setDetail, deleteById, getTable, setTable } from "../../services/api";
import { TABLE_NAME } from "./project-type.constants";
import {
  createProjectTypeSuccess,
  createProjectTypeError,
  getAllProjectTypeError,
  getAllProjectTypeSuccess,
  getProjectTypeDetailError,
  getProjectTypeDetailSuccess,
  editProjectTypeDetailSuccess,
  editProjectTypeDetailError,
  deleteProjectTypeError,
  deleteProjectTypeSuccess,
} from "./project-type.action";

export const createProjectType = newData => dispatch => {
  let data = getTable(TABLE_NAME) ? getTable(TABLE_NAME) : [];
  data.push(newData);
  setTable(TABLE_NAME, data);
  if (newData) {
    return dispatch(createProjectTypeSuccess(newData));
  } else {
    return dispatch(createProjectTypeError("get table error"));
  }
};

export const getAllProjectType = data => dispatch => {
  if (data) {
    return dispatch(getAllProjectTypeSuccess(data));
  } else {
    return dispatch(getAllProjectTypeError("get table error"));
  }
};

export const getProjectTypeDetail = data => dispatch => {
  if (data) {
    return dispatch(getProjectTypeDetailSuccess(data));
  } else {
    return dispatch(getProjectTypeDetailError("get info error"));
  }
};

export const editProjectTypeDetail = data => dispatch => {
  if (data) {
    setDetail(TABLE_NAME, data);
    return dispatch(editProjectTypeDetailSuccess(data));
  } else {
    return dispatch(editProjectTypeDetailError("edit detail error"));
  }
};

export const deleteProjectType = id => dispatch => {
  if (id) {
    deleteById(TABLE_NAME, id);
    return dispatch(deleteProjectTypeSuccess(id));
  } else {
    return dispatch(deleteProjectTypeError("delete ProjectType error"));
  }
};
