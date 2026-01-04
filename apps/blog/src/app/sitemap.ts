import prefetchHomeData from "@/prefetcher/prefetchHomeData";
import { MetadataRoute } from "next";
import { SEO } from "@/constants/seo";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data } = await prefetchHomeData();

  const dynamicUrls: MetadataRoute.Sitemap = data.posts.map(({ postKey }) => ({
    url: `${SEO.siteUrl}/blog/${postKey}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: SEO.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SEO.siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  return [...staticUrls, ...dynamicUrls];
}
