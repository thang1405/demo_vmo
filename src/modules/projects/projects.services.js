import { setDetail, deleteById, getTable, setTable } from "services/api";
import { TABLE_NAME } from "./projects.constants";
import {
  createProject,
  getAllProject,
  getProjectDetail,
  editProjectDetail,
  deleteProject,
} from "./projects.action";

export const createProjectSevice = newData => dispatch => {
  const data = getTable(TABLE_NAME) ? getTable(TABLE_NAME) : [];
  data.push(newData);
  setTable(TABLE_NAME, data);
  if (newData) {
    return dispatch(createProject(newData));
  }
};

export const getAllProjectSevice = () => dispatch => {
  const data = getTable(TABLE_NAME);
  if (data) {
    return dispatch(getAllProject(data));
  }
};

export const getProjectDetailSevice = data => dispatch => {
  if (data) {
    return dispatch(getProjectDetail(data));
  }
};

export const editProjectDetailSevice = data => dispatch => {
  if (data) {
    setDetail(TABLE_NAME, data);
    return dispatch(editProjectDetail(data));
  }
};

export const deleteProjectSevice = id => dispatch => {
  if (id) {
    deleteById(TABLE_NAME, id);
    return dispatch(deleteProject(id));
  }
};
