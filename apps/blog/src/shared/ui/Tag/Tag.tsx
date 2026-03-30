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
      className={`filter-btn ${isSelected ? "active" : ""}`}
      onClick={onClick}
      aria-pressed={isSelected}
    >
      {tag}
    </button>
  );
};

export default Tag;
