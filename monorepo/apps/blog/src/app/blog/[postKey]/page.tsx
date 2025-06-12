import prefetchPostData from "@/prefetchers/prefetchPostData";
import { Highlight, Title } from "@repo/components";
import { remark } from "remark";
import html from "remark-html";

import fs from "fs/promises"; // Node.js 파일 시스템 모듈
import path from "path"; // Node.js 경로 모듈

export const dynamic = "force-dynamic";

interface BlogPostParams {
  postKey?: string;
}

export default async function BlogPostPage({
  params,
}: {
  params: BlogPostParams;
}) {
  const { postKey } = params;

  const { data, error } = await prefetchPostData(postKey);

  if (error) {
    // import { notFound } from 'next/navigation';
    // notFound(); // 404 페이지로 리다이렉트
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  const { title, tags } = data.post;

  let MDXComponent;

  try {
    const { default: LoadedMDXComponent } = await import(
      `../../../posts/${postKey}.mdx`
    );
    MDXComponent = LoadedMDXComponent;

    const filePath = path.join(process.cwd(), "src", "posts", `${postKey}.md`);
    markdownContent = await fs.readFile(filePath, "utf8");
  } catch (error) {
    console.error(
      `마크다운 파일을 불러오는 중 오류 발생: ${postKey}.md`,
      error
    );
    // 파일이 없거나 읽을 수 없을 때의 처리
    // return { notFound: true }; // 404 페이지로 리다이렉트
    return <div>게시글 내용을 불러올 수 없습니다.</div>;
  }

  const processedContent = await remark().use(html).process(markdownContent);
  const htmlContent = processedContent.toString();

  return (
    <>
      <Title title={title} />
      <div className="mt-[10px] mb-[20px]">
        {tags.map((tag) => (
          <Highlight key={tag}>{tag}</Highlight>
        ))}
      </div>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </>
  );
}
