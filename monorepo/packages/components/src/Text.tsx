const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-1">
      <div className="pt-3 pb-2 text-base">{children}</div>
    </div>
  );
};

export default Text;
