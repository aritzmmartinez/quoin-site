import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default defineConfig(
  { ignores: ["dist/**", ".astro/**", "node_modules/**", "docs/design/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  ...astro.configs["jsx-a11y-strict"],
  {
    files: ["**/*.tsx"],
    ...jsxA11y.flatConfigs.strict,
  },
  {
    files: ["scripts/**/*.mjs"],
    languageOptions: { globals: { console: "readonly", process: "readonly" } },
  },
  {
    files: ["**/*.astro"],
    rules: {
      "astro/jsx-a11y/no-noninteractive-tabindex": ["error", { tags: ["pre"] }],
    },
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
);
