/** @jest-environment node */

import { getPosts } from "@entities/post";
import type { PostData } from "@shared/types";
import { GET } from "./route";

jest.mock("@entities/post", () => ({
  getPosts: jest.fn(),
}));

const createPost = (
  overrides: Partial<PostData> & Pick<PostData, "id" | "title">,
): PostData => ({
  postKey: null,
  externalUrl: null,
  tags: [],
  cardTypo: { main: "Main", sub: "Sub" },
  ...overrides,
});

describe("GET /feed.xml", () => {
  it("generates RSS for internal and external posts and escapes XML", async () => {
    jest.mocked(getPosts).mockReturnValue([
      createPost({
        id: 1,
        postKey: "internal-post",
        title: "Internal & <Post>",
        tags: ["React & Next"],
      }),
      createPost({
        id: 2,
        externalUrl: "https://example.com/read?a=1&b=2",
        title: "External post",
      }),
      createPost({ id: 3, title: "Invalid post" }),
    ]);

    const response = GET();
    const xml = await response.text();

    expect(response.headers.get("content-type")).toBe(
      "application/rss+xml; charset=utf-8",
    );
    expect(xml).toContain(
      "<link>https://blog.k1my3ch4n.xyz/blog/internal-post</link>",
    );
    expect(xml).toContain("Internal &amp; &lt;Post&gt;");
    expect(xml).toContain("<category>React &amp; Next</category>");
    expect(xml).toContain("https://example.com/read?a=1&amp;b=2");
    expect(xml).not.toContain("Invalid post");
  });
});
