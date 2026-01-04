const HomeButton = ({ onClick }: { onClick: () => void }) => {
  const className = "flex items-center justify-center m-auto mb-[20px] w-[60px] h-[60px] text-[40px] rounded-[10px] shadow-inner-border";

  return (
    <button className={className} onClick={onClick} aria-label="홈으로 이동">
      🏠
    </button>
  );
};

export default HomeButton;
