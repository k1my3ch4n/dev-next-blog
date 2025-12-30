import { LINKS } from "@data";

const BASE_URL = "https://portfolio.k1my3ch4n.xyz";

export interface PersonJsonLd {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  url: string;
  jobTitle: string;
  sameAs: string[];
  knowsAbout: string[];
}

export interface WebSiteJsonLd {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  author: {
    "@type": "Person";
    name: string;
  };
}

export interface ArticleJsonLd {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description: string;
  url: string;
  author: {
    "@type": "Person";
    name: string;
    url: string;
  };
  datePublished?: string;
  dateModified?: string;
}

export const generatePersonJsonLd = (): PersonJsonLd => ({
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

export const generateWebSiteJsonLd = (): WebSiteJsonLd => ({
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

export const generateArticleJsonLd = ({
  title,
  description,
  projectId,
  period,
}: {
  title: string;
  description: string;
  projectId: string;
  period: string;
}): ArticleJsonLd => {
  const [startDate] = period.split(" ~ ");
  const [year, month] = startDate.split(".");

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${BASE_URL}/project/${projectId}`,
    author: {
      "@type": "Person",
      name: "김예찬",
      url: BASE_URL,
    },
    datePublished: `${year}-${month}-01`,
    dateModified: new Date().toISOString().split("T")[0],
  };
};
