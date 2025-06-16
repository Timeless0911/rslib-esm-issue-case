import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      format: "esm",
      source: {
        entry: {
          foo: "./src/foo.ts",
          bar: "./src/bar.ts",
        },
      },
    },
  ],
});
