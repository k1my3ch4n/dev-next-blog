import { render } from "@testing-library/react";
import { SEO } from "@shared/config";
import BlogPostingJsonLd from "./JsonLd";

describe("BlogPostingJsonLd", () => {
  it("renders a blog posting schema with a fallback description", () => {
    const { container } = render(
      <BlogPostingJsonLd
        title="Test post"
        postKey="test-post"
        tags={["React", "Testing"]}
      />,
    );

    const script = container.querySelector('script[type="application/ld+json"]');
    const schema = JSON.parse(script?.textContent ?? "{}");

    expect(schema).toMatchObject({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Test post",
      description: `Test post - ${SEO.siteName}`,
      url: `${SEO.siteUrl}/blog/test-post`,
      keywords: "React, Testing",
    });
  });

  it("uses an explicitly supplied description", () => {
    const { container } = render(
      <BlogPostingJsonLd
        title="Test post"
        postKey="test-post"
        tags={[]}
        description="Custom description"
      />,
    );

    const script = container.querySelector('script[type="application/ld+json"]');
    expect(JSON.parse(script?.textContent ?? "{}").description).toBe(
      "Custom description",
    );
  });
});
