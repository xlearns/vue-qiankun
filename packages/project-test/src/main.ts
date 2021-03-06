import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router";
import {
	renderWithQiankun,
	qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import { createRouter, createWebHistory } from "vue-router";
import { setupStore } from "./store";
import { useSettingStoreHook } from "./store/modules/global";
const globalData = useSettingStoreHook();

function changeGlobal(key: string, value: any) {
	globalData.changeGlobal({ key, value });
}

function setDomain() {
	(window as any).ISNK = document.domain.indexOf("172") > -1; // 如果是172客户的域名,那就拿客户地址,自动判断,这里搞个全局判断标志
	(window as any).ORIGIN =
		process.env.NODE_ENV === "development"
			? process.env.VITE_ORIGIN_DEV
			: process.env.VITE_ORIGIN_PRO;
	// process.env.NODE_ENV === "development"
	//   ? process.env.VITE_ORIGIN_DEV
	//   : (window as any).ISNK
	//   ? process.env.VITE_ORIGIN_PRO
	//   : process.env.VITE_ORIGIN_PRO_TEST;
}
//  设置主域名,但不跟随基座端口变化而变化
setDomain();
let router = null;
let instance: any = null;
let history: any = null;

function render(props: any = {}) {
	const { container, routerBase, getGlobalState } = props;
	//   console.log(container, routerBase, getGlobalState);
	history = createWebHistory(
		qiankunWindow.__POWERED_BY_QIANKUN__ ? "#/vue3Vite" : "/"
	);
	//   console.log(history,qiankunWindow.__POWERED_BY_QIANKUN__ ,"history");
	router = createRouter({
		history,
		routes,
	});

	instance = createApp(App);
	instance.use(router);
	setupStore(instance);
	//   instance.use(store);
	instance.mount(
		container ? container.querySelector("#app") : document.getElementById("app")
	);
	if (qiankunWindow.__POWERED_BY_QIANKUN__) {
		console.log("我正在作为子应用运行");
		changeGlobal("msg", getGlobalState);
	}
}

// some code
renderWithQiankun({
	mount(props: any) {
		console.log("viteapp mount");
		render(props);
		instance.provide("onGlobalStateChange", props.onGlobalStateChange);
		instance.provide("setGlobalState", props.setGlobalState);
		instance.provide("getGlobalState", props.getGlobalState);
	},
	bootstrap() {
		console.log("bootstrap");
	},
	unmount(props: any) {
		console.log("vite被卸载了");
		instance.unmount();
		instance._container.innerHTML = "";
		history.destroy(); // 不卸载  router 会导致其他应用路由失败
		router = null;
		instance = null;
	},
} as any);

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
	render();
}
