"use client";

import { Divider, PageBox, Title } from "@repo/components";
import { MainLogo, HRAHLogo } from "@images";

const GITHUB_VITE_REPO_LINK =
  "https://github.com/k1my3ch4n/dev-blog/blob/main/README.md";

const GITHUB_NEXT_REPO_LINK =
  "https://github.com/k1my3ch4n/dev-next-blog/blob/main/README.md";

const HRAH_NOTION_LINK =
  "https://k1my3ch4ns.notion.site/HackerRank-AI-Helper-27ec98c1db058072b298db1e19ccc742";

const Projects = () => {
  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  const wrapperClassName = "flex justify-around flex-wrap gap-[10px] w-full";

  return (
    <div className="w-full mb-[20px]">
      <Title title="개인 프로젝트" />
      <Divider />
      <div className={wrapperClassName}>
        <PageBox
          Thumbnail={HRAHLogo}
          title="📚 Hackerrank AI Helper 프로젝트"
          onClick={() => handleClick(HRAH_NOTION_LINK)}
          width="400px"
          height="300px"
        />
        <PageBox
          Thumbnail={MainLogo}
          title="Monorepo 마이그레이션 (Vite -> Nextjs)"
          onClick={() => handleClick(GITHUB_NEXT_REPO_LINK)}
          width="400px"
          height="300px"
        />
        <PageBox
          Thumbnail={MainLogo}
          title="Monorepo로 블로그 및 포트폴리오 페이지 생성"
          onClick={() => handleClick(GITHUB_VITE_REPO_LINK)}
          width="400px"
          height="300px"
        />
      </div>
    </div>
  );
};

export default Projects;
