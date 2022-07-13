<script setup lang="ts">
import { registerMicroApps, start } from "qiankun";

//注册微应用
registerMicroApps([
	{
		name: "test",
		entry: "//localhost:3000",
		container: "#mainwrapper",
		activeRule: "/app1",
	},
]);

//启动微应用
start({
	prefetch: "all",
	sandbox: {
		experimentalStyleIsolation: true,
	},
});
</script>
<template>
	hello
	<div id="mainwrapper"></div>
</template>
