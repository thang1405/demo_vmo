import { setDetail, deleteById, getTable, setTable } from "../../services/api";
import { TABLE_NAME } from "./projects.constants";
import {
  createProjectSuccess,
  createProjectError,
  getAllProjectError,
  getAllProjectSuccess,
  getProjectDetailError,
  getProjectDetailSuccess,
  editProjectDetailSuccess,
  editProjectDetailError,
  deleteProjectError,
  deleteProjectSuccess,
} from "./projects.action";

export const createProject = newData => dispatch => {
  let data = getTable(TABLE_NAME) ? getTable(TABLE_NAME) : [];
  data.push(newData);
  setTable(TABLE_NAME, data);
  if (newData) {
    return dispatch(createProjectSuccess(newData));
  } else {
    return dispatch(createProjectError("get table error"));
  }
};

export const getAllProject = data => dispatch => {
  if (data) {
    return dispatch(getAllProjectSuccess(data));
  } else {
    return dispatch(getAllProjectError("get table error"));
  }
};

export const getProjectDetail = data => dispatch => {
  if (data) {
    return dispatch(getProjectDetailSuccess(data));
  } else {
    return dispatch(getProjectDetailError("get info error"));
  }
};

export const editProjectDetail = data => dispatch => {
  if (data) {
    setDetail(TABLE_NAME, data);
    return dispatch(editProjectDetailSuccess(data));
  } else {
    return dispatch(editProjectDetailError("edit detail error"));
  }
};

export const deleteProject = id => dispatch => {
  if (id) {
    deleteById(TABLE_NAME, id);
    return dispatch(deleteProjectSuccess(id));
  } else {
    return dispatch(deleteProjectError("delete Project error"));
  }
};
