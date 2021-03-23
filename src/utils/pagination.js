export const totalPage = (data, limit) => {
  if (data.length) {
    const lengthData = data.length;
    const pageCount = Math.floor(lengthData / limit);
    return lengthData % limit ? pageCount + 1 : pageCount;
  }
  return 1;
};

export const totalOfPage = (length, limit) => {
  if (length) {
    const lengthData = length;
    const pageCount = Math.floor(lengthData / limit);
    return lengthData % limit ? pageCount + 1 : pageCount;
  }
  return 1;
};
