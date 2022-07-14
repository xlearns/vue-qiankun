import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";
import { resolve } from "path";
import { loadEnv } from "vite";
// useDevMode 开启时与热更新插件冲突
const useDevMode = true;

export default ({ command, mode }) => {
	const root = process.cwd();
	const { VITE_PORT } = loadEnv(mode, root);

	return {
		define: {
			"process.env": {},
		},
		plugins: [vue(), qiankun("vue3Vite", { useDevMode })],
		resolve: {
			extensions: [".js", ".vue", ".json"],
			alias: {
				"@": resolve("src"),
			},
		},
		server: {
			host: "0.0.0.0",
			port: VITE_PORT,
			cors: true,
		},
	};
};
