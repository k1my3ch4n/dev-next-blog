"use client";

import { Divider, Header, PageBox, GRID_LAYOUT } from "@repo/components";
import { Github, MainLogo } from "@images";
import { LINKS } from "@data";

const AboutMe = () => {
  const cardClassName = "w-full";

  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <Header>💫 About Me</Header>
      <Divider />
      <div className={GRID_LAYOUT.responsive2Cols}>
        <PageBox
          Thumbnail={Github}
          title="Github"
          onClick={() => handleClick(LINKS.GITHUB)}
          className={cardClassName}
        />
        <PageBox
          Thumbnail={MainLogo}
          title="Blog"
          onClick={() => handleClick(LINKS.BLOG)}
          className={cardClassName}
        />
      </div>
    </>
  );
};

export default AboutMe;
