const Bold = ({ children }: { children: React.ReactNode }) => {
  const classNames = "pt-3 pb-2 font-semibold";

  return <span className={classNames}>{children}</span>;
};

export default Bold;
