const PageBox = ({
  Thumbnail,
  title,
  onClick,
  className = "",
  width,
  height,
  imageClassName: customImageClassName,
}: {
  Thumbnail: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  onClick: () => void;
  className?: string;
  width?: string;
  height?: string;
  imageClassName?: string;
}) => {
  const boxClassName = `cursor-pointer shadow-inner-border rounded-[10px] overflow-hidden ${className}`;

  const imageWrapperClassName =
    "aspect-[4/3] flex items-center justify-center bg-[var(--theme-card-bg)] rounded-t-[10px] overflow-hidden";

  const defaultImageClassName = "w-full h-full object-contain p-4";
  const imageClassName = customImageClassName || defaultImageClassName;

  const titleClassName =
    "flex items-center justify-center p-[10px] bg-[var(--theme-card-title-bg)] text-[var(--theme-card-title-text)] rounded-b-[10px]";

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  const boxStyle = width || height ? { width, height } : undefined;

  return (
    <div
      className={boxClassName}
      style={boxStyle}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`${title} 열기`}
    >
      <div className={imageWrapperClassName}>
        <Thumbnail className={imageClassName} aria-hidden="true" />
      </div>
      <div className={titleClassName}>{title}</div>
    </div>
  );
};

export default PageBox;
