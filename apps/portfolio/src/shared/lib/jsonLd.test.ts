import { LINKS } from "@data";
import {
  generateArticleJsonLd,
  generatePersonJsonLd,
  generateWebSiteJsonLd,
} from "./jsonLd";

const BASE_URL = "https://portfolio.k1my3ch4n.xyz";

describe("generatePersonJsonLd", () => {
  it("returns the portfolio owner schema", () => {
    expect(generatePersonJsonLd()).toEqual({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "김예찬",
      url: BASE_URL,
      jobTitle: "Frontend Developer",
      sameAs: [LINKS.GITHUB, LINKS.BLOG],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Frontend Development",
        "Web Development",
      ],
    });
  });
});

describe("generateWebSiteJsonLd", () => {
  it("returns the portfolio website schema", () => {
    expect(generateWebSiteJsonLd()).toEqual({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "김예찬's Portfolio",
      url: BASE_URL,
      description:
        "웹 프론트엔드 개발자 김예찬의 포트폴리오입니다. React, Next.js, TypeScript 등을 활용한 프로젝트들을 소개합니다.",
      author: {
        "@type": "Person",
        name: "김예찬",
      },
    });
  });
});

describe("generateArticleJsonLd", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2026-07-19T12:00:00.000Z"));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("returns the project article schema with normalized dates", () => {
    expect(
      generateArticleJsonLd({
        title: "테스트 프로젝트",
        description: "테스트 프로젝트 설명",
        projectId: "test-project",
        period: "2024.1 — 2024.12",
      }),
    ).toEqual({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "테스트 프로젝트",
      description: "테스트 프로젝트 설명",
      url: `${BASE_URL}/project/test-project`,
      author: {
        "@type": "Person",
        name: "김예찬",
        url: BASE_URL,
      },
      datePublished: "2024-01-01",
      dateModified: "2026-07-19",
    });
  });

  it.each([
    ["an empty period", ""],
    ["a missing month", "2024"],
    ["a missing year", ".01"],
    ["a non-numeric year", "year.01 — 2024.12"],
    ["a non-numeric month", "2024.month — 2024.12"],
    ["a year before the supported range", "1999.12 — 2024.12"],
    ["a year after the supported range", "2101.01 — 2024.12"],
    ["month zero", "2024.00 — 2024.12"],
    ["a month above twelve", "2024.13 — 2024.12"],
  ])("omits datePublished for %s", (_, period) => {
    const result = generateArticleJsonLd({
      title: "테스트 프로젝트",
      description: "테스트 프로젝트 설명",
      projectId: "test-project",
      period,
    });

    expect(result).not.toHaveProperty("datePublished");
    expect(result.dateModified).toBe("2026-07-19");
  });

  it.each([
    ["2000.01 — 2000.02", "2000-01-01"],
    ["2100.12 — 2100.12", "2100-12-01"],
  ])("accepts the supported date boundary %s", (period, expected) => {
    expect(
      generateArticleJsonLd({
        title: "테스트 프로젝트",
        description: "테스트 프로젝트 설명",
        projectId: "test-project",
        period,
      }).datePublished,
    ).toBe(expected);
  });
});
