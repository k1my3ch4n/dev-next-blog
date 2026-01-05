const Skeleton = ({ className }: { className?: string }) => (
  <div
    className={`animate-pulse bg-[var(--theme-skeleton)] rounded ${className}`}
  />
);

const SkeletonCard = () => (
  <div className="w-full rounded-[10px] overflow-hidden shadow-inner-border">
    <Skeleton className="w-full h-[150px]" />
    <div className="p-[10px]">
      <Skeleton className="h-[20px] w-3/4" />
    </div>
  </div>
);

const SkeletonSection = ({
  title,
  children,
}: {
  title?: boolean;
  children: React.ReactNode;
}) => (
  <div className="w-full mb-[20px]">
    {title && <Skeleton className="h-[32px] w-[150px] mb-[10px]" />}
    <div className="h-[1px] bg-[var(--theme-skeleton)] mb-[20px]" />
    {children}
  </div>
);

const Loading = () => {
  return (
    <div className="w-full" role="status" aria-live="polite">
      {/* Introduce Section */}
      <SkeletonSection title>
        <div className="flex flex-col md:flex-row gap-[20px]">
          <div className="flex flex-col items-center gap-[10px]">
            <Skeleton className="w-[200px] h-[200px] rounded-[20px]" />
            <Skeleton className="h-[20px] w-[150px]" />
            <Skeleton className="h-[20px] w-[180px]" />
            <Skeleton className="h-[20px] w-[140px]" />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-[15px]">
            <Skeleton className="h-[24px] w-[80%]" />
            <Skeleton className="h-[24px] w-[70%]" />
            <Skeleton className="h-[24px] w-[60%]" />
          </div>
        </div>
      </SkeletonSection>

      {/* Projects Section */}
      <SkeletonSection title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </SkeletonSection>

      {/* Blog Section */}
      <SkeletonSection title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </SkeletonSection>
    </div>
  );
};

export default Loading;
