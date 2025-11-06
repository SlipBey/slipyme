import { CONFIG } from "@/lib/seo";

export default async function sitemap() {
  const base = CONFIG.SEO.publishDomain;
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/about`, lastModified: now },
    { url: `${base}/projects`, lastModified: now },
    { url: `${base}/social`, lastModified: now },
    { url: `${base}/csr`, lastModified: now },
    { url: `${base}/career`, lastModified: now },
    { url: `${base}/contact`, lastModified: now },
    { url: `${base}/social`, lastModified: now },
    { url: `${base}/social-responsibility`, lastModified: now },
    { url: `${base}/media`, lastModified: now },
    { url: `${base}/policies/privacy`, lastModified: now },
    { url: `${base}/policies/cookies`, lastModified: now },
    { url: `${base}/policies/kvkk`, lastModified: now },
    { url: `${base}/policies/tos`, lastModified: now },
  ];
}
