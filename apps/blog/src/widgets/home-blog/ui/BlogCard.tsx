import { BLOG_THUMBNAIL } from "@entities/post";
import type { PostData } from "@shared/types";

type BlogCardProps = Pick<
  PostData,
  "postKey" | "externalUrl" | "thumbnailKey" | "title" | "tags"
>;

const BlogCard = ({
  postKey,
  externalUrl,
  thumbnailKey,
  title,
  tags,
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
    <a href={href} target={target} rel={rel} className="list-row">
      <div className="w-[180px] min-h-[120px] shrink-0 flex items-center justify-center bg-[var(--surface-raised)]">
        <Thumbnail className="w-full h-full object-contain p-4" />
      </div>
      <div className="flex-1 p-4 md:p-5 flex flex-col justify-center min-w-0">
        <p className="font-semibold text-sm mb-2">{title}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags?.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
