"use client";

const Layout = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const wrapperClassName = `flex flex-col mx-auto my-[20px] md:my-[40px] w-full md:w-3/4 max-w-[920px] leading-normal px-[16px] md:px-[20px] ${className}`;

  return <div className={wrapperClassName}>{children}</div>;
};

export default Layout;
