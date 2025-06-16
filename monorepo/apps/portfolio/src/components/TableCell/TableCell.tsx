const TableCell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="table-cell border-[1px] border-solid border-black p-[10px] align-middle">
      {children}
    </div>
  );
};

export default TableCell;
