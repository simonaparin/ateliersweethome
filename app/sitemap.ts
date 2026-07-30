import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteConfig.siteUrl}/reconstruction`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${siteConfig.siteUrl}/summer-kitchen`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${siteConfig.siteUrl}/roof`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${siteConfig.siteUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    },
    ...["en", "ge"].flatMap((locale) => ["", "/reconstruction", "/roof", "/summer-kitchen", "/contacts"].map((path) => ({
      url: `${siteConfig.siteUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "/reconstruction" ? 0.9 : 0.7
    })))
  ];
}
