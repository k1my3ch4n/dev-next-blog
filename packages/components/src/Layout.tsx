"use client";

const Layout = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const wrapperClassName = `flex flex-col m-auto my-[40px] w-3/4 min-w-[800px] max-w-[920px] leading-normal px-[20px] ${className}`;

  return <div className={wrapperClassName}>{children}</div>;
};

export default Layout;
