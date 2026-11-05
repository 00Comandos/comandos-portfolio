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
      // No global `lastmod`: stamping every URL with the build time on each
      // deploy is noise Google learns to ignore. Add real per-page dates
      // here (e.g. from case-study data) once they exist.
      changefreq: "weekly",
      priority: 0.7,
      // Image + video sitemap (src/pages/sitemap-images.xml.ts) is listed
      // in the index so crawlers find it without robots.txt.
      customSitemaps: ["https://www.comandos.me/sitemap-images.xml"],
      serialize(item) {
        // Higher priority for the home and the projects index; case studies
        // and the rest keep the default.
        if (item.url === "https://www.comandos.me/") {
          return { ...item, priority: 1.0 };
        }
        if (item.url === "https://www.comandos.me/projects/") {
          return { ...item, priority: 0.9 };
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
