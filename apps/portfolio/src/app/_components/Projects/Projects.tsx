"use client";

import { Divider, Header, PageBox } from "@repo/components";

import { TwinnyLogo, MainLogo } from "@images";

import { useRouter } from "next/navigation";

const Projects = () => {
  const router = useRouter();

  const handleClick = (projectName: string) => {
    router.push(`/project/${projectName}`);
  };

  const wrapperClassName = "flex justify-around flex-wrap gap-[10px] w-full";

  return (
    <>
      <Header>👩🏻‍💻 Career Projects</Header>
      <Divider />
      <div className={wrapperClassName}>
        <PageBox
          Thumbnail={TwinnyLogo}
          title="🤖 유저용 작업 관제 웹 프로젝트 ( 오더피킹 )"
          onClick={() => handleClick("userRobot")}
          width="400px"
          height="300px"
        />
        <PageBox
          Thumbnail={TwinnyLogo}
          title="🤖 관리자용 로봇 관제 웹 프로젝트"
          onClick={() => handleClick("managerRobot")}
          width="400px"
          height="300px"
        />
      </div>

      <Header>👩🏻‍💻 Personal Projects</Header>
      <Divider />
      <div className={wrapperClassName}>
        <PageBox
          Thumbnail={MainLogo}
          title="📖 Monorepo로 블로그 및 포트폴리오 페이지 생성"
          onClick={() => handleClick("monorepo")}
          width="400px"
          height="300px"
        />
        <PageBox
          Thumbnail={MainLogo}
          title="📖 Monorepo 프로젝트 마이그레이션 (Vite -> Nextjs)"
          onClick={() => handleClick("nextMonorepo")}
          width="400px"
          height="300px"
        />
      </div>
    </>
  );
};

export default Projects;
