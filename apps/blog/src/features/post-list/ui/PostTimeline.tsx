interface PostTimelineDotProps {
  isFirst: boolean;
  isLast: boolean;
}

const PostTimelineDot = ({ isFirst, isLast }: PostTimelineDotProps) => (
  <>
    <div
      className={`w-[2px] flex-1 self-center ${isFirst ? "bg-transparent" : "bg-[var(--border)]"}`}
    />
    <div className="timeline-dot my-1" />
    <div
      className={`w-[2px] flex-1 self-center ${isLast ? "bg-transparent" : "bg-[var(--border)]"}`}
    />
  </>
);

export default PostTimelineDot;
