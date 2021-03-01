export const setData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
