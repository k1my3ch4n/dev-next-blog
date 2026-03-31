import { PROJECTS_DATA } from "@entities/project";
import ProjectCard from "@shared/ui/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section className="w-full mb-16">
      <p className="section-label">Projects</p>
      <h2 className="section-title mb-8">개인 프로젝트</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
