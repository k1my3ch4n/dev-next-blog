const TableCell = ({ children }: { children: React.ReactNode }) => {
  const tableCellClassName =
    "table-cell border-[1px] border-solid border-black p-[10px] align-middle";

  return <div className={tableCellClassName}>{children}</div>;
};

export default TableCell;
