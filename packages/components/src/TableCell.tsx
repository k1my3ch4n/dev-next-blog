const TableCell = ({
  children,
  className = "",
  isHeader = false,
}: {
  children: React.ReactNode;
  className?: string;
  isHeader?: boolean;
}) => {
  const classNames = `border border-solid border-[var(--theme-border)] p-[10px] align-middle ${className}`;

  if (isHeader) {
    return <th className={classNames}>{children}</th>;
  }

  return <td className={classNames}>{children}</td>;
};

export default TableCell;
