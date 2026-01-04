import { SEO } from "@/constants/seo";

interface BlogPostingJsonLdProps {
  title: string;
  postKey: string;
  tags: string[];
}

const BlogPostingJsonLd = ({ title, postKey, tags }: BlogPostingJsonLdProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    author: {
      "@type": "Person",
      name: SEO.author,
    },
    publisher: {
      "@type": "Person",
      name: SEO.author,
    },
    url: `${SEO.siteUrl}/blog/${postKey}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SEO.siteUrl}/blog/${postKey}`,
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
