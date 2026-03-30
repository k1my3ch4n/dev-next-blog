import { HRAHLogo, MainLogo } from "@shared/assets";
import { LINKS } from "@shared/config";

export const PROJECTS_DATA = [
  {
    Thumbnail: MainLogo,
    title: "🌐 Syngrid - 실시간 협업 반응형 디자인 뷰어",
    link: LINKS.SYNGRID_NOTION,
  },
  {
    Thumbnail: HRAHLogo,
    title: "📚 Hackerrank AI Helper 프로젝트",
    link: LINKS.HRAH_NOTION,
  },
  {
    Thumbnail: MainLogo,
    title: "📖 Monorepo로 블로그 및 포트폴리오 페이지 생성",
    link: LINKS.GITHUB_NEXT_REPO,
  },
] as const;
