const Title = ({ title }: { title: string }) => {
  // todo : font-size 추가 ( font-size: 40px; )
  // todo : line-height 추가 ( line-height: 1.2; )
  const className = "font-bold py-3 px-2";

  return <h1 className={className}>{title}</h1>;
};

export default Title;
