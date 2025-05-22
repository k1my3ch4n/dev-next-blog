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
  const spotClassName =
    "flex justify-center items-center min-w-[24px] h-[30px] leading-none mr-[3px] text-[24px]";
  const textClassName = "py-[3px] px-[2px] leading-normal text-[16px]";

  return (
    <div className={wrapperClassName}>
      <div className={spotClassName}>{LIST_SPOTS[spot]}</div>
      <div className={textClassName}>{children}</div>
    </div>
  );
};

export default List;
