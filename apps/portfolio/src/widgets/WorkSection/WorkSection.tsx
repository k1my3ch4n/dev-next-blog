"use client";

import { Section } from "@shared/ui/Section";
import { SectionHeader } from "@shared/ui/SectionHeader";
import { WorkCard } from "@shared/ui/WorkCard";
import { WORKS } from "@shared/data";
import { WorkFilter } from "@features/WorkFilter";
import { ProjectModal, useProjectModal } from "@features/ProjectModal";

const WorkSection = () => {
  const { selectedProject, isOpen, openModal, closeModal } = useProjectModal();

  return (
    <Section id="works">
      <SectionHeader
        label="Works"
        title="작업 내용"
        description="회사 프로덕트부터 주간 해커톤까지, 직접 만든 작업들입니다."
        className="mb-6"
      />

      <WorkFilter works={WORKS}>
        {(filteredWorks) => (
          <div className="grid sm:grid-cols-2 gap-4">
            {filteredWorks.map((work) => (
              <WorkCard
                key={work.id}
                cardTypo={work.cardTypo}
                title={work.title}
                shortDescription={work.shortDescription}
                period={work.period}
                type={work.type}
                techStack={work.techStack}
                gradient={work.gradient}
                href={work.externalUrl}
                onClick={work.externalUrl ? undefined : () => openModal(work)}
              />
            ))}
          </div>
        )}
      </WorkFilter>

      <ProjectModal
        project={selectedProject}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </Section>
  );
};

export default WorkSection;
