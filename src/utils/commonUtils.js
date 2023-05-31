export const deepCloneSimpleObject = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const isIJTrue = (map, i, j) =>
  i >= 0 && j >= 0 && i < map.length && j < map[0].length;
