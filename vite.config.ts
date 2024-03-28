import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "node:path";

export default defineConfig({
	resolve: {
		alias: {
			$: path.resolve(__dirname, "./src"),
			$assets: path.resolve(__dirname, "./src/assets"),
			$components: path.resolve(__dirname, "./src/components"),
			$routes: path.resolve(__dirname, "./src/routes"),
		},
	},
	plugins: [solid()],
});
