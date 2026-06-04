import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      prerenderScript: path.resolve(__dirname, "prerender.jsx"),
      renderTarget: "#root",
      additionalPrerenderRoutes: ["/404"],
    }),
    {
      name: "force-close",
      closeBundle() {
        setTimeout(() => process.exit(0), 300);
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
