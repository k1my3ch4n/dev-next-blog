"use client";

import { Tag } from "@shared/ui";
import useTagContext from "../hooks/useTagContext";

interface TagListProps {
  tags: string[];
}

const TagList = ({ tags }: TagListProps) => {
  const { selectedTag, setSelectedTag } = useTagContext();

  return (
    <nav
      className="flex flex-wrap gap-1.5 mb-6 overflow-x-auto pb-1"
      aria-label="태그 필터"
    >
      {tags.map((tag) => {
        const isSelected = tag === selectedTag;

        return (
          <Tag
            key={tag}
            tag={tag}
            isSelected={isSelected}
            onClick={() => setSelectedTag(tag)}
          />
        );
      })}
    </nav>
  );
};

export default TagList;
