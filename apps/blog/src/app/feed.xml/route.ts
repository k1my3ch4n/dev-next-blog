import { getPosts } from "@entities/post";
import { SEO } from "@shared/config";

export const dynamic = "force-static";

const escapeXml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const toRssItem = (link: string, title: string, tags: string[]): string => {
  const categories = tags
    .map((tag) => `      <category>${escapeXml(tag)}</category>`)
    .join("\n");

  return [
    "    <item>",
    `      <title>${escapeXml(title)}</title>`,
    `      <link>${escapeXml(link)}</link>`,
    `      <guid isPermaLink="true">${escapeXml(link)}</guid>`,
    categories,
    "    </item>",
  ].join("\n");
};

export function GET() {
  const items = getPosts()
    .filter((post) => post.postKey !== null || post.externalUrl !== null)
    .map((post) => {
      const link = post.externalUrl ?? `${SEO.siteUrl}/blog/${post.postKey}`;
      return toRssItem(link, post.title, post.tags);
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SEO.title)}</title>
    <link>${SEO.siteUrl}</link>
    <description>${escapeXml(SEO.description)}</description>
    <language>ko</language>
    <atom:link href="${SEO.siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
