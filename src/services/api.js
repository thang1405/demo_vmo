import { editApi, deleteApi } from "../utils/api";

export const getTable = table => {
  const data = localStorage.getItem(table);
  return JSON.parse(data);
};

export const setTable = (table, data) => {
  localStorage.setItem(table, JSON.stringify(data));
};

export const getDetail = (table, id) => {
  const data = JSON.parse(localStorage.getItem(table));
  return data.find(item => item.id == id);
};

export const setDetail = (table, detail) => {
  let data = JSON.parse(localStorage.getItem(table));
  data = editApi(data, detail);
  localStorage.setItem(table, JSON.stringify(data));
};

export const deleteById = (table, id) => {
  let data = JSON.parse(localStorage.getItem(table));
  data = deleteApi(data, id);
  localStorage.setItem(table, JSON.stringify(data));
};
