import { useContext } from "react";
import { TagContext } from "../../_components/TagProvider";

const useTagContext = () => {
  const context = useContext(TagContext);
  if (context === undefined) {
    throw new Error("Tag Context Error");
  }
  return context;
};

export default useTagContext;
