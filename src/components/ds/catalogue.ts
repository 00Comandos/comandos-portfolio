/*
 * Helpers for the internal /ds/ catalogue only.
 *  - `pick` lifts a real block out of a case study (no invented samples).
 *  - `classifyChecklist` mirrors the auto-layout rules of
 *    src/components/case-study/Checklist.astro so the catalogue can list
 *    where each layout is used. If Checklist's rules change, update this.
 */
import type {
  AdventureBlock,
  CaseStudyContent,
  ChecklistItem,
  WorthBlock,
} from "~/data/case-studies/types";

export type Block = AdventureBlock | WorthBlock;
type Kind = Block["kind"];
export type BlockOf<K extends Kind> = Extract<Block, { kind: K }>;

export const blocksOf = (cs: CaseStudyContent): Block[] => [...cs.adventure.blocks, ...cs.worth.blocks];

export function pick<K extends Kind>(
  cs: CaseStudyContent,
  kind: K,
  pred: (b: BlockOf<K>) => boolean = () => true,
): BlockOf<K> {
  const found = blocksOf(cs).find((b): b is BlockOf<K> => b.kind === kind && pred(b as BlockOf<K>));
  if (!found) throw new Error(`[ds] no "${kind}" block in ${cs.slug} matching the predicate`);
  return found;
}

/* ---------- Checklist auto-layout (mirror of Checklist.astro) ---------- */

export type ChecklistLayout = "cards" | "rings" | "chart" | "quotes" | "flow";
export type ChecklistResolved =
  | "research-scene"
  | "quotes"
  | "flow"
  | "chart"
  | "rings"
  | "cards"
  | "pictogram"
  | "metric"
  | "pillars"
  | "list";

const LEAD = /^([+\-−]?\d[\d.,]*\s*(?:%|x|×|k)?)\s+(.+)$/;
const RATIO = /^(\d+)\s*\/\s*(\d+)\s*(.*)$/;
const METRIC = /^([+\-−]?\d[\d.,]*\s*(?:%|x|×)?)\s*(.*?)\s*:?\s*$/;

export const layoutOf = (b: BlockOf<"checklist">): ChecklistLayout | undefined => ("layout" in b ? b.layout : undefined);

export function classifyChecklist(items: readonly ChecklistItem[], layout?: ChecklistLayout) {
  const isResearch = items.length > 0 && items.every((i) => i.sub && i.sub.length > 0);
  const hasTitle = !isResearch && items.length > 1 && !items[0].body && items.slice(1).some((i) => i.body);
  const lead = hasTitle && LEAD.test(items[0].label);
  const rows = hasTitle ? items.slice(1) : items;
  const ratios = rows.map((r) => r.label.match(RATIO)).map((m) => (m && +m[2] <= 20 ? m : null));
  const isRatio = !isResearch && ratios.length > 0 && ratios.every(Boolean);
  const metrics = rows.map((r) => r.label.match(METRIC));
  const isMetric = !isResearch && !isRatio && metrics.length > 1 && metrics.every(Boolean);
  const pctMetric = isMetric && metrics.every((m) => m![1].replace(/\s+/g, "").endsWith("%"));
  const sameD = isRatio && ratios.every((m) => m![2] === ratios[0]![2]);
  const isPillars = !isResearch && !isRatio && !isMetric && rows.length >= 2 && rows.length <= 4 && rows.every((r) => r.body);

  let resolved: ChecklistResolved;
  if (isResearch) resolved = "research-scene";
  else if (layout === "quotes") resolved = "quotes";
  else if (layout === "flow" && isRatio && rows.length > 1 && sameD) resolved = "flow";
  else if (layout === "chart" && (isRatio || pctMetric)) resolved = "chart";
  else if (isRatio && layout === "rings") resolved = "rings";
  else if (isRatio && layout === "cards") resolved = "cards";
  else if (isRatio) resolved = "pictogram";
  else if (isMetric) resolved = "metric";
  else if (isPillars) resolved = "pillars";
  else resolved = "list";

  const flags: string[] = [];
  if (hasTitle && resolved !== "quotes") flags.push(lead ? (resolved === "pillars" ? "lead figure" : "lead dropped") : "title");
  if (resolved === "pillars" && rows.some((r) => r.art)) flags.push("art");
  // Mirror of allQuestions: lowercase bodies join the title (no body left).
  const ownBodies = rows.map((r) => (r.body && !/^[a-z]/.test(r.body) ? r.body : undefined));
  if (resolved === "pillars" && ownBodies.every((b) => !b || /\?\s*$/.test(b)) && ownBodies.some(Boolean)) flags.push("questions");
  return { resolved, flags };
}

/** Every checklist in every case study (incl. step tails and illustrated groups), classified. */
export function checklistUsage(all: readonly CaseStudyContent[]) {
  const out: {
    slug: string;
    where: string;
    layout?: ChecklistLayout;
    resolved: ChecklistResolved;
    flags: string[];
    items: readonly ChecklistItem[];
  }[] = [];
  for (const cs of all) {
    const scan = (blocks: readonly Block[], where: string) =>
      blocks.forEach((b) => {
        if (b.kind === "checklist") {
          const layout = layoutOf(b);
          out.push({ slug: cs.slug, where, layout, ...classifyChecklist(b.items, layout), items: b.items });
        } else if (b.kind === "step" && b.tail) {
          out.push({ slug: cs.slug, where: `${where} · step tail`, ...classifyChecklist(b.tail), items: b.tail });
        } else if (b.kind === "illustrated-groups") {
          b.groups.forEach((g) =>
            out.push({ slug: cs.slug, where: `${where} · group`, ...classifyChecklist(g.items), items: g.items }),
          );
        }
      });
    scan(cs.adventure.blocks, "adventure");
    scan(cs.worth.blocks, "worth");
  }
  return out;
}
