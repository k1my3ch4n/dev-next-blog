import { getPost } from "@entities/post";
import { SEO } from "@shared/config";
import { generateMetadata } from "./layout";

describe("blog post metadata", () => {
  it("generates canonical article metadata for an existing post", async () => {
    const post = getPost("blog-toc");
    expect(post).not.toBeNull();

    const metadata = await generateMetadata({
      params: Promise.resolve({ postKey: "blog-toc" }),
    });

    expect(metadata).toMatchObject({
      title: post?.title,
      description: `${post?.title} - ${SEO.siteName}`,
      alternates: {
        canonical: `${SEO.siteUrl}/blog/blog-toc`,
      },
      openGraph: {
        type: "article",
        tags: post?.tags,
      },
      twitter: {
        card: "summary_large_image",
        creator: SEO.twitterHandle,
      },
    });
  });

  it("returns not-found metadata for a missing post", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ postKey: "missing-post" }),
    });

    expect(metadata.title).toBeTruthy();
    expect(metadata.description).toBeTruthy();
    expect(metadata).not.toHaveProperty("alternates");
  });
});
