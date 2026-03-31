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

  const classNames = `${VARIANT_STYLES[variant]} ${className}`;

  return <tr className={classNames}>{children}</tr>;
};

export default TableRow;
