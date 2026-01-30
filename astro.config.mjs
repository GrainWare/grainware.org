// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },

  adapter: node({
    mode: "standalone",
  }),

  prefetch: {
    prefetchAll: true,
  },

  build: {
    inlineStylesheets: "always",
  },

  image: {
    layout: "constrained",
  },
});
