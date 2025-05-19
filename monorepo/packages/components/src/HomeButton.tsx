const HomeButton = ({ onClick }: { onClick: () => void }) => {
  // todo : font-size 추가 ( font-size: 36px; )
  // todo : box-shadow 추가 ( box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.16); )
  const className = "m-auto mb-20";

  return (
    <button className={className} onClick={onClick}>
      🏠
    </button>
  );
};

export default HomeButton;
