import { setDetail, deleteById, getTable, setTable } from "../../services/api";
import { TABLE_NAME } from "./tech-stack.constants";
import {
  createTechStackSuccess,
  createTechStackError,
  getAllTechStackError,
  getAllTechStackSuccess,
  getTechStackDetailError,
  getTechStackDetailSuccess,
  editTechStackDetailSuccess,
  editTechStackDetailError,
  deleteTechStackError,
  deleteTechStackSuccess,
} from "./tech-stack.action";

export const createTechStack = newData => dispatch => {
  let data = getTable(TABLE_NAME) ? getTable(TABLE_NAME) : [];
  data.push(newData);
  setTable(TABLE_NAME, data);
  if (newData) {
    return dispatch(createTechStackSuccess(newData));
  } else {
    return dispatch(createTechStackError("get table error"));
  }
};

export const getAllTechStack = data => dispatch => {
  if (data) {
    return dispatch(getAllTechStackSuccess(data));
  } else {
    return dispatch(getAllTechStackError("get table error"));
  }
};

export const getTechStackDetail = data => dispatch => {
  if (data) {
    return dispatch(getTechStackDetailSuccess(data));
  } else {
    return dispatch(getTechStackDetailError("get info error"));
  }
};

export const editTechStackDetail = data => dispatch => {
  if (data) {
    setDetail(TABLE_NAME, data);
    return dispatch(editTechStackDetailSuccess(data));
  } else {
    return dispatch(editTechStackDetailError("edit detail error"));
  }
};

export const deleteTechStack = id => dispatch => {
  if (id) {
    deleteById(TABLE_NAME, id);
    return dispatch(deleteTechStackSuccess(id));
  } else {
    return dispatch(deleteTechStackError("delete TechStack error"));
  }
};
