"use client";

import Github from "@/assets/images/github.svg";
import MainLogo from "@/assets/images/mainLogo.svg";
import { Divider, PageBox, Title } from "@repo/components";

const GITHUB_LINK = "https://github.com/k1my3ch4n";
const PORTFOLIO_LINK = "https://portfolio.k1my3ch4n.xyz/";

const Extra = () => {
  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <Title title="ETC" />
      <Divider />
      <div className="w-full grid grid-cols-2 gap-[10px]">
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
