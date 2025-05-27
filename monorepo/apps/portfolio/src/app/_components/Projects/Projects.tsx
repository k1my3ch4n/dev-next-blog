"use client";

import { Divider, Header, PageBox } from "@repo/components";
import TwinnyLogo from "@/assets/images/twinnyLogo.svg";
import MainLogo from "@/assets/images/mainLogo.svg";
import { useRouter } from "next/navigation";

const Projects = () => {
  const router = useRouter();

  const handleClick = (projectName: string) => {
    router.push(`/project/${projectName}`);
    window.scrollTo(0, 0);
  };

  const projectWrapperClassName =
    "flex justify-around flex-wrap gap-[10px] w-full";

  return (
    <>
      <Header>👩🏻‍💻 Career Projects</Header>
      <Divider />
      <div className={projectWrapperClassName}>
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
      <div className={projectWrapperClassName}>
        <PageBox
          Thumbnail={MainLogo}
          title="📖 Monorepo로 블로그 및 포트폴리오 페이지 생성"
          onClick={() => handleClick("blog")}
          width="400px"
          height="300px"
        />
      </div>
    </>
  );
};

export default Projects;
