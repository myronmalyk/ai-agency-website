import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/jsonld";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-05");
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/abbotsford`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/surrey`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/faq`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
