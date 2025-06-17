import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      bundle: false,
      autoExtension: false,
      output: {
        distPath: {
          root: "./dist-rslib",
        },
      },
    },
  ],
});
