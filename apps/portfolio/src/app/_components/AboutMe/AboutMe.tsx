"use client";

import { Divider, Header, PageBox } from "@repo/components";
import { Github, MainLogo } from "@images";
import { LINKS } from "@data";

const AboutMe = () => {
  const wrapperClassName = "flex justify-around flex-wrap gap-[10px] w-full";

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
          width="400px"
          height="300px"
        />
        <PageBox
          Thumbnail={MainLogo}
          title="Blog"
          onClick={() => handleClick(LINKS.BLOG)}
          width="400px"
          height="300px"
        />
      </div>
    </>
  );
};

export default AboutMe;
