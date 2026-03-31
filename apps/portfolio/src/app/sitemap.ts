import { MetadataRoute } from "next";

const BASE_URL = "https://portfolio.k1my3ch4n.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
