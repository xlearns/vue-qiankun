<script setup lang="ts">
import { watchEffect, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const defaultActive = ref();
const nav = ref([
	{
		name: "project-main",
		path: "/home",
	},
	{
		name: "project-test",
		path: "/vue3Vite",
	},
]);
function formatEn(path: string) {
	return path.replace(/\/$/g, "");
}
watchEffect(() => {
	defaultActive.value = route.path;
	const routeArr = route.path.split("/");
	let path = "";
	if (routeArr.length === 0) {
		path = formatEn(route.path);
		if (path == "") path = "/home";
	} else {
		path = "/" + routeArr[1];
	}
	defaultActive.value = path;
});
</script>
<template>
	<ElMenu :default-active="defaultActive" class="ElMenu-vertical-demo" router>
		<ElMenuItem :index="item.path" v-for="item in nav" :key="item">{{
			item.name
		}}</ElMenuItem>
	</ElMenu>
</template>
