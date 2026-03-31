import { getHomeData } from "@shared/api";
import { MetadataRoute } from "next";
import { SEO } from "@shared/config";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data, error } = await getHomeData();

  if (error) {
    console.error("Sitemap generation error:", error);
  }

  const dynamicUrls: MetadataRoute.Sitemap = data.posts.map(({ postKey }) => ({
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
  ];

  return [...staticUrls, ...dynamicUrls];
}
