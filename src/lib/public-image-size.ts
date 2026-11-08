/**
 * Intrinsic size of a file in /public (logos served as plain <img>), read
 * once at build time so every <img> can carry width + height (no layout
 * shift while it loads). SVGs use their width/height or viewBox.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const cache = new Map<string, { width: number; height: number } | null>();

export async function publicImageSize(src: string): Promise<{ width: number; height: number } | null> {
  if (cache.has(src)) return cache.get(src)!;
  let size: { width: number; height: number } | null = null;
  try {
    const file = join(process.cwd(), "public", src.replace(/^\//, ""));
    if (file.endsWith(".svg")) {
      const svg = readFileSync(file, "utf8").slice(0, 2000);
      const vb = svg.match(/viewBox="[\d.\s-]*?\s([\d.]+)\s+([\d.]+)"/);
      const w = svg.match(/\swidth="([\d.]+)"/);
      const h = svg.match(/\sheight="([\d.]+)"/);
      if (w && h) size = { width: +w[1], height: +h[1] };
      else if (vb) size = { width: +vb[1], height: +vb[2] };
    } else {
      const m = await sharp(file).metadata();
      if (m.width && m.height) size = { width: m.width, height: m.height };
    }
  } catch {
    size = null;
  }
  cache.set(src, size);
  return size;
}

/** Width for a logo rendered at a fixed CSS height, keeping its ratio. */
export async function widthAtHeight(src: string, height: number): Promise<number | undefined> {
  const s = await publicImageSize(src);
  return s ? Math.round((s.width / s.height) * height) : undefined;
}
