import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      autoExtension: false,
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
