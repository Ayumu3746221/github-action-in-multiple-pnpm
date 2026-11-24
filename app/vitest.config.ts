import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    // Reuse the `paths` aliases from tsconfig.json (e.g. `@/*` -> `./src/*`).
    tsconfigPaths: true,
  },
});
