import { PageBox, GRID_LAYOUT } from "@repo/components";
import { PROJECTS_DATA } from "@entities/project";

const Projects = () => {
  return (
    <section className="w-full mb-16">
      <p className="sec-label">Projects</p>
      <h2 className="sec-title mb-1">개인 프로젝트</h2>
      <div className="accent-line mb-8"></div>

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
    </section>
  );
};

export default Projects;
