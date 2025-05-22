const Header = ({
  children,
  size = "l",
  wrapperClassName = "",
  titleClassName = "",
}: {
  children: React.ReactNode;
  size?: "l" | "m" | "s";
  wrapperClassName?: string;
  titleClassName?: string;
}) => {
  const WRAPPER_SIZE = {
    l: "mt-[32px] mb-[4px]",
    m: "mt-[22px] mb-[1px]",
    s: "mt-[16px]",
  };

  const TITLE_SIZE = {
    l: "text-[30px]",
    m: "text-[24px]",
    s: "text-[20px]",
  };

  const wrapperClassNames = `flex items-center w-full ${WRAPPER_SIZE[size]} ${wrapperClassName}`;
  const titleClassNames = `py-[3px] px-[2px] font-semibold leading-[1.3] ${TITLE_SIZE[size]} ${titleClassName}`;

  return (
    <div className={wrapperClassNames}>
      <div className={titleClassNames}>{children}</div>
    </div>
  );
};

export default Header;
