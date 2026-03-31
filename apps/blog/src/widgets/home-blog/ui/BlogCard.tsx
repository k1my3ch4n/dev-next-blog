import { BLOG_GRADIENTS, BLOG_CARD_TYPO } from "@entities/post";
import type { PostData } from "@shared/types";

type BlogCardProps = Pick<
  PostData,
  "id" | "postKey" | "externalUrl" | "thumbnailKey" | "title" | "tags"
>;

const BlogCard = ({
  id,
  postKey,
  externalUrl,
  thumbnailKey,
  title,
  tags,
}: BlogCardProps) => {
  const typoKey = thumbnailKey || postKey;
  const typo = typoKey ? BLOG_CARD_TYPO[typoKey] : undefined;
  const gradient = BLOG_GRADIENTS[id % BLOG_GRADIENTS.length];

  const href = externalUrl ?? (postKey ? `/blog/${postKey}` : undefined);
  const target = externalUrl ? "_blank" : undefined;
  const rel = externalUrl ? "noopener noreferrer" : undefined;

  return (
    <a href={href} target={target} rel={rel} className="list-row">
      <div
        className="w-[180px] min-h-[120px] shrink-0 flex flex-col items-center justify-center px-3"
        style={{ background: gradient }}
      >
        <span className="text-white font-black text-lg tracking-tight text-center leading-tight">
          {typo?.main ?? title}
        </span>
        <span className="text-white/60 text-[0.625rem] font-medium tracking-wide mt-1">
          {typo?.sub ?? ""}
        </span>
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
