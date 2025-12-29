"use client";

import { Divider, Header, PageBox, GRID_LAYOUT } from "@repo/components";
import { useRouter } from "next/navigation";
import { getProjectsByType, type ProjectDetail } from "@data";

const Projects = () => {
  const router = useRouter();

  const careerProjects = getProjectsByType("career");
  const personalProjects = getProjectsByType("personal");

  const handleClick = (project: ProjectDetail) => {
    router.push(`/project/${project.id}`);
  };

  const cardClassName = "w-full";

  const renderProjects = (projects: ProjectDetail[]) => (
    <div className={GRID_LAYOUT.responsive2Cols}>
      {projects.map((project) => (
        <PageBox
          key={project.id}
          Thumbnail={project.thumbnail}
          title={project.title}
          onClick={() => handleClick(project)}
          className={cardClassName}
        />
      ))}
    </div>
  );

  return (
    <>
      <Header>👩🏻‍💻 Career Projects</Header>
      <Divider />
      {renderProjects(careerProjects)}

      <Header>👩🏻‍💻 Personal Projects</Header>
      <Divider />
      {renderProjects(personalProjects)}
    </>
  );
};

export default Projects;
