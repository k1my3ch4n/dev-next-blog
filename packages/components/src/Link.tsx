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

  const target = isBlank ? "_blank" : "_self";
  const rel = isBlank ? "noopener noreferrer" : undefined;

  return (
    <a
      className={classNames}
      href={link}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

export default Link;
