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
  // todo : grid 추가 ( grid-template-columns: 2fr 3fr; )
  const wrapperClassName = "grid w-full";

  return (
    <div className={wrapperClassName}>
      <div className={lhsClassName}>{lhs}</div>
      <div className={rhsClassName}>{rhs}</div>
    </div>
  );
};

export default SplitGrid;
