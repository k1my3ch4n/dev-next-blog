import { MDXRemote } from "next-mdx-remote/rsc";
import MdxComponents from "../MdxComponents";
import rehypeHighlight from "rehype-highlight";

interface MdxWrapperProps {
  source?: string | null;
}

const MdxWrapper = ({ source }: MdxWrapperProps) => {
  return (
    <>
      {source ? (
        <div className="w-full py-[40px] px-0 text-[20px] font-normal leading-normal">
          <MDXRemote
            source={source}
            components={MdxComponents}
            options={{
              mdxOptions: {
                format: "md",
                rehypePlugins: [rehypeHighlight],
              },
            }}
          />
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
