"use client";

import { Divider, Header, PageBox } from "@repo/components";
import { useRouter } from "next/navigation";
import { getProjectsByType, type ProjectDetail } from "@data";

const Projects = () => {
  const router = useRouter();

  const careerProjects = getProjectsByType("career");
  const personalProjects = getProjectsByType("personal");

  const handleClick = (project: ProjectDetail) => {
    router.push(`/project/${project.id}`);
  };

  const wrapperClassName = "flex justify-around flex-wrap gap-[10px] w-full";

  const renderProjects = (projects: ProjectDetail[]) => (
    <div className={wrapperClassName}>
      {projects.map((project) => (
        <PageBox
          key={project.id}
          Thumbnail={project.thumbnail}
          title={project.title}
          onClick={() => handleClick(project)}
          width="400px"
          height="300px"
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
