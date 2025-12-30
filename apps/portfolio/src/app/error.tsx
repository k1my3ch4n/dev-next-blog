"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-[30px] text-[var(--theme-text-secondary)]">
      <div className="text-8xl mb-[20px]">⚠️</div>
      <h1 className="text-4xl font-bold mb-[16px] text-[var(--theme-text)]">
        오류가 발생했습니다
      </h1>
      <p className="text-xl text-center mb-[24px] max-w-[500px]">
        페이지를 불러오는 중 문제가 발생했습니다.
        <br />
        잠시 후 다시 시도해 주세요.
      </p>
      <div className="flex gap-[12px]">
        <button
          onClick={reset}
          className="px-[24px] py-[12px] bg-[var(--theme-card-title-bg)] text-[var(--theme-card-title-text)] rounded-[8px] cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="다시 시도"
        >
          다시 시도
        </button>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-[24px] py-[12px] border border-[var(--theme-border)] rounded-[8px] cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="홈으로 이동"
        >
          홈으로 이동
        </button>
      </div>
      {process.env.NODE_ENV === "development" && error.message && (
        <details className="mt-[32px] p-[16px] bg-[var(--theme-header-bg)] rounded-[8px] max-w-[600px] w-full">
          <summary className="cursor-pointer font-semibold mb-[8px]">
            오류 상세 정보 (개발 모드)
          </summary>
          <pre className="text-sm overflow-auto whitespace-pre-wrap break-all">
            {error.message}
            {error.stack && `\n\n${error.stack}`}
          </pre>
        </details>
      )}
    </div>
  );
}
