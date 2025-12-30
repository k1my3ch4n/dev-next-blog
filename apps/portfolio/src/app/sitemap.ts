import { MetadataRoute } from "next";
import { PROJECTS } from "@data";

const BASE_URL = "https://portfolio.k1my3ch4n.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${BASE_URL}/project/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectPages,
  ];
}
