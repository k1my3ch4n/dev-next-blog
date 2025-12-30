const Divider = () => {
  const classNames = "w-full h-[1px] bg-[var(--theme-divider)] my-[10px] mx-0";

  return <div className={classNames} role="separator" aria-hidden="true" />;
};

export default Divider;
