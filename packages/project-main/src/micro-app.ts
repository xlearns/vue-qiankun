import { getActiveRule } from "@test/utils/common";

const microApps = [
	{
		name: "vue3Vite",
		entry: "//localhost:3000/#/vue3Vite",
		container: "#mainwrapper",
		activeRule: "#/vue3Vite",
	},
];

const apps = microApps.map((item) => {
	return {
		...item,
		container: item.container || "#cnbi-viewport", // 子应用挂载的div
		props: {
			routerBase: item.activeRule, // 下发基础路由
		},
	};
});

export default apps;