import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/home",
		name: "Home",
		component: () => import("@/views/Home.vue"),
		meta: {
			title: "首页",
		},
	},
	{
		path: "/vue3Vite/",
		name: "vue3Vite",
		component: import("@/views/vue3Vite/index.vue"),
		children: [
			{
				path: "/vue3Vite/about",
				name: "vue3ViteAbout",
				component: import("@/views/vue3Vite/index.vue"),
			},
		],
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
