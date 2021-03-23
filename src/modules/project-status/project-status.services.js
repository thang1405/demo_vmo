import { setDetail, deleteById, getTable, setTable } from "services/api";
import { TABLE_NAME } from "./project-status.constants";
import {
  createProjectStatus,
  getAllProjectStatus,
  getProjectStatusDetail,
  editProjectStatusDetail,
  deleteProjectStatus,
} from "./project-status.action";

export const createProjectStatusSevice = newData => dispatch => {
  const data = getTable(TABLE_NAME) ? getTable(TABLE_NAME) : [];
  data.push(newData);
  setTable(TABLE_NAME, data);
  if (newData) {
    return dispatch(createProjectStatus(newData));
  }
};

export const getAllProjectStatusSevice = data => dispatch => {
  if (data) {
    return dispatch(getAllProjectStatus(data));
  }
};

export const getProjectStatusDetailSevice = data => dispatch => {
  if (data) {
    return dispatch(getProjectStatusDetail(data));
  }
};

export const editProjectStatusDetailSevice = data => dispatch => {
  if (data) {
    setDetail(TABLE_NAME, data);
    return dispatch(editProjectStatusDetail(data));
  }
};

export const deleteProjectStatusSevice = id => dispatch => {
  if (id) {
    deleteById(TABLE_NAME, id);
    return dispatch(deleteProjectStatus(id));
  }
};
