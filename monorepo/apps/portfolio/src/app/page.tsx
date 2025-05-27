import { Title } from "@repo/components";

import Introduce from "./_components/Introduce";
import Profile from "./_components/Profile";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <>
      <Title title="🔥 함께 일하는 프론트엔드 개발자 김예찬입니다." />
      <div className="flex flex-col items-start w-full">
        <Introduce />
        <Profile />
        {/* Skills */}
        <Projects />
        {/* about me */}
      </div>
    </>
  );
}
