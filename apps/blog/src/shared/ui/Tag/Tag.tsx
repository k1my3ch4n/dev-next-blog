const Tag = ({
  tag,
  isSelected,
  onClick,
}: {
  tag: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={`m-[4px] p-[4px] rounded-[4px] text-[#264db1] cursor-pointer shadow-tag border-none bg-transparent ${isSelected ? "bg-[#264db1] text-white" : ""}`}
      onClick={onClick}
      aria-pressed={isSelected}
    >
      {tag}
    </button>
  );
};

export default Tag;
