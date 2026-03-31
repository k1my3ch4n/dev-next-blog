import type { CardTypo } from "@repo/components";

interface GradientThumbnailProps {
  typo?: CardTypo;
  fallbackTitle: string;
  gradient: string;
}

const GradientThumbnail = ({
  typo,
  fallbackTitle,
  gradient,
}: GradientThumbnailProps) => (
  <div
    className="w-[180px] min-h-[120px] shrink-0 flex flex-col items-center justify-center px-3"
    style={{ background: gradient }}
  >
    <span className="text-white font-black text-lg tracking-tight text-center leading-tight">
      {typo?.main ?? fallbackTitle}
    </span>
    <span className="text-white/60 text-[0.625rem] font-medium tracking-wide mt-1">
      {typo?.sub ?? ""}
    </span>
  </div>
);

export default GradientThumbnail;
