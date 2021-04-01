import { setDetail, deleteById, getTable, setTable } from "services/api";
import { TABLE_NAME } from "./project-status.constants";
import {
  createProjectStatus,
  getAllProjectStatus,
  editProjectStatusDetail,
  deleteProjectStatus,
} from "./project-status.action";

export const createProjectStatusSevice = newData => dispatch => {
  const data = getTable(TABLE_NAME) || [];
  if (newData) {
    data.push(newData);
    setTable(TABLE_NAME, data);
    return dispatch(createProjectStatus(newData));
  }
};

export const getAllProjectStatusSevice = () => dispatch => {
  const data = getTable(TABLE_NAME) || [];
  return dispatch(getAllProjectStatus(data));
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
