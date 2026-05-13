import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

const ROUTES = [
  "",
  "about",
  "projects",
  "contact",
  "carier",
  "social",
  "social-responsibility",
  "media",
  "music",
  "policies/kvkk",
  "policies/tos",
  "policies/privacy",
  "policies/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: path ? `${SITE.url}/${path}` : `${SITE.url}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
