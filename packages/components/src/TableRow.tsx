const TableRow = ({
  children,
  variant = "body",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "header" | "body";
  className?: string;
}) => {
  const VARIANT_STYLES = {
    header: "bg-[var(--theme-header-bg)] font-semibold whitespace-nowrap",
    body: "break-all",
  };

  const classNames = `table-row ${VARIANT_STYLES[variant]} ${className}`;

  return <div className={classNames}>{children}</div>;
};

export default TableRow;
