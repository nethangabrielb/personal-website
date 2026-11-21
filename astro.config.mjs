import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://nethangabrielb.dev",
  output: "static",
  integrations: [mdx(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
