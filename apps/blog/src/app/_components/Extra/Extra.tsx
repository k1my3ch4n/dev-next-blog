"use client";

import { Github, MainLogo } from "@images";
import { Divider, PageBox, Title } from "@repo/components";

const GITHUB_LINK = "https://github.com/k1my3ch4n";
const PORTFOLIO_LINK = "https://portfolio.k1my3ch4n.xyz/";

const Extra = () => {
  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  const wrapperClassName = "flex justify-around flex-wrap gap-[10px] w-full";

  return (
    <>
      <Title title="ETC" />
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
          title="Portfolio"
          onClick={() => handleClick(PORTFOLIO_LINK)}
          width="400px"
          height="300px"
        />
      </div>
    </>
  );
};

export default Extra;
