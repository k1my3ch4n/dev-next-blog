const Highlight = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  // todo : background color 커스텀 필요 및 추가 예정 ( background-color: rgba(207, 207, 207, 0.79); )
  // todo : color 커스텀 필요 및 추가 예정 ( color: #eb5757; )
  const classNames = `py-[3px] px-[6px] rounded-sm font-semibold z-99 rounded-[4px] text-[85%] bg-highlight-background text-highlight-color ${className}`;

  return <span className={classNames}>{children}</span>;
};

export default Highlight;
