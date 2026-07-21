import { BLOG_POSTS } from "@entities/post";
import { generateStaticParams } from "./page";

describe("generateStaticParams", () => {
  it("returns only internal blog post keys", async () => {
    const params = await generateStaticParams();
    const expectedKeys = BLOG_POSTS.filter(
      (post) => post.postKey !== null && post.externalUrl === null,
    ).map((post) => post.postKey);

    expect(params.map((param) => param.postKey)).toEqual(expectedKeys);
    expect(params.every((param) => typeof param.postKey === "string")).toBe(true);
  });
});
