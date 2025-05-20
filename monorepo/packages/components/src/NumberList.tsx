import { Children } from "react";

// todo : 수정예정
const NumberList = ({ children }: { children: React.ReactNode }) => {
  const wrapperClassName = "flex";
  // todo : font-size 추가 예정 ( font-size: 16px; )
  const numberClassName =
    "flex items-center justify-center min-w-24 h-30 mr-3 leading-normal";
  const textClassName = "py-3 px-2 leading-normal";

  return Children.map(children, (child, index) => (
    <div className={wrapperClassName}>
      <div className={numberClassName}>{index + 1}.</div>
      <div className={textClassName}>{child}</div>
    </div>
  ));
};

export default NumberList;
