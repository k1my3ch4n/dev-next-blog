const Link = ({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) => {
  // todo : color 추가 ( color: gray; ) gray -> 128.128.128
  // todo : border color 추가 ( border-bottom: 1px solid gray; )
  const classNames = "border-solid border border-gray-500 cursor-pointer";

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <span className={classNames} onClick={handleClick}>
      {children}
    </span>
  );
};

export default Link;
