import TableCell from "@/components/TableCell";

const TableHeader = ({ headers }: { headers: string[] }) => {
  return (
    <div className="table-row bg-[#cfcfcfc9] font-semibold whitespace-nowrap">
      {headers.map((header, index) => {
        return <TableCell key={index}>{header}</TableCell>;
      })}
    </div>
  );
};

export default TableHeader;
