import { HRAHLogo, MainLogo } from "@images";
import { LINKS } from "./links";

export const PROJECTS_DATA = [
  {
    Thumbnail: HRAHLogo,
    title: "📚 Hackerrank AI Helper 프로젝트",
    link: LINKS.HRAH_NOTION,
  },
  {
    Thumbnail: MainLogo,
    title: "Monorepo 마이그레이션 (Vite -> Nextjs)",
    link: LINKS.GITHUB_NEXT_REPO,
  },
  {
    Thumbnail: MainLogo,
    title: "Monorepo로 블로그 및 포트폴리오 페이지 생성",
    link: LINKS.GITHUB_VITE_REPO,
  },
] as const;
