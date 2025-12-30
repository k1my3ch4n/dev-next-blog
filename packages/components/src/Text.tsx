import { TEXT_PADDING, TEXT_SIZE } from "./styles";

const Text = ({ children }: { children: React.ReactNode }) => {
  const wrapperClassName = "mt-[1px]";
  const textClassName = `${TEXT_PADDING} ${TEXT_SIZE.base}`;

  return (
    <div className={wrapperClassName}>
      <div className={textClassName}>{children}</div>
    </div>
  );
};

export default Text;
