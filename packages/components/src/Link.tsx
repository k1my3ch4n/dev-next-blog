"use client";

const Link = ({
  link,
  isBlank = true,
  children,
  ariaLabel,
}: {
  link: string;
  isBlank?: boolean;
  children: React.ReactNode;
  ariaLabel?: string;
}) => {
  const classNames =
    "border-b border-solid border-gray text-gray cursor-pointer";

  const windowTarget = isBlank ? "_blank" : "_self";

  const handleClick = () => {
    window.open(link, windowTarget);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <span
      className={classNames}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={ariaLabel}
    >
      {children}
    </span>
  );
};

export default Link;
