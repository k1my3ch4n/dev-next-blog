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
    <div className={wrapperClassName} style={{ width, height }}>
      <Image className={imageClassName} style={{ width, height }} />
    </div>
  );
};

export default ImageBox;
