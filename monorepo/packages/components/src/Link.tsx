"use client";

const Link = ({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) => {
  const classNames =
    "border-b border-solid  border-gray text-gray cursor-pointer";

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <span className={classNames} onClick={handleClick}>
      {children}
    </span>
  );
};

export default Link;
