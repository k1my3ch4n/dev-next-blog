import { Children } from "react";

// todo : 수정예정
const NumberList = ({ children }: { children: React.ReactNode }) => {
  const wrapperClassName = "flex";
  const numberClassName =
    "flex items-center justify-center min-w-[24px] h-[30px] mr-[3px] leading-normal text-[16px]";
  const textClassName = "py-[3px] px-[2px] leading-normal";

  return Children.map(children, (child, index) => (
    <div className={wrapperClassName}>
      <div className={numberClassName}>{index + 1}.</div>
      <div className={textClassName}>{child}</div>
    </div>
  ));
};

export default NumberList;
