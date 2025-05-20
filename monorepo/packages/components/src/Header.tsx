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
    l: "mt-32 mb-4",
    m: "mt-22 mb-1",
    s: "mt-16",
  };

  // todo : font-size
  const TITLE_SIZE = {
    l: "30",
    m: "24",
    s: "20",
  };

  const wrapperClassNames = `flex items-center w-full ${WRAPPER_SIZE[size]} ${wrapperClassName}`;
  // todo : line-height: 1.3;
  const titleClassNames = `py-3 px-2 font-semibold ${titleClassName}`;

  return (
    <div className={wrapperClassNames}>
      <div className={titleClassNames}>{children}</div>
    </div>
  );
};

export default Header;
