const PageBox = ({
  Thumbnail,
  title,
  onClick,
  className = "",
}: {
  Thumbnail: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  onClick: () => void;
  className?: string;
}) => {
  const boxClassName = `cursor-pointer shadow-inner-border rounded-[10px] overflow-hidden ${className}`;

  const imageWrapperClassName =
    "aspect-[4/3] flex items-center justify-center bg-white rounded-t-[10px] overflow-hidden";

  const imageClassName = "w-full h-full object-contain p-4";

  const titleClassName =
    "flex items-center justify-center p-[10px] bg-black text-white rounded-b-[10px]";

  return (
    <div className={boxClassName} onClick={onClick}>
      <div className={imageWrapperClassName}>
        <Thumbnail className={imageClassName} />
      </div>
      <div className={titleClassName}>{title}</div>
    </div>
  );
};

export default PageBox;
