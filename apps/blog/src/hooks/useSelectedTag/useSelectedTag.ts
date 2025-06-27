import { useState } from 'react';

const useSelectedTag = () => {
  const [selectedTag, setSelectedTag] = useState<string>('');

  const handleSelected = (tag: string) => {
    if (!selectedTag || selectedTag !== tag) {
      setSelectedTag(tag);
      return;
    }

    setSelectedTag('');
  };

  return {
    selectedTag,
    handleSelected,
  };
};

export default useSelectedTag;
