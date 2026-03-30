const Highlight = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const classNames = `py-[3px] px-[6px] rounded-[4px] font-semibold text-[85%] bg-highlight-background text-highlight-color ${className}`;

  return <mark className={classNames}>{children}</mark>;
};

export default Highlight;
