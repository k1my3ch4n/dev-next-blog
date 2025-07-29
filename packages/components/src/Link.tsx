"use client";

const Link = ({
  link,
  isBlank = true,
  children,
}: {
  link: string;
  isBlank?: boolean;
  children: React.ReactNode;
}) => {
  const classNames =
    "border-b border-solid  border-gray text-gray cursor-pointer";

  const windowTarget = isBlank ? "_blank" : "_self";

  const handleClick = () => {
    window.open(link, windowTarget);
  };

  return (
    <span className={classNames} onClick={handleClick}>
      {children}
    </span>
  );
};

export default Link;
