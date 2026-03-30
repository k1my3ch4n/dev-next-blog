const Table = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const classNames = `w-full border-collapse ${className}`;

  return <table className={classNames}>{children}</table>;
};

export default Table;
