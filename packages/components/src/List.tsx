import { TEXT_PADDING, LIST_MARKER, TEXT_SIZE } from "./styles";

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
  const spotClassName = `${LIST_MARKER} leading-none ${TEXT_SIZE.xl}`;
  const textClassName = `${TEXT_PADDING} leading-normal ${TEXT_SIZE.sm}`;

  return (
    <div className={wrapperClassName}>
      <div className={spotClassName}>{LIST_SPOTS[spot]}</div>
      <div className={textClassName}>{children}</div>
    </div>
  );
};

export default List;
