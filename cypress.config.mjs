import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite"
import path from "path"

export default defineConfig({
  e2e: {
    setupNodeEvents(on, c) {
      on("file:preprocessor", vitePreprocessor({}))
    },
    baseUrl: "https://www.kblue-dev.io:30001",
  },
  defaultBrowser: "chrome",
});
