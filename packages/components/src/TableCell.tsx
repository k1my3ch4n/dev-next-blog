const TableCell = ({
  children,
  className = "",
  isHeader = false,
}: {
  children: React.ReactNode;
  className?: string;
  isHeader?: boolean;
}) => {
  const classNames = `table-cell border border-solid border-[var(--theme-border)] p-[10px] align-middle ${className}`;

  return (
    <div className={classNames} role={isHeader ? "columnheader" : "cell"}>
      {children}
    </div>
  );
};

export default TableCell;
