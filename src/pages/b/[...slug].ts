import type { APIRoute } from "astro";

export const GET: APIRoute = () =>
  new Response("Gone — this URL is no longer available.", {
    status: 410,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "x-robots-tag": "noindex",
      "cache-control": "public, max-age=86400",
    },
  });
