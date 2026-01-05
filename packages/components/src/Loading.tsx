import { Skeleton, SkeletonCard, SkeletonSection } from "./Skeleton";

const Loading = () => {
  return (
    <div className="w-full" role="status" aria-live="polite">
      {/* Introduce Section */}
      <SkeletonSection title>
        <div className="flex flex-col md:flex-row gap-[20px]">
          <div className="flex flex-col items-center gap-[10px]">
            <Skeleton width="200px" height="200px" borderRadius="20px" />
            <Skeleton height="20px" width="150px" />
            <Skeleton height="20px" width="180px" />
            <Skeleton height="20px" width="140px" />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-[15px]">
            <Skeleton height="24px" width="80%" />
            <Skeleton height="24px" width="70%" />
            <Skeleton height="24px" width="60%" />
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
