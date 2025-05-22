const Highlight = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const classNames = `py-[3px] px-[6px] rounded-sm font-semibold z-99 rounded-[4px] text-[85%] bg-highlight-background text-highlight-color ${className}`;

  return <span className={classNames}>{children}</span>;
};

export default Highlight;
