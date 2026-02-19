const HomeButton = ({ onClick }: { onClick: () => void }) => {
  const className = "flex items-center justify-center m-auto mb-[20px] w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] text-[28px] md:text-[34px] lg:text-[40px] rounded-[10px] shadow-inner-border";

  return (
    <button className={className} onClick={onClick} aria-label="홈으로 이동">
      🏠
    </button>
  );
};

export default HomeButton;
