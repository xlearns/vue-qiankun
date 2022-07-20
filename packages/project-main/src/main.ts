import { createApp } from "vue";
import App from "./App.vue";
import { registerMicroApps, start, setDefaultMountApp } from "qiankun";
import microApps from "./micro-app";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(router);

app.use(ElementPlus);

const instance = app.mount("#app") as any;

function loader(loading: any) {
	if (instance.isLoading) {
		instance.isLoading = loading;
	}
}

const apps = microApps.map((item) => {
	return {
		...item,
		loader,
	};
});

registerMicroApps(apps, {
	beforeLoad: (app: any) => {
		console.log("before load app.name====>>>>>", app.name);
	},
	beforeMount: [
		(app: any) => {
			console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
		},
	],
	afterMount: [
		(app: any) => {
			console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
			// Vue.prototype.$qiankun = props;
		},
	],
	afterUnmount: [
		(app: any) => {
			console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
		},
	],
} as any);

// setDefaultMountApp("/vue3Vite");
start();
