<script setup lang="ts">
import { useQiankun } from "@test/hooks";
import { useSettingStoreHook } from "@/store/modules/global";
import { inject, onMounted, ref } from "vue";

const onGlobalStateChange: any = inject("onGlobalStateChange");
const setGlobalState = inject("setGlobalState");
const getGlobalState: any = inject("getGlobalState");

const globalData = useSettingStoreHook();

const data = ref();
const { isQiankun } = useQiankun();

onMounted(() => {
	if (typeof getGlobalState == "function") {
		const globalState = getGlobalState();
		data.value = globalState.user;
	}
});
if (typeof onGlobalStateChange == "function") {
	onGlobalStateChange((key: any, value: any) => {
		console.log(key, value);
		data.value = key.user;
	});
}
</script>
<template>
	home
	<div>isQiankun: {{ isQiankun }}</div>
	<div>{{ isQiankun ? "不是独立运行" : "独立运行" }}</div>
	<div>{{ globalData.msg }}</div>
	<div>{{ data }}</div>
</template>
