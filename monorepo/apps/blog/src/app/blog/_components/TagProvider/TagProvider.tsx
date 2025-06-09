"use client";

import useSelectedTag from "@/hooks/useSelectedTag";
import { createContext } from "react";

interface TagContextType {
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
}

export const TagContext = createContext<TagContextType | undefined>(undefined);

const TagProvider = ({ children }: { children: React.ReactNode }) => {
  const { selectedTag, handleSelected } = useSelectedTag();

  return (
    <TagContext.Provider
      value={{ selectedTag, setSelectedTag: handleSelected }}
    >
      {children}
    </TagContext.Provider>
  );
};

export default TagProvider;
