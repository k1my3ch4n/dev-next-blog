import sitemap from "./sitemap";

describe("sitemap", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2026-07-20T00:00:00.000Z"));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("returns the portfolio home entry with the current date", () => {
    expect(sitemap()).toEqual([
      {
        url: "https://portfolio.k1my3ch4n.xyz",
        lastModified: new Date("2026-07-20T00:00:00.000Z"),
        changeFrequency: "monthly",
        priority: 1,
      },
    ]);
  });
});
