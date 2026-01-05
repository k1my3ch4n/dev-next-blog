"use client";

import Tag from "@components/Tag";
import useTagContext from "../../_hook/useTagContext";

interface TagListProps {
  tags: string[];
}

const TagList = ({ tags }: TagListProps) => {
  const { selectedTag, setSelectedTag } = useTagContext();

  return (
    <div className="flex justify-center p-[20px] flex-wrap w-full">
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
    </div>
  );
};

export default TagList;
