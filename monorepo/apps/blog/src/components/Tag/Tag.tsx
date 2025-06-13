const Tag = ({
  tag,
  isSelected,
  onClick,
}: {
  tag: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  // todo : box-shadow: 0 0 0 1px #264db1 inset;
  // todo : 색상 변경 예정

  return (
    <div
      key={tag}
      className={`inline-block m-[4px] p-[4px] rounded-[4px] bg-[white] cursor-pointer ${isSelected ? "bg-black text-white" : ""}`}
      onClick={onClick}
    >
      {tag}
    </div>
  );
};

export default Tag;
