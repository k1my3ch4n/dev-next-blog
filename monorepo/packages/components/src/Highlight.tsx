const Highlight = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  // todo : border-radius 커스텀 필요 및 추가 예정 ( border-radius: 4px; )
  // todo : font-size 커스텀 필요 및 추가 예정 ( font-size: 85%; )
  // todo : background color 커스텀 필요 및 추가 예정 ( background-color: rgba(207, 207, 207, 0.79); )
  // todo : color 커스텀 필요 및 추가 예정 ( color: #eb5757; )
  const classNames = `py-3 px-6 rounded-sm font-semibold z-99 ${className}`;

  return <span className={classNames}>{children}</span>;
};

export default Highlight;
