import { createHash } from "node:crypto";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defaultLocale, locales } from "./src/i18n/config";
import { THEME_SCRIPT } from "./src/lib/theme";
import {
  LOCALE_REDIRECT_SCRIPT,
  NOT_FOUND_LANG_SCRIPT,
} from "./src/lib/locale-redirect";
import { buildStyles } from "number-flow/csp";

const sha256 = (source: string) =>
  `sha256-${createHash("sha256").update(source).digest("base64")}` as const;

export default defineConfig({
  site: "https://quoin.aritzmmartinez.dev",
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
  i18n: {
    locales: [...locales],
    defaultLocale,
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  security: {
    csp: {
      styleDirective: { hashes: buildStyles("-react").map(sha256) },
      scriptDirective: {
        hashes: [
          sha256(THEME_SCRIPT),
          sha256(LOCALE_REDIRECT_SCRIPT),
          sha256(NOT_FOUND_LANG_SCRIPT),
        ],
      },
    },
  },
  markdown: { syntaxHighlight: false },
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        return path !== "/" && !path.endsWith("/404");
      },
      i18n: {
        defaultLocale,
        locales: { es: "es", en: "en" },
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
