const Layout = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const wrapperClassName = `flex flex-col m-auto my-[40px] w-2/4 min-w-[800px] leading-normal ${className}`;

  return <div className={wrapperClassName}>{children}</div>;
};

export default Layout;
