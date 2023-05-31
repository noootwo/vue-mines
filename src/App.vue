<template>
  <Map
    :map="map"
    @mapItemLeftClick="handleLeftClickMapItem"
    @mapItemRightClick="handleRightClickMapItem"
  />
</template>

<script setup>
import { ref } from "vue";

import {
  createMap,
  mapItemLeftClickHandler,
  mapItemRightClickHandler,
} from "./utils";

import Map from "./components/Map.vue";

const map = ref(createMap(12, 12, 30));

const updateMap = (newMap) => {
  if (newMap) {
    map.value = newMap;
  }
};

const handleLeftClickMapItem = ({ i, j }) => {
  updateMap(mapItemLeftClickHandler(map.value, i, j));
};

const handleRightClickMapItem = ({ i, j }) => {
  updateMap(mapItemRightClickHandler(map.value, i, j));
};
</script>

<style>
* {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #2c3e50;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
