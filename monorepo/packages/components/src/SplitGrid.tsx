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
  const wrapperClassName = "grid grid-cols-[2fr_3fr] w-full";

  return (
    <div className={wrapperClassName}>
      <div className={lhsClassName}>{lhs}</div>
      <div className={rhsClassName}>{rhs}</div>
    </div>
  );
};

export default SplitGrid;
