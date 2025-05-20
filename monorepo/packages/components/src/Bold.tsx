const Bold = ({ children }: { children: React.ReactNode }) => {
  const classNames = "py-3 px-2 font-semibold";

  return <span className={classNames}>{children}</span>;
};

export default Bold;
