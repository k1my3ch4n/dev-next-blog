const Text = ({ children }: { children: React.ReactNode }) => {
  const wrapperClassName = "mt-1";
  const textClassName = "py-3 px-2 text-base";

  return (
    <div className={wrapperClassName}>
      <div className={textClassName}>{children}</div>
    </div>
  );
};

export default Text;
