"use client";

import Tag from "@components/Tag";
import useGetTags from "@apis/useGetTags";
import useTagContext from "../../_hook/useTagContext";

const TagList = () => {
  const { tagsData } = useGetTags();

  const { selectedTag, setSelectedTag } = useTagContext();

  return (
    <div className="flex justify-center p-[20px] flex-wrap w-full">
      {tagsData.map((tag) => {
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
