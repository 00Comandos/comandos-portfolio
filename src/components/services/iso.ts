// Tiny isometric helpers for the services line illustrations: footprint
// cells (i, j) on a 2:1-ish iso grid, extruded to height z. Returns the
// three visible faces as SVG path strings, already back-to-front.

export type Faces = { top: string; left: string; right: string };

export type IsoGrid = {
  /** Screen origin of cell (0, 0)'s back corner. */
  ox: number;
  oy: number;
  /** Half-width / half-height of one cell's top diamond. */
  w: number;
  h: number;
};

const r = (v: number) => Math.round(v * 10) / 10;

export function pt(g: IsoGrid, i: number, j: number, z = 0): [number, number] {
  return [r(g.ox + (i - j) * g.w), r(g.oy + (i + j) * g.h - z)];
}

const poly = (pts: [number, number][]) => `M${pts.map((p) => p.join(" ")).join(" L")}Z`;

/**
 * Box over the footprint [i, i+di] × [j, j+dj], from z0 up to z1.
 * `gap` insets the footprint so neighbouring tiles read as separate.
 */
export function box(
  g: IsoGrid,
  i: number,
  j: number,
  z1: number,
  { di = 1, dj = 1, z0 = 0, gap = 0.08 }: { di?: number; dj?: number; z0?: number; gap?: number } = {},
): Faces {
  const a = i + gap;
  const b = j + gap;
  const c = i + di - gap;
  const d = j + dj - gap;
  return {
    top: poly([pt(g, a, b, z1), pt(g, c, b, z1), pt(g, c, d, z1), pt(g, a, d, z1)]),
    left: poly([pt(g, a, d, z1), pt(g, c, d, z1), pt(g, c, d, z0), pt(g, a, d, z0)]),
    right: poly([pt(g, c, b, z1), pt(g, c, d, z1), pt(g, c, d, z0), pt(g, c, b, z0)]),
  };
}

/** Padded viewBox around every point in the given path strings / points. */
export function fitViewBox(paths: string[], extra: [number, number][] = [], pad = 8): string {
  const xs: number[] = [];
  const ys: number[] = [];
  for (const d of paths) {
    const nums = d.match(/-?\d+(\.\d+)?/g)?.map(Number) ?? [];
    for (let k = 0; k + 1 < nums.length; k += 2) {
      xs.push(nums[k]);
      ys.push(nums[k + 1]);
    }
  }
  extra.forEach(([x, y]) => (xs.push(x), ys.push(y)));
  const x0 = Math.min(...xs) - pad;
  const y0 = Math.min(...ys) - pad;
  return [x0, y0, Math.max(...xs) + pad - x0, Math.max(...ys) + pad - y0].map(r).join(" ");
}
