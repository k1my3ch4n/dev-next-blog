import getHomeData from "@data/getHomeData";
import { MetadataRoute } from "next";
import { SEO } from "@/constants/seo";

export const revalidate = 60; // 60초마다 데이터 갱신

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data, error } = await getHomeData();

  if (error) {
    console.error("Sitemap generation error:", error);
  }

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
