interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

export const Skeleton = ({
  width = "100%",
  height = "20px",
  borderRadius = "4px",
  className = "",
}: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-[var(--theme-skeleton)] ${className}`}
      style={{ width, height, borderRadius }}
      aria-hidden="true"
    />
  );
};

export const SkeletonText = ({ lines = 3 }: { lines?: number }) => {
  return (
    <div className="flex flex-col gap-[8px]" aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height="16px"
          width={i === lines - 1 ? "60%" : "100%"}
        />
      ))}
    </div>
  );
};

export const SkeletonCard = () => {
  return (
    <div
      className="rounded-[10px] overflow-hidden border border-[var(--theme-border)]"
      aria-hidden="true"
    >
      <Skeleton height="150px" borderRadius="0" />
      <div className="p-[10px]">
        <Skeleton height="20px" width="70%" />
      </div>
    </div>
  );
};

export const SkeletonTitle = ({
  width = "150px",
  height = "32px",
}: {
  width?: string;
  height?: string;
}) => {
  return <Skeleton height={height} width={width} className="mb-[10px]" />;
};

export const SkeletonSection = ({
  title,
  children,
}: {
  title?: boolean;
  children: React.ReactNode;
}) => (
  <div className="w-full mb-[20px]">
    {title && <SkeletonTitle />}
    <div className="h-[1px] bg-[var(--theme-skeleton)] mb-[20px]" />
    {children}
  </div>
);

export const SkeletonProfile = () => {
  return (
    <div className="flex items-center gap-[16px] mb-[24px]" aria-hidden="true">
      <Skeleton width="80px" height="80px" borderRadius="50%" />
      <div className="flex flex-col gap-[8px]">
        <Skeleton width="150px" height="24px" />
        <Skeleton width="200px" height="16px" />
      </div>
    </div>
  );
};

export default Skeleton;
