import { setDetail, deleteById, getTable, setTable } from "services/api";
import { TABLE_NAME } from "./departments.constants";
import {
  createDepartment,
  getAllDepartment,
  getDepartmentDetail,
  editDepartmentDetail,
  deleteDepartment,
} from "./departments.action";

export const createDepartmentSevice = newData => dispatch => {
  const data = getTable(TABLE_NAME) ? getTable(TABLE_NAME) : [];
  data.push(newData);
  setTable(TABLE_NAME, data);
  if (newData) {
    return dispatch(createDepartment(newData));
  }
};

export const getAllDepartmentSevice = data => dispatch => {
  if (data) {
    return dispatch(getAllDepartment(data));
  }
};

export const getDepartmentDetailSevice = data => dispatch => {
  if (data) {
    return dispatch(getDepartmentDetail(data));
  }
};

export const editDepartmentDetailSevice = data => dispatch => {
  if (data) {
    setDetail(TABLE_NAME, data);
    return dispatch(editDepartmentDetail(data));
  }
};

export const deleteDepartmentSevice = id => dispatch => {
  if (id) {
    deleteById(TABLE_NAME, id);
    return dispatch(deleteDepartment(id));
  }
};
