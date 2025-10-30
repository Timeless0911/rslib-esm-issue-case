import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      source: {
        entry: {
          foo: "./src/foo.ts",
          bar: "./src/bar.ts",
        },
      },
      output: {
        distPath: {
          root: "./dist-rslib",
        },
      },
      experiments: {
        advancedEsm: true,
      },
    },
  ],
});
