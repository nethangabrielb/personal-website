import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default defineConfig(
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**", "public/**", "scripts/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
);
