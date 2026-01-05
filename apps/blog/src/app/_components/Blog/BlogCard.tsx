"use client";

import { PageBox } from "@repo/components";
import { useRouter } from "next/navigation";
import { FC, SVGProps } from "react";

interface BlogCardProps {
  postKey: string;
  title: string;
  Thumbnail?: FC<SVGProps<SVGSVGElement>>;
}

const BlogCard = ({ postKey, title, Thumbnail }: BlogCardProps) => {
  const router = useRouter();

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
