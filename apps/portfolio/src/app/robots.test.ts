import robots from "./robots";

describe("robots", () => {
  it("allows all crawlers and points to the sitemap", () => {
    expect(robots()).toEqual({
      rules: [{ userAgent: "*", allow: "/" }],
      sitemap: "https://portfolio.k1my3ch4n.xyz/sitemap.xml",
    });
  });
});
