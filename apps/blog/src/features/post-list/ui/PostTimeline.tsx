interface PostTimelineProps {
  count: number;
}

const PostTimeline = ({ count }: PostTimelineProps) => (
  <div className="hidden md:flex flex-col items-center pt-2">
    {Array.from({ length: count }, (_, i) => (
      <div key={i} className="contents">
        <div
          className="timeline-dot"
          style={{ opacity: Math.max(0.2, 1 - i * 0.15) }}
        />
        {i < count - 1 && <div className="timeline-line" />}
      </div>
    ))}
  </div>
);

export default PostTimeline;
