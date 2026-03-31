import fs from "fs/promises";
import path from "path";

const POSTS_DIRECTORY = path.join(process.cwd(), "src", "posts");

export const getFileContents = async ({ postKey }: { postKey?: string }) => {
  let fileContents = "";
  let isFound = false;

  const filePath = path.join(POSTS_DIRECTORY, `${postKey}.md`);

  try {
    fileContents = await fs.readFile(filePath, "utf8");
    isFound = true;
  } catch (innerError) {
    console.error(
      `게시물 파일 ${postKey}.mdx 또는 ${postKey}.md를 찾을 수 없습니다.`,
      innerError,
    );
  }

  return { fileContents, isFound };
};
