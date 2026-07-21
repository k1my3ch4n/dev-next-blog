import { BLOG_POSTS, getAllTags, getPost, getPosts } from "./constants";

describe("post selectors", () => {
  it("returns posts in descending order by default without mutating the source", () => {
    const originalIds = BLOG_POSTS.map((post) => post.id);

    const result = getPosts();

    expect(result[0]?.id).toBe(Math.max(...originalIds));
    expect(result.at(-1)?.id).toBe(Math.min(...originalIds));
    expect(BLOG_POSTS.map((post) => post.id)).toEqual(originalIds);
  });

  it("returns posts in ascending order", () => {
    const result = getPosts("", "ASC");

    expect(result[0]?.id).toBe(Math.min(...result.map((post) => post.id)));
    expect(result.at(-1)?.id).toBe(Math.max(...result.map((post) => post.id)));
  });

  it("filters posts by an exact tag", () => {
    const result = getPosts("MSW");

    expect(result.length).toBeGreaterThan(0);
    expect(result.every((post) => post.tags.includes("MSW"))).toBe(true);
  });

  it("finds a post by key and returns null for an unknown key", () => {
    expect(getPost("blog-toc")?.postKey).toBe("blog-toc");
    expect(getPost("missing-post")).toBeNull();
  });

  it("returns unique tags in locale-independent sorted order", () => {
    const tags = getAllTags();

    expect(new Set(tags).size).toBe(tags.length);
    expect(tags).toEqual([...tags].sort());
  });
});
