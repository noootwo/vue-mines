import {
  AllBackgroundColors,
  AllFontColors,
  AllStatus,
  AllTypes,
} from "./allMaps";

export const isItemOpened = (item) => item.status === AllStatus.Opened;

export const getItemBackgroundColor = (item) => {
  if (item.status === AllStatus.Masked || item.status === AllStatus.Flaged) {
    return AllBackgroundColors.Masked;
  } else if (item.status === AllStatus.Opened) {
    return AllBackgroundColors.Opened;
  }
};

export const getItemFontColor = (item) => {
  if (item.type === AllTypes.Number) {
    return AllFontColors[item.value];
  } else {
    return AllFontColors[0];
  }
};

export const getCursorValue = (item) =>
  item.status === AllStatus.Opened ? "default" : "pointer";

export const getContentValue = (item) => {
  return isItemOpened(item) ? item.value : item.maskValue;
};

export const getMapItemUpdated = (oldItem, newItem) =>
  Object.assign(oldItem, newItem);
