import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      bundle: false,
      output: {
        distPath: {
          root: "./dist-rslib",
        },
      },
    },
  ],
});
