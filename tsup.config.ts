import {defineConfig, Options} from "tsup";

export default defineConfig((options: Options) => ({
    shims: true,
    entry: ["src/index.ts"],
    dts: true,
    sourcemap: true,
    format: options.watch ? ['esm'] : ["esm", "cjs", "iife"],
    clean: true,
    watch: !!options.watch,
    minify: !options.watch,
    minifySyntax: !!options.watch,
    minifyWhitespace: !options.watch,
    minifyIdentifiers: !options.watch,
    splitting: !options.watch,
    treeshake: !options.watch,
}))