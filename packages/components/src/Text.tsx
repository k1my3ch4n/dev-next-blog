import { TEXT_PADDING, TEXT_SIZE } from "./styles";

const Text = ({ children }: { children: React.ReactNode }) => {
  const wrapperClassName = "mt-[1px]";
  const textClassName = `${TEXT_PADDING} ${TEXT_SIZE.base}`;

  return <p className={`${wrapperClassName} ${textClassName}`}>{children}</p>;
};

export default Text;
