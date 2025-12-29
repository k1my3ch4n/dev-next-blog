import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col items-center min-h-screen my-auto p-[30px] text-[var(--theme-text-secondary)]">
      <h1 className="text-7xl mb-[30px] text-[var(--theme-text-muted)]">Loading ... </h1>
      <FadeLoader margin={10} />
      <p className="text-xl text-center my-[30px]">
        데이터를 불러오는 중입니다 . 잠시만 기다려 주세요 !
      </p>
    </div>
  );
};

export default Loading;
