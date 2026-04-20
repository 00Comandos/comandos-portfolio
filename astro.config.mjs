// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://comandos.me",
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [react(), sitemap()],
  vite: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: [/** @type {any} */ (tailwindcss())],
  },
  server: {
    host: "0.0.0.0",
    port: 4321,
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
