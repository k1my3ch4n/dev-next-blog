const ImageBox = ({
  Image,
  width,
  height,
  wrapperClassName,
  imageClassName,
}: {
  Image: React.FC<React.SVGProps<SVGSVGElement>>;
  width?: string;
  height?: string;
  wrapperClassName?: string;
  imageClassName?: string;
}) => {
  return (
    <figure
      className={wrapperClassName}
      style={{ width, height }}
      aria-hidden="true"
    >
      <Image className={imageClassName} style={{ width, height }} />
    </figure>
  );
};

export default ImageBox;
