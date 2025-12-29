"use client";

import { Divider, Header, PageBox } from "@repo/components";
import { Github, MainLogo } from "@images";
import { LINKS } from "@data";

const AboutMe = () => {
  const wrapperClassName = "grid grid-cols-1 sm:grid-cols-2 gap-4 w-full";
  const cardClassName = "w-full";

  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <Header>💫 About Me</Header>
      <Divider />
      <div className={wrapperClassName}>
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
