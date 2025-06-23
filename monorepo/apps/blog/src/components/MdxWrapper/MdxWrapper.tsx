"use client";

import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "@components/MdxComponents";

const MdxWrapper = ({ mdxSource }: any) => {
  return (
    <>
      {mdxSource ? (
        <div className="w-full py-[40px] px-0 text-[20px] font-normal leading-normal">
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg py-10">
          게시물 콘텐츠를 로드할 수 없습니다.
        </div>
      )}
    </>
  );
};

export default MdxWrapper;
