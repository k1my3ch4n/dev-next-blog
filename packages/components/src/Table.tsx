const Table = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const classNames = `table w-full border-collapse ${className}`;

  return (
    <div className={classNames} role="table">
      {children}
    </div>
  );
};

export default Table;
