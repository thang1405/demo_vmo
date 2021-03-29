import { setDetail, deleteById, getTable, setTable } from "services/api";
import { TABLE_NAME } from "./project-type.constants";
import {
  createProjectType,
  getAllProjectType,
  getProjectTypeDetail,
  editProjectTypeDetail,
  deleteProjectType,
} from "./project-type.action";

export const createProjectTypeSevice = newData => dispatch => {
  const data = getTable(TABLE_NAME) || [];
  if (newData) {
    data.push(newData);
    setTable(TABLE_NAME, data);
    return dispatch(createProjectType(newData));
  }
};

export const getAllProjectTypeSevice = () => dispatch => {
  const data = getTable(TABLE_NAME);
  if (data) {
    return dispatch(getAllProjectType(data));
  }
};

export const getProjectTypeDetailSevice = data => dispatch => {
  if (data) {
    return dispatch(getProjectTypeDetail(data));
  }
};

export const editProjectTypeDetailSevice = data => dispatch => {
  if (data) {
    setDetail(TABLE_NAME, data);
    return dispatch(editProjectTypeDetail(data));
  }
};

export const deleteProjectTypeSevice = id => dispatch => {
  if (id) {
    deleteById(TABLE_NAME, id);
    return dispatch(deleteProjectType(id));
  }
};
