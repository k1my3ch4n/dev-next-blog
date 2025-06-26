const HomeButton = ({ onClick }: { onClick: () => void }) => {
  const className = "m-auto mb-[20px] text-[36px] shadow-inner-border";

  return (
    <button className={className} onClick={onClick}>
      🏠
    </button>
  );
};

export default HomeButton;
