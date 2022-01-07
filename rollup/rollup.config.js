import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
	input: "./rollup.mjs",
	output: {
		file: "../scripts/bundle.min.mjs",
		format: "es",
	},
	plugins: [nodeResolve(), terser()],
};