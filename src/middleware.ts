import { defineMiddleware } from "astro:middleware";

const GONE_PREFIXES = ["/goods/", "/b/"];

const HAS_EXTENSION = /\.[a-z0-9]+$/i;

export const onRequest = defineMiddleware(async (ctx, next) => {
  const { pathname, search } = ctx.url;

  if (GONE_PREFIXES.some((p) => pathname.startsWith(p))) {
    return new Response("Gone — this URL is no longer available.", {
      status: 410,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "public, max-age=86400",
        "x-robots-tag": "noindex",
      },
    });
  }

  if (
    pathname !== "/" &&
    !pathname.startsWith("/api/") &&
    !pathname.endsWith("/") &&
    !HAS_EXTENSION.test(pathname)
  ) {
    return ctx.redirect(`${pathname}/${search}`, 308);
  }

  return next();
});
