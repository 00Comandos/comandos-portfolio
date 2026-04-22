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
  integrations: [
    react(),
    sitemap({
      changefreq: "weekly",
      lastmod: new Date(),
      priority: 0.7,
      serialize(item) {
        // Higher priority + daily freshness for the home and the projects
        // index; keep case studies on weekly.
        if (item.url === "https://comandos.me/") {
          return { ...item, priority: 1.0, changefreq: "weekly" };
        }
        if (item.url === "https://comandos.me/projects/") {
          return { ...item, priority: 0.9, changefreq: "weekly" };
        }
        return item;
      },
    }),
    icon(),
  ],
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
