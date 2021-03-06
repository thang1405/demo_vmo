import { setDetail, deleteById, getTable, setTable } from "services/api";
import { TABLE_NAME } from "./staff.constants";
import {
  createStaff,
  getAllStaff,
  getStaffDetail,
  editStaffDetail,
  deleteStaff,
} from "./staff.action";

export const createStaffSevice = newData => dispatch => {
  const data = getTable(TABLE_NAME) || [];
  if (newData) {
    data.push(newData);
    setTable(TABLE_NAME, data);
    return dispatch(createStaff(newData));
  }
};

export const getAllStaffSevice = () => dispatch => {
  const data = getTable(TABLE_NAME) || [];
  return dispatch(getAllStaff(data));
};

export const getStaffDetailSevice = data => dispatch => {
  if (data) {
    return dispatch(getStaffDetail(data));
  }
};

export const editStaffDetailSevice = data => dispatch => {
  if (data) {
    setDetail(TABLE_NAME, data);
    return dispatch(editStaffDetail(data));
  }
};

export const deleteStaffSevice = id => dispatch => {
  if (id) {
    deleteById(TABLE_NAME, id);
    return dispatch(deleteStaff(id));
  }
};
