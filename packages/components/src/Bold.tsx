const Bold = ({ children }: { children: React.ReactNode }) => {
  const classNames = "py-[3px] px-[2px] font-semibold";

  return <span className={classNames}>{children}</span>;
};

export default Bold;
