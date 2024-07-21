/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  appType: "mpa",
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["src/setupTests.ts"],
  },
});
