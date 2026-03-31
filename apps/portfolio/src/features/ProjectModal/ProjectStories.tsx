import { StoryCard } from "@shared/ui/StoryCard";
import type { StoryPoint } from "@shared/data";

interface ProjectStoriesProps {
  stories: StoryPoint[];
}

const ProjectStories = ({ stories }: ProjectStoriesProps) => {
  if (stories.length === 0) {
    return null;
  }

  return (
    <section>
      <h3 className="font-bold text-sm mb-3 text-[var(--ink)]">
        문제 해결 과정
      </h3>
      {stories.map((story) => (
        <StoryCard
          key={story.title}
          title={story.title}
          problem={story.problem}
          solution={story.solution}
          extension={story.extension}
        />
      ))}
    </section>
  );
};

export default ProjectStories;
