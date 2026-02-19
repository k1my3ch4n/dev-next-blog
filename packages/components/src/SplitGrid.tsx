const SplitGrid = ({
  lhs,
  lhsClassName = "",
  rhs,
  rhsClassName = "",
}: {
  lhs: React.ReactNode;
  lhsClassName?: string;
  rhs: React.ReactNode;
  rhsClassName?: string;
}) => {
  const wrapperClassName = "grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 w-full";

  return (
    <div className={wrapperClassName}>
      <div className={`flex flex-col items-center md:items-start ${lhsClassName}`}>{lhs}</div>
      <div className={rhsClassName}>{rhs}</div>
    </div>
  );
};

export default SplitGrid;
