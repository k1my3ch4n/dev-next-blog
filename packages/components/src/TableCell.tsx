const TableCell = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const classNames = `table-cell border border-solid border-[var(--theme-border)] p-[10px] align-middle ${className}`;

  return <div className={classNames}>{children}</div>;
};

export default TableCell;
