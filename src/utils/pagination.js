export const totalPage = (data, limit) => {
  if (data.length) {
    let lengthData = data.length;
    let pageCount = Math.floor(lengthData / limit);
    return lengthData % limit ? pageCount + 1 : pageCount;
  }
  return 1;
};
