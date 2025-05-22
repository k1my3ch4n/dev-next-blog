const Title = ({ title }: { title: string }) => {
  const className = "font-bold py-[3px] px-[2px] text-title";

  return <h1 className={className}>{title}</h1>;
};

export default Title;
