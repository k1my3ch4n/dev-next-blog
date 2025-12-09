import prefetchHomeData from "@/prefetcher/prefetchHomeData";
import { MetadataRoute } from "next";

const BASE_URL = "https://blog.k1my3ch4n.xyz";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data } = await prefetchHomeData();

  const dynamicUrls: MetadataRoute.Sitemap = data.posts.map(({ postKey }) => ({
    url: `${BASE_URL}/blog/${postKey}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  return [...staticUrls, ...dynamicUrls];
}
