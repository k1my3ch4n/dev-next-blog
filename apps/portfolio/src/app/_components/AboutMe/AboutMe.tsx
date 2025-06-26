"use client";

import { Divider, Header, PageBox } from "@repo/components";
import { Github, MainLogo } from "@images";

const GITHUB_LINK = "https://github.com/k1my3ch4n";
const BLOG_LINK = "https://blog.k1my3ch4n.xyz/";

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
          onClick={() => handleClick(GITHUB_LINK)}
          width="400px"
          height="300px"
        />
        <PageBox
          Thumbnail={MainLogo}
          title="Blog"
          onClick={() => handleClick(BLOG_LINK)}
          width="400px"
          height="300px"
        />
      </div>
    </>
  );
};

export default AboutMe;
