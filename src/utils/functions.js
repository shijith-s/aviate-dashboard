export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
