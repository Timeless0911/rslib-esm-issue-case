import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist-tsup",
  clean: true,
  format: ["esm"],
});
