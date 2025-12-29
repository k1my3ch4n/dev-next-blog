import { TEXT_PADDING, HEADER_MARGIN, TEXT_SIZE } from "./styles";

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
  const TITLE_SIZE = {
    l: TEXT_SIZE["2xl"],
    m: TEXT_SIZE.xl,
    s: TEXT_SIZE.lg,
  };

  const wrapperClassNames = `flex items-center w-full ${HEADER_MARGIN[size]} ${wrapperClassName}`;
  const titleClassNames = `${TEXT_PADDING} font-semibold leading-[1.3] ${TITLE_SIZE[size]} ${titleClassName}`;

  return (
    <div className={wrapperClassNames}>
      <div className={titleClassNames}>{children}</div>
    </div>
  );
};

export default Header;
