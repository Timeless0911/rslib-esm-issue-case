import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    foo: "src/foo.ts",
    bar: "src/bar.ts",
  },
  outDir: "dist-tsup",
  clean: true,
  format: ["esm"],
});
