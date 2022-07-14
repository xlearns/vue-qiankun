import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/home",
		name: "Home",
		component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
		meta: {
			title: "首页",
		},
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
