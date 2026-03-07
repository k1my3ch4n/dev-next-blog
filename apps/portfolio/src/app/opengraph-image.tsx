import { ImageResponse } from "next/og";

export const alt = "김예찬's Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div tw="w-full h-full flex flex-col items-center justify-center bg-[#1a1a2e] text-white">
        <div tw="text-6xl font-bold">김예찬&apos;s Portfolio</div>
        <div tw="text-3xl mt-5 text-[#a0a0b0]">
          웹 프론트엔드 개발자 김예찬의 포트폴리오
        </div>
      </div>
    ),
    { ...size },
  );
}
