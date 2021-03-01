export const getInfoAll = table => {
  const data = localStorage.getItem(table);
  return JSON.parse(data);
};
