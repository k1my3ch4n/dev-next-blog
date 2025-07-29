import Link from "./Link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center min-h-screen my-auto p-[20px] text-[#343a40]">
      <h1 style={{ fontSize: "4rem", color: "#6c757d", marginBottom: "15px" }}>
        404 Not Found
      </h1>
      <h2 className="text-5xl mb-[20px]">페이지를 찾을 수 없습니다.</h2>
      <p className="text-xl text-center mb-[30px]">
        요청하신 페이지가 존재하지 않거나, 잘못된 주소입니다.
      </p>
      <Link link="/" isBlank={false}>
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFound;
