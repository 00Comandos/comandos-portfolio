// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.comandos.me",
  output: "server",
  adapter: vercel(),
  integrations: [
    react(),
    sitemap({
      changefreq: "weekly",
      lastmod: new Date(),
      priority: 0.7,
      serialize(item) {
        // Higher priority + daily freshness for the home and the projects
        // index; keep case studies on weekly.
        if (item.url === "https://www.comandos.me/") {
          return { ...item, priority: 1.0, changefreq: "weekly" };
        }
        if (item.url === "https://www.comandos.me/projects/") {
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
