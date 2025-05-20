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
  // todo : height fit-content 추가 ( height: fit-content; )
  // todo : box-shadow 추가 ( box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.16); )
  // todo : border-radius 추가 ( border-radius: 10px; )
  const boxClassName = "w-400 cursor-pointer";

  // todo : height fit-content 추가 ( height: fit-content; )
  // todo : background-color 추가 ( background-color: black; )
  // todo : border-radius 추가 ( border-radius: 0 0 10px 10px; )
  const titleClassName =
    "flex items-center justify-center p-10 bg-black text-white";

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
