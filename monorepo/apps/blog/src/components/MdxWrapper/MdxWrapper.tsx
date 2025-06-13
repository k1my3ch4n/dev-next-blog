"use client";

import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "@/components/MdxComponents";

const MdxWrapper = ({ mdxSource }: any) => {
  return (
    <>
      {mdxSource ? (
        <MDXRemote {...mdxSource} components={MDXComponents} />
      ) : (
        <div className="text-center text-gray-500 text-lg py-10">
          게시물 콘텐츠를 로드할 수 없습니다.
        </div>
      )}
    </>
  );
};

export default MdxWrapper;
