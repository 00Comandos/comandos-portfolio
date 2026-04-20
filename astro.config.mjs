// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://comandos.me",
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [react(), sitemap(), icon()],
  vite: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: [/** @type {any} */ (tailwindcss())],
  },
  server: {
    host: "0.0.0.0",
    port: 3002,
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
