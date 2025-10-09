const Title = ({
  className = "",
  title,
}: {
  className?: string;
  title: string;
}) => {
  const classNames = "font-bold py-[3px] px-[2px] text-title";

  return <h1 className={`${classNames} ${className}`}>{title}</h1>;
};

export default Title;
