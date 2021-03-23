export const editApi = (array = [], data) => {
  return array.map(item => {
    return item.id === data.id ? data : item;
  });
};

export const randomId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const deleteApi = (array = [], id) => {
  return array.filter(item => item.id !== id);
};
