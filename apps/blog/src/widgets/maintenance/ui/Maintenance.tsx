const GITHUB_LINK =
  "https://github.com/k1my3ch4n/dev-next-blog/blob/main/README.md";
const EMAIL = "k1my3ch4n@gmail.com";

const Maintenance = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">🔧</div>
        <h1 className="text-3xl font-bold mb-4">블로그 점검 중</h1>
        <p className="text-lg text-gray-600 mb-6">
          더 나은 서비스를 위해 블로그를 점검하고 있습니다.
          <br />
          빠른 시일 내에 돌아오겠습니다.
        </p>
        <div className="border-t pt-6">
          <p className="text-sm text-gray-500 mb-4">
            문의사항이 있으시면 연락해주세요
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <span>📧</span>
              <span>{EMAIL}</span>
            </a>
            <a
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <span>💻</span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
