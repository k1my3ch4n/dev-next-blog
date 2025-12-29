import { Children } from "react";
import { TEXT_PADDING, LIST_MARKER, TEXT_SIZE } from "./styles";

const NumberList = ({ children }: { children: React.ReactNode }) => {
  const wrapperClassName = "flex";
  const numberClassName = `${LIST_MARKER} leading-normal ${TEXT_SIZE.sm}`;
  const textClassName = `${TEXT_PADDING} leading-normal`;

  return Children.map(children, (child, index) => (
    <div className={wrapperClassName}>
      <div className={numberClassName}>{index + 1}.</div>
      <div className={textClassName}>{child}</div>
    </div>
  ));
};

export default NumberList;
