import { SEO } from "@shared/config";

interface BlogPostingJsonLdProps {
  title: string;
  postKey: string;
  tags: string[];
  description?: string;
}

const BlogPostingJsonLd = ({
  title,
  postKey,
  tags,
  description,
}: BlogPostingJsonLdProps) => {
  const postUrl = `${SEO.siteUrl}/blog/${postKey}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description ?? `${title} - ${SEO.siteName}`,
    author: {
      "@type": "Person",
      name: SEO.author,
    },
    publisher: {
      "@type": "Person",
      name: SEO.author,
    },
    url: postUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    keywords: tags.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default BlogPostingJsonLd;
