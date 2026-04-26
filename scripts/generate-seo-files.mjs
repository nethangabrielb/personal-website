import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { loadEnv } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const defaultSiteUrl = "https://nethangabrielb.vercel.app";
const mode =
  process.env.NODE_ENV === "development" ? "development" : "production";
const envFromFiles = loadEnv(mode, projectRoot, "");
const rawSiteUrl =
  process.env.VITE_SITE_URL || envFromFiles.VITE_SITE_URL || defaultSiteUrl;
const siteUrl = rawSiteUrl.replace(/\/+$/, "");

const robotsContent = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
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
