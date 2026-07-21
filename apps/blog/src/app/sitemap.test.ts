import { getPosts } from "@entities/post";
import type { PostData } from "@shared/types";
import sitemap from "./sitemap";

jest.mock("@entities/post", () => ({
  getPosts: jest.fn(),
}));

const post = (overrides: Partial<PostData>): PostData => ({
  id: 1,
  postKey: "internal",
  externalUrl: null,
  title: "Post",
  tags: [],
  cardTypo: { main: "Main", sub: "Sub" },
  ...overrides,
});

describe("sitemap", () => {
  it("includes static routes and only internal post routes", () => {
    jest.mocked(getPosts).mockReturnValue([
      post({ postKey: "internal" }),
      post({ id: 2, postKey: "external", externalUrl: "https://example.com" }),
      post({ id: 3, postKey: null }),
    ]);

    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toEqual([
      "https://blog.k1my3ch4n.xyz",
      "https://blog.k1my3ch4n.xyz/blog",
      "https://blog.k1my3ch4n.xyz/showcase",
      "https://blog.k1my3ch4n.xyz/blog/internal",
    ]);
  });
});
