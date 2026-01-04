export const SEO = {
  siteName: "김예찬's Blog",
  siteUrl: "https://blog.k1my3ch4n.xyz",
  title: "김예찬's Blog",
  description: "프론트엔드 개발자 김예찬의 기술 블로그입니다.",
  author: "김예찬",
  locale: "ko_KR",
  twitterHandle: "@k1my3ch4n",
} as const;

export const getPageTitle = (pageTitle?: string) => {
  if (!pageTitle) return SEO.title;
  return `${pageTitle} | ${SEO.siteName}`;
};
