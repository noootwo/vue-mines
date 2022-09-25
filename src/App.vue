<template>
	<Map :map="map" />
</template>

<script setup>
import { reactive } from 'vue'

import { createMap } from './utils'

import Map from './components/Map.vue'

const map = reactive(createMap(10, 10, 10))
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
