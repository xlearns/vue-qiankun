<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();

function jump(url: string) {
	router.push(url);
}
</script>
<template>
	<div class="layout-wrapper">home</div>
</template>
