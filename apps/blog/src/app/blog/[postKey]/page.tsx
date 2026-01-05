import getPostData from "@data/getPostData";
import { Highlight, Title } from "@repo/components";

import { getFileContents, getMDXSource } from "@utils/fileUtils";
import MdxWrapper from "@components/MdxWrapper";
import { BlogPostingJsonLd } from "@components/JsonLd";

export const dynamic = "force-dynamic";

type BlogPostParams = Promise<{ postKey?: string }>;

export default async function BlogPostPage({
  params,
}: {
  params: BlogPostParams;
}) {
  const { postKey } = await params;

  const { data, error } = await getPostData(postKey);

  if (error) {
    // import { notFound } from 'next/navigation';
    // notFound(); // 404 페이지로 리다이렉트
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  const { title, tags } = data.post;

  const { fileContents, isFound } = await getFileContents({ postKey });

  if (!isFound) {
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center p-4 rounded-lg">
        <div className="text-center text-red-700 text-xl font-semibold p-6 bg-white shadow-md rounded-md">
          <p>게시물을 로드하는 데 실패했습니다.</p>
          <p className="text-base text-gray-600 mt-2">
            `{postKey}.mdx` 또는 `{postKey}.md` 파일을 찾을 수 없습니다.
          </p>
        </div>
      </div>
    );
  }

  const { mdxSource } = await getMDXSource({ fileContents });

  return (
    <>
      <BlogPostingJsonLd title={title} postKey={postKey ?? ""} tags={tags} />
      <Title title={title} />
      <div className="mt-[10px] mb-[20px]">
        {tags.map((tag) => (
          <Highlight key={tag} className="mr-[4px]">
            {tag}
          </Highlight>
        ))}
      </div>
      <MdxWrapper mdxSource={mdxSource} />
    </>
  );
}
