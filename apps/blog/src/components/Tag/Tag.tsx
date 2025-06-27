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
    <div
      key={tag}
      className={`m-[4px] p-[4px] rounded-[4px] text-[#264db1] cursor-pointer shadow-tag ${isSelected ? "bg-[#264db1] text-white" : ""}`}
      onClick={onClick}
    >
      {tag}
    </div>
  );
};

export default Tag;
