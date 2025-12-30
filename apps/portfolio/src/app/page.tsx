import { Title } from "@repo/components";

import Introduce from "./_components/Introduce";
import Profile from "./_components/Profile";
import Projects from "./_components/Projects";
import AboutMe from "./_components/AboutMe";
import Skills from "./_components/Skills";
import { generatePersonJsonLd, generateWebSiteJsonLd } from "@lib/jsonLd";

export default function Home() {
  const titleClassName = "whitespace-nowrap";
  const personJsonLd = generatePersonJsonLd();
  const webSiteJsonLd = generateWebSiteJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <Title
        className={titleClassName}
        title="🔥 함께 일하는 프론트엔드 개발자 김예찬입니다."
      />
      <div className="flex flex-col items-start w-full">
        <Introduce />
        <Profile />
        <Skills />
        <Projects />
        <AboutMe />
      </div>
    </>
  );
}
