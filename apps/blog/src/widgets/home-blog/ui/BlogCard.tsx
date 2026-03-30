import { PageBox } from "@repo/components";
import { BLOG_THUMBNAIL } from "@entities/post";

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
  const imageKey = thumbnailKey || postKey;
  const Thumbnail = imageKey ? BLOG_THUMBNAIL[imageKey] : undefined;

  if (!Thumbnail) {
    return null;
  }

  const href = externalUrl ?? (postKey ? `/blog/${postKey}` : undefined);
  const target = externalUrl ? "_blank" : undefined;
  const rel = externalUrl ? "noopener noreferrer" : undefined;

  return (
    <PageBox
      Thumbnail={Thumbnail}
      title={title}
      href={href}
      target={target}
      rel={rel}
      className="w-full"
      imageClassName="rounded-t-[10px]"
    />
  );
};

export default BlogCard;
