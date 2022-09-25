<template>
	<div id="map">
		<div class="row" v-for="i in map" :key="i">
			<div class="col" v-for="j in i" :key="j">
				{{ j.value }}
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	map: {
		type: Array,
		required: true,
	},
})
</script>

<style scoped>
#map {
	width: fit-content;
	height: fit-content;
	margin: 100px auto;
	border: 1px #1c1d1f solid;
	border-radius: 10px;
	padding-bottom: 2px;
	overflow: hidden;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}
#map .row {
	height: 30px;
	margin: 0 2px 2px 0;
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
</style>
