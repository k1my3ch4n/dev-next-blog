const Text = ({ children }: { children: React.ReactNode }) => {
  const classNames = "pt-3 pb-2 text-base";

  return (
    <div className="mt-1">
      <div className={classNames}>{children}</div>
    </div>
  );
};

export default Text;
