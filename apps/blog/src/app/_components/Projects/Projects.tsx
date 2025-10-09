"use client";

import { Divider, PageBox, Title } from "@repo/components";
import { MainLogo } from "@images";

const GITHUB_VITE_REPO_LINK =
  "https://github.com/k1my3ch4n/dev-blog/blob/main/README.md";

const GITHUB_NEXT_REPO_LINK =
  "https://github.com/k1my3ch4n/dev-next-blog#monorepo-%EB%A1%9C-%EB%B8%94%EB%A1%9C%EA%B7%B8--%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EA%B5%AC%ED%98%84-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8--next-";

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
