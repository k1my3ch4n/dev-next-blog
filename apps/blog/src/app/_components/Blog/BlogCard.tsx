"use client";

import { PageBox } from "@repo/components";
import { useRouter } from "next/navigation";
import { BLOG_THUMBNAIL } from "@constants/blog";

interface BlogCardProps {
  postKey: string;
  title: string;
}

const BlogCard = ({ postKey, title }: BlogCardProps) => {
  const router = useRouter();
  const Thumbnail = BLOG_THUMBNAIL[postKey];

  const handleClick = () => {
    router.push(`/blog/${postKey}`);
  };

  if (!Thumbnail) {
    return null;
  }

  return (
    <PageBox
      Thumbnail={Thumbnail}
      title={title}
      onClick={handleClick}
      className="w-full"
      imageClassName="rounded-t-[10px]"
    />
  );
};

export default BlogCard;
