import TableCell from "@components/TableCell";

const TableHeader = ({ headers }: { headers: string[] }) => {
  const tableHeaderClassName =
    "table-row bg-[#cfcfcfc9] font-semibold whitespace-nowrap";

  return (
    <div className={tableHeaderClassName}>
      {headers.map((header, index) => {
        return <TableCell key={index}>{header}</TableCell>;
      })}
    </div>
  );
};

export default TableHeader;
