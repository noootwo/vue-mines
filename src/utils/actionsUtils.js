import { AllIconValues, AllStatus, AllTypes } from "./allMaps";
import { deepCloneSimpleObject, isIJTrue } from "./commonUtils";
import { getMapItemUpdated } from "./renderUtils";

const openItem = (map, i, j) => {
  return (map[i][j] = getMapItemUpdated(map[i][j], {
    status: AllStatus.Opened,
  }));
};

const flagItem = (map, i, j) => {
  return (map[i][j] = getMapItemUpdated(map[i][j], {
    status: AllStatus.Flaged,
    maskValue: AllIconValues.Flag,
  }));
};

const emptyItem = (map, i, j) => {
  return (map[i][j] = getMapItemUpdated(map[i][j], {
    status: AllStatus.Masked,
    maskValue: AllIconValues.Empty,
  }));
};

const openAllEmptyAround = (map, i, j) => {
  const aroundItems = [
    { i: i - 1, j },
    { i, j: j + 1 },
    { i: i + 1, j },
    { i: i, j: j - 1 },
  ];

  aroundItems.forEach((item) => {
    if (!isIJTrue(map, item.i, item.j)) return;
    const curItem = map[item.i][item.j];
    if (curItem.status === AllStatus.Masked) {
      if (curItem.type === AllTypes.Empty) {
        openItem(map, item.i, item.j);
        openAllEmptyAround(map, item.i, item.j);
      } else if (curItem.type === AllTypes.Number) {
        openItem(map, item.i, item.j);
      }
    }
  });
};

export const mapItemLeftClickHandler = (map, i, j) => {
  if (map[i][j].status !== AllStatus.Masked) return false;

  const oldMap = deepCloneSimpleObject(map);
  const oldItem = oldMap[i][j];

  openItem(oldMap, i, j);

  if (oldItem.type === AllTypes.Empty) {
    openAllEmptyAround(oldMap, i, j);
  }

  return oldMap;
};

export const mapItemRightClickHandler = (map, i, j) => {
  if (map[i][j].status === AllStatus.Opened) return false;

  const oldMap = deepCloneSimpleObject(map);
  const oldItem = oldMap[i][j];

  if (oldItem.status === AllStatus.Flaged) {
    emptyItem(oldMap, i, j);
  } else if (oldItem.status === AllStatus.Masked) {
    flagItem(oldMap, i, j);
  }

  return oldMap;
};
