import { getPosts } from "@entities/post";
import { MetadataRoute } from "next";
import { SEO } from "@shared/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicUrls: MetadataRoute.Sitemap = getPosts()
    .filter(({ postKey, externalUrl }) => postKey !== null && externalUrl === null)
    .map(({ postKey }) => ({
      url: `${SEO.siteUrl}/blog/${postKey}`,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: SEO.siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SEO.siteUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SEO.siteUrl}/showcase`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  return [...staticUrls, ...dynamicUrls];
}
