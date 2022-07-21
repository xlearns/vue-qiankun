import store from "./store/qiankun/index";
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
			getGlobalState: store.getGlobalState, // 下发getGlobalState方法
		},
	};
});

export default apps;
