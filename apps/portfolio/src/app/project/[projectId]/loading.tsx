import { Skeleton, SkeletonText } from "@repo/components";

export default function ProjectLoadingPage() {
  return (
    <div className="w-full" role="status" aria-label="프로젝트 로딩 중">
      {/* Title */}
      <Skeleton height="40px" width="70%" className="mb-[24px]" />

      {/* Thumbnail */}
      <Skeleton
        height="300px"
        width="100%"
        className="mb-[24px]"
        borderRadius="8px"
      />

      {/* Period Section */}
      <Skeleton height="24px" width="60px" className="mb-[8px]" />
      <Skeleton height="20px" width="180px" className="mb-[24px]" />

      {/* Content Section */}
      <Skeleton height="24px" width="120px" className="mb-[12px]" />
      <SkeletonText lines={4} />

      <div className="mt-[24px]">
        <Skeleton height="24px" width="100px" className="mb-[12px]" />
        <SkeletonText lines={3} />
      </div>

      <div className="mt-[24px]">
        <Skeleton height="24px" width="140px" className="mb-[12px]" />
        <SkeletonText lines={2} />
      </div>

      {/* Related Links */}
      <div className="mt-[32px]">
        <Skeleton height="24px" width="180px" className="mb-[12px]" />
        <div className="flex flex-col gap-[8px]">
          <Skeleton height="20px" width="200px" />
          <Skeleton height="20px" width="160px" />
        </div>
      </div>
    </div>
  );
}
