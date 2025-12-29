import { TEXT_PADDING } from "./styles";

const Title = ({
  className = "",
  title,
}: {
  className?: string;
  title: string;
}) => {
  const classNames = `font-bold ${TEXT_PADDING} text-title`;

  return <h1 className={`${classNames} ${className}`}>{title}</h1>;
};

export default Title;
