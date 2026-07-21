import robots from "./robots";

describe("robots", () => {
  it("allows crawlers and exposes the sitemap", () => {
    expect(robots()).toEqual({
      rules: [{ userAgent: "*", allow: "/" }],
      sitemap: "https://blog.k1my3ch4n.xyz/sitemap.xml",
    });
  });
});
