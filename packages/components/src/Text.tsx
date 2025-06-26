const Text = ({ children }: { children: React.ReactNode }) => {
  const wrapperClassName = "mt-[1px]";
  const textClassName = "py-[3px] px-[2px] text-base";

  return (
    <div className={wrapperClassName}>
      <div className={textClassName}>{children}</div>
    </div>
  );
};

export default Text;
