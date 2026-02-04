"use client";

import { PageBox } from "@repo/components";
import { useRouter } from "next/navigation";
import { BLOG_THUMBNAIL } from "@constants/blog";

interface BlogCardProps {
  postKey: string | null;
  externalUrl: string | null;
  thumbnailKey: string | null;
  title: string;
}

const BlogCard = ({
  postKey,
  externalUrl,
  thumbnailKey,
  title,
}: BlogCardProps) => {
  const router = useRouter();
  const imageKey = thumbnailKey || postKey;
  const Thumbnail = imageKey ? BLOG_THUMBNAIL[imageKey] : undefined;

  const handleClick = () => {
    if (externalUrl) {
      window.open(externalUrl, "_blank", "noopener,noreferrer");
    } else if (postKey) {
      router.push(`/blog/${postKey}`);
    }
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
