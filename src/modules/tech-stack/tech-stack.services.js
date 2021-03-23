import { setDetail, deleteById, getTable, setTable } from "services/api";
import { TABLE_NAME } from "./tech-stack.constants";
import {
  createTechStack,
  getAllTechStack,
  getTechStackDetail,
  editTechStackDetail,
  deleteTechStack,
} from "./tech-stack.action";

export const createTechStackSevice = newData => dispatch => {
  const data = getTable(TABLE_NAME) ? getTable(TABLE_NAME) : [];
  data.push(newData);
  setTable(TABLE_NAME, data);
  if (newData) {
    return dispatch(createTechStack(newData));
  }
};

export const getAllTechStackSevice = () => dispatch => {
  const data = getTable(TABLE_NAME);
  if (data) {
    return dispatch(getAllTechStack(data));
  }
};

export const getTechStackDetailSevice = data => dispatch => {
  if (data) {
    return dispatch(getTechStackDetail(data));
  }
};

export const editTechStackDetailSevice = data => dispatch => {
  if (data) {
    setDetail(TABLE_NAME, data);
    return dispatch(editTechStackDetail(data));
  }
};

export const deleteTechStackSevice = id => dispatch => {
  if (id) {
    deleteById(TABLE_NAME, id);
    return dispatch(deleteTechStack(id));
  }
};
