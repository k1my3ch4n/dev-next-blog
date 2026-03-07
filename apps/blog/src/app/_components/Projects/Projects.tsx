import { Divider, PageBox, Title, GRID_LAYOUT } from "@repo/components";
import { PROJECTS_DATA } from "@constants/projects";

const Projects = () => {
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
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
