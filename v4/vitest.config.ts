import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["packages/**/*.test.ts"],
    exclude: ["apps/**", "node_modules/**", "**/node_modules/**"]
  }
});
