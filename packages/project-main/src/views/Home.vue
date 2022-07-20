<script lang="ts" setup>
import { useRouter } from "vue-router";
import store from "@/store/qiankun";

const router = useRouter();

function jump(url: string) {
	router.push(url);
}

setInterval(() => {
	store.setGlobalState({
		ignore: "***********main" + Math.random(),
		user: {
			name: "**********main" + Math.random(),
		},
	});
}, 4000);
</script>
<template>
	<div class="layout-wrapper">home</div>
	<div>{{ store.getGlobalState("user") }}</div>
</template>
