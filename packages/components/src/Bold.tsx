import { TEXT_PADDING } from "./styles";

const Bold = ({ children }: { children: React.ReactNode }) => {
  const classNames = `${TEXT_PADDING} font-semibold`;

  return <span className={classNames}>{children}</span>;
};

export default Bold;
