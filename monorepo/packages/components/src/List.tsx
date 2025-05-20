const LIST_SPOTS = {
  l: "•",
  m: "◦",
  s: "▪",
};

const List = ({
  spot = "l",
  children,
}: {
  spot?: "l" | "m" | "s";
  children: React.ReactNode;
}) => {
  const wrapperClassName = "flex items-start";
  // todo : font size 추가 ( font-size: 24px; )
  // todo : line-height 추가
  const spotClassName =
    "flex justify-center items-center min-w-24 h-30 leading-none mr-3";
  // todo : font size 추가 ( font-size: 16px; )
  const textClassName = "py-3 px-2 leading-normal";

  return (
    <div className={wrapperClassName}>
      <div className={spotClassName}>{LIST_SPOTS[spot]}</div>
      <div className={textClassName}>{children}</div>
    </div>
  );
};

export default List;
