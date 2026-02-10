import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://devbysergio.com",
  integrations: [react(), sitemap()],
});
