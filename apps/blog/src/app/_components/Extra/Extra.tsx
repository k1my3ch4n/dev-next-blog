"use client";

import { Divider, PageBox, Title, GRID_LAYOUT } from "@repo/components";
import { EXTRA_DATA } from "@constants/extra";

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
        {EXTRA_DATA.map(({ Thumbnail, title, link }) => (
          <PageBox
            key={title}
            Thumbnail={Thumbnail}
            title={title}
            onClick={() => handleClick(link)}
            className={cardClassName}
          />
        ))}
      </div>
    </div>
  );
};

export default Extra;
