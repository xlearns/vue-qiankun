import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	base: "./",
	build: {
		outDir: "../../dist/qiankun",
	},
	server: {
		port: 8080,
	},
});
