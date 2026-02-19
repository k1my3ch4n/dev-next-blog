"use client";

import { Divider, Header, PageBox, GRID_LAYOUT } from "@repo/components";
import { useRouter } from "next/navigation";
import { getProjectsByType, type ProjectDetail } from "@data";

const Projects = () => {
  const router = useRouter();

  const careerProjects = getProjectsByType("career");
  const personalProjects = getProjectsByType("personal");
  const openSourceProjects = getProjectsByType("openSource");

  const handleClick = (project: ProjectDetail) => {
    if (project.externalUrl) {
      window.open(project.externalUrl, "_blank");
      return;
    }
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
          imageClassName="rounded-t-[10px]"
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

      <Header>👩🏻‍💻 Open Source Projects</Header>
      <Divider />
      {renderProjects(openSourceProjects)}
    </>
  );
};

export default Projects;
