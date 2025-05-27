// todo : imageBox , pageBox 크기 설정 추가 예정

import ImageBox from "./ImageBox";

const PageBox = ({
  Thumbnail,
  title,
  onClick,
  width,
  height,
  imageWrapperClassName = "",
  imageClassName = "",
}: {
  Thumbnail: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  onClick: () => void;
  width: string;
  height: string;
  imageWrapperClassName?: string;
  imageClassName?: string;
}) => {
  const boxClassName =
    "w-[400px] cursor-pointer shadow-inner-border rounded-[10px] h-[fit-content]";

  const titleClassName =
    "flex items-center justify-center p-[10px] bg-black text-white h-[fit-content bg-black rounded-b-[10px]";

  return (
    <div className={boxClassName} onClick={onClick}>
      <ImageBox
        wrapperClassName={imageWrapperClassName}
        imageClassName={imageClassName}
        Image={Thumbnail}
        width={width}
        height={height}
      />
      <div className={titleClassName}>{title}</div>
    </div>
  );
};

export default PageBox;
