import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  base: "/hagetracker/",
  build: {
    rolldownOptions: {
      output: {
        assetFileNames: "[name]-[hash][extname]",
        entryFileNames: "[name]-[hash].js",
      },
    },
  },
});
