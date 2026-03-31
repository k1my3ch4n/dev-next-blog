import { ImageResponse } from "next/og";
import { SEO } from "@shared/config";

export const alt = SEO.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div tw="w-full h-full flex flex-col items-center justify-center bg-[#1a1a2e] text-white">
        <div tw="text-6xl font-bold">{SEO.siteName}</div>
        <div tw="text-3xl mt-5 text-[#a0a0b0]">{SEO.description}</div>
      </div>
    ),
    { ...size },
  );
}
