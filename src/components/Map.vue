<template>
  <div id="map">
    <div class="row" v-for="(row, i) in map" :key="i">
      <div
        class="col"
        :class="{
          'col-masked': !isItemOpened(col),
        }"
        v-for="(col, j) in row"
        :key="j"
        :style="{
          color: getItemFontColor(col),
          backgroundColor: getItemBackgroundColor(col),
          cursor: getCursorValue(col),
        }"
        @click="$emit('mapItemLeftClick', { i, j })"
        @contextmenu.prevent="$emit('mapItemRightClick', { i, j })"
      >
        {{ getContentValue(col) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  isItemOpened,
  getItemFontColor,
  getItemBackgroundColor,
  getCursorValue,
  getContentValue,
} from "../utils";

defineProps({
  map: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
#map {
  width: fit-content;
  height: fit-content;
  margin: 100px auto;
  border: 3px #cdcdcd solid;
  background-color: #fff;
  border-radius: 10px;
  padding: 0 2px 2px 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
#map .row {
  height: 30px;
  margin-bottom: 2px;
  display: flex;
  flex: auto;
}
#map .row .col {
  width: 30px;
  height: 100%;
  margin: 2px 0 0 2px;
  background-color: #cdcdcd;
  border-radius: 10px;
  flex: auto;

  display: flex;
  justify-content: center;
  align-items: center;
}

#map .row .col-masked:hover {
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
}
</style>
