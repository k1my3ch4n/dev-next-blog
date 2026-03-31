"use client";

import { useState } from "react";
import { Tag } from "@shared/ui";
import useTagContext from "../hooks/useTagContext";

interface TagListProps {
  tags: string[];
}

const TagList = ({ tags }: TagListProps) => {
  const { selectedTag, setSelectedTag } = useTagContext();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-6">
      <nav
        className={`flex flex-wrap gap-1.5 overflow-hidden transition-[max-height] duration-300 ${isExpanded ? "max-h-[500px]" : "max-h-[4.5rem]"}`}
        aria-label="태그 필터"
      >
        {tags.map((tag) => (
          <Tag
            key={tag}
            tag={tag}
            isSelected={tag === selectedTag}
            onClick={() => setSelectedTag(tag)}
          />
        ))}
      </nav>
      <div className="flex justify-center mt-2">
        <button
          className="text-xs text-[var(--accent)] font-medium bg-[var(--surface-raised)] border border-[var(--accent)] rounded-full px-4 py-1.5 cursor-pointer shadow-[var(--card-shadow)] dark:hover:shadow-[0_0_8px_var(--accent-soft)] transition-all duration-200"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? "↑ 접기" : "↓ 더보기"}
        </button>
      </div>
    </div>
  );
};

export default TagList;
