"use client";

import { Github, MainLogo } from "@images";
import { Divider, PageBox, Title, GRID_LAYOUT } from "@repo/components";
import { LINKS } from "@constants/links";

const Extra = () => {
  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  const cardClassName = "w-full";

  return (
    <div className="w-full mb-[20px]">
      <Title title="ETC" />
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
          title="Portfolio"
          onClick={() => handleClick(LINKS.PORTFOLIO)}
          className={cardClassName}
        />
      </div>
    </div>
  );
};

export default Extra;
