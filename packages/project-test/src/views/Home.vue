<script setup lang="ts">
import { useQiankun } from "@test/hooks";
import { useSettingStoreHook } from "@/store/modules/global";
import { inject, onMounted } from "vue";

const onGlobalStateChange: any = inject("onGlobalStateChange");
const setGlobalState = inject("setGlobalState");
const getGlobalState = inject("getGlobalState");

const globalData = useSettingStoreHook();

const { isQiankun } = useQiankun();

onGlobalStateChange(() => {
	console.log("onGlobalStateChange");
});
onMounted(() => {
	console.log(getGlobalState, "8999999");
});
</script>
<template>
	home
	<div>isQiankun: {{ isQiankun }}</div>
	<div>{{ isQiankun ? "不是独立运行" : "独立运行" }}</div>
	<div>{{ globalData.msg }}</div>
</template>
