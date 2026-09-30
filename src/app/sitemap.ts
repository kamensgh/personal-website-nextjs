import type { MetadataRoute } from "next";
import { SITE_URL } from "./site";

// Single-page site: the sections are anchors on "/", which crawlers reach by
// following the in-page links, so only the root belongs in the sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
