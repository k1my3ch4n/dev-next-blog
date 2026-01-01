"use client";

import { Divider, PageBox, Title, GRID_LAYOUT } from "@repo/components";
import { MainLogo, HRAHLogo } from "@images";
import { LINKS } from "@constants/links";

const Projects = () => {
  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  const cardClassName = "w-full";

  return (
    <div className="w-full mb-[20px]">
      <Title title="개인 프로젝트" />
      <Divider />
      <div className={GRID_LAYOUT.responsive2Cols}>
        <PageBox
          Thumbnail={HRAHLogo}
          title="📚 Hackerrank AI Helper 프로젝트"
          onClick={() => handleClick(LINKS.HRAH_NOTION)}
          className={cardClassName}
        />
        <PageBox
          Thumbnail={MainLogo}
          title="Monorepo 마이그레이션 (Vite -> Nextjs)"
          onClick={() => handleClick(LINKS.GITHUB_NEXT_REPO)}
          className={cardClassName}
        />
        <PageBox
          Thumbnail={MainLogo}
          title="Monorepo로 블로그 및 포트폴리오 페이지 생성"
          onClick={() => handleClick(LINKS.GITHUB_VITE_REPO)}
          className={cardClassName}
        />
      </div>
    </div>
  );
};

export default Projects;
