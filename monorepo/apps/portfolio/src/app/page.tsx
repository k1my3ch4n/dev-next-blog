import { Title } from "@repo/components";

import Introduce from "./_components/Introduce";
import Profile from "./_components/Profile";
import Projects from "./_components/Projects";
import AboutMe from "./_components/AboutMe";
import Skills from "./_components/Skills";

export default function Home() {
  const wrapperClassName = "flex flex-col items-start w-full";

  return (
    <>
      <Title title="🔥 함께 일하는 프론트엔드 개발자 김예찬입니다." />
      <div className={wrapperClassName}>
        <Introduce />
        <Profile />
        <Skills />
        <Projects />
        <AboutMe />
      </div>
    </>
  );
}
