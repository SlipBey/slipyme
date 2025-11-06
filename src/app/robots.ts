import { CONFIG } from "@/lib/seo";
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${CONFIG.SEO.publishDomain}/sitemap.xml`,
    host: CONFIG.SEO.publishDomain,
  };
}
