import { MetadataRoute } from "next";
import { SEO } from "@shared/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SEO.siteUrl}/sitemap.xml`,
  };
}
