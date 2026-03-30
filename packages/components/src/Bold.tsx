import { TEXT_PADDING } from "./styles";

const Bold = ({ children }: { children: React.ReactNode }) => {
  const classNames = `${TEXT_PADDING} font-semibold`;

  return <strong className={classNames}>{children}</strong>;
};

export default Bold;
