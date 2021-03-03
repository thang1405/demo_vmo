import { setDetail, deleteById, getTable, setTable } from "../../services/api";
import { TABLE_NAME } from "./project-status.constants";
import {
  createProjectStatusSuccess,
  createProjectStatusError,
  getAllProjectStatusError,
  getAllProjectStatusSuccess,
  getProjectStatusDetailError,
  getProjectStatusDetailSuccess,
  editProjectStatusDetailSuccess,
  editProjectStatusDetailError,
  deleteProjectStatusError,
  deleteProjectStatusSuccess,
} from "./project-status.action";

export const createProjectStatus = newData => dispatch => {
  let data = getTable(TABLE_NAME) ? getTable(TABLE_NAME) : [];
  data.push(newData);
  setTable(TABLE_NAME, data);
  if (newData) {
    return dispatch(createProjectStatusSuccess(newData));
  } else {
    return dispatch(createProjectStatusError("get table error"));
  }
};

export const getAllProjectStatus = data => dispatch => {
  if (data) {
    return dispatch(getAllProjectStatusSuccess(data));
  } else {
    return dispatch(getAllProjectStatusError("get table error"));
  }
};

export const getProjectStatusDetail = data => dispatch => {
  if (data) {
    return dispatch(getProjectStatusDetailSuccess(data));
  } else {
    return dispatch(getProjectStatusDetailError("get info error"));
  }
};

export const editProjectStatusDetail = data => dispatch => {
  if (data) {
    setDetail(TABLE_NAME, data);
    return dispatch(editProjectStatusDetailSuccess(data));
  } else {
    return dispatch(editProjectStatusDetailError("edit detail error"));
  }
};

export const deleteProjectStatus = id => dispatch => {
  if (id) {
    deleteById(TABLE_NAME, id);
    return dispatch(deleteProjectStatusSuccess(id));
  } else {
    return dispatch(deleteProjectStatusError("delete ProjectStatus error"));
  }
};
