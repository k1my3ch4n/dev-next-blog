import { ImageResponse } from "next/og";
import { SEO } from "@shared/config";
import { getPostData } from "@shared/api";

export const alt = "Blog Post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ postKey: string }>;
}) {
  const { postKey } = await params;
  const { data, error } = await getPostData(postKey);

  const title = error ? "게시글" : data.post.title;
  const tags = error ? [] : data.post.tags;

  return new ImageResponse(
    (
      <div tw="w-full h-full flex flex-col items-center justify-center bg-[#1a1a2e] text-white p-[60px]">
        <div tw="text-5xl font-bold text-center leading-tight">{title}</div>
        {tags.length > 0 && (
          <div tw="flex mt-8 gap-3">
            {tags.map((tag) => (
              <div
                key={tag}
                tw="text-xl px-4 py-1.5 bg-[#2a2a4e] rounded-lg text-[#a0a0b0]"
              >
                {tag}
              </div>
            ))}
          </div>
        )}
        <div tw="text-xl mt-10 text-[#606070]">{SEO.siteName}</div>
      </div>
    ),
    { ...size },
  );
}
