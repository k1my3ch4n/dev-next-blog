import { SEO, getPageTitle } from "./seo";

describe("getPageTitle", () => {
  it("returns the site title when no page title is provided", () => {
    expect(getPageTitle()).toBe(SEO.title);
  });

  it("combines a page title with the site name", () => {
    expect(getPageTitle("Testing")).toBe(`Testing | ${SEO.siteName}`);
  });
});
