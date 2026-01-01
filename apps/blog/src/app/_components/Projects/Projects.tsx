"use client";

import { Divider, PageBox, Title, GRID_LAYOUT } from "@repo/components";
import { PROJECTS_DATA } from "@constants/projects";

const Projects = () => {
  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  const cardClassName = "w-full";

  return (
    <div className="w-full mb-[20px]">
      <Title title="개인 프로젝트" />
      <Divider />
      <div className={GRID_LAYOUT.responsive2Cols}>
        {PROJECTS_DATA.map(({ Thumbnail, title, link }) => (
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

export default Projects;
