import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const rawSiteUrl = process.env.SITE_URL || "https://nethangabrielb.dev";
const siteUrl = rawSiteUrl.replace(/\/+$/, "");

const routes = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/work/devlog", priority: "0.9", changefreq: "monthly" },
  { path: "/work/calibrate-ai", priority: "0.9", changefreq: "monthly" },
  { path: "/work/chirper", priority: "0.9", changefreq: "monthly" },
];

const robotsContent = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const sitemapEntries = routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("\n");

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`;

await writeFile(
  path.join(projectRoot, "public", "robots.txt"),
  robotsContent,
  "utf8",
);
await writeFile(
  path.join(projectRoot, "public", "sitemap.xml"),
  sitemapContent,
  "utf8",
);

console.log(`Generated robots.txt and sitemap.xml for ${siteUrl}`);
