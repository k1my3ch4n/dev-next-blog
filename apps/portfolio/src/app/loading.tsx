import {
  Skeleton,
  SkeletonCard,
  SkeletonText,
  SkeletonTitle,
} from "@repo/components";

export default function LoadingPage() {
  return (
    <div className="w-full" role="status" aria-label="페이지 로딩 중">
      {/* Title Skeleton */}
      <SkeletonTitle />

      {/* Introduce Section */}
      <div className="flex flex-col gap-[16px] mb-[32px]">
        <SkeletonText lines={2} />
      </div>

      {/* Profile Section */}
      <div className="mb-[32px]">
        <Skeleton height="28px" width="120px" className="mb-[16px]" />
        <div className="flex flex-col gap-[12px]">
          <Skeleton height="20px" width="250px" />
          <Skeleton height="20px" width="200px" />
          <Skeleton height="20px" width="180px" />
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-[32px]">
        <Skeleton height="28px" width="100px" className="mb-[16px]" />
        <Skeleton height="150px" width="100%" borderRadius="8px" />
      </div>

      {/* Projects Section */}
      <div className="mb-[32px]">
        <Skeleton height="28px" width="140px" className="mb-[16px]" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>

      {/* About Me Section */}
      <div>
        <Skeleton height="28px" width="130px" className="mb-[16px]" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </div>
  );
}
