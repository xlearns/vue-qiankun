<script setup lang="ts">
import { useQiankun } from "@test/hooks";
const { isQiankun } = useQiankun();
</script>
<template>
	home
	<div>isQiankun: {{ isQiankun }}</div>
</template>
