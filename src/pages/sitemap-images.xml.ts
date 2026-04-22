import type { APIRoute } from "astro";
import { getImage } from "astro:assets";
import { projects } from "~/data/projects";
import { getCaseStudy } from "~/data/case-studies";
import { extractCaseStudyImages } from "~/lib/case-study-images";
import { site } from "~/lib/site";

export const prerender = true;

const escapeXml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export const GET: APIRoute = async () => {
  const entries: string[] = [];

  for (const project of projects) {
    const loc = `${site.url}/projects/${project.slug}`;

    // Always include the thumbnail/hero image used on the card.
    const thumb = await getImage({
      src: project.image,
      width: 1200,
      format: "webp",
    });
    const thumbUrl = new URL(thumb.src, site.url).toString();

    const images: { url: string; title: string; caption: string }[] = [
      {
        url: thumbUrl,
        title: `${project.brand} — ${project.title}`,
        caption: project.description,
      },
    ];

    // If there's a full case study, add every in-page image too,
    // dedup'd by source.
    const caseStudy = getCaseStudy(project.slug);
    if (caseStudy) {
      const inPage = extractCaseStudyImages(caseStudy);
      const seen = new Set<string>([thumb.src]);
      for (const ci of inPage) {
        if (seen.has(ci.image.src)) continue;
        seen.add(ci.image.src);
        const variant = await getImage({
          src: ci.image,
          width: 1200,
          format: "webp",
        });
        images.push({
          url: new URL(variant.src, site.url).toString(),
          title: `${project.brand} — ${ci.alt.slice(0, 90)}`,
          caption: ci.caption ?? ci.alt,
        });
      }
    }

    const imageXml = images
      .map(
        (img) => `    <image:image>
      <image:loc>${escapeXml(img.url)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`,
      )
      .join("\n");

    entries.push(`  <url>
    <loc>${loc}</loc>
${imageXml}
  </url>`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=UTF-8" },
  });
};
