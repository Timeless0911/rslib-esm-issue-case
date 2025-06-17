import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      bundle: false,
      format: "esm",
      output: {
        distPath: {
          root: "./dist-rslib/esm",
        },
      },
    },
    {
      bundle: false,
      format: "cjs",
      output: {
        distPath: {
          root: "./dist-rslib/cjs",
        },
      },
    },
  ],
  output: {
    sourceMap: true,
  },
});
