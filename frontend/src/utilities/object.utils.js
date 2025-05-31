export const resetObjValues = (obj) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key] = '';
    return acc;
  }, {});