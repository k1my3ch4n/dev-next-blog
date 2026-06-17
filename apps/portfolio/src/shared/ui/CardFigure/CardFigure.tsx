import type { CardTypo } from "@repo/components";

interface CardFigureProps {
  gradient: string;
  cardTypo: CardTypo;
  actionLabel: string;
  titleSize?: "lg" | "md";
}

const CardFigure = ({
  gradient,
  cardTypo,
  actionLabel,
  titleSize = "lg",
}: CardFigureProps) => {
  const mainTextClass =
    titleSize === "lg"
      ? "text-3xl md:text-4xl"
      : "text-2xl md:text-3xl";

  return (
    <figure
      className="aspect-[16/9] flex flex-col items-center justify-center relative overflow-hidden px-6"
      style={{ background: gradient }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      <span
        className={`z-[1] text-white font-black ${mainTextClass} tracking-tight text-center leading-tight drop-shadow-md`}
      >
        {cardTypo.main}
      </span>
      <span className="z-[1] text-white/75 text-xs font-medium tracking-wide mt-2">
        {cardTypo.sub}
      </span>
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent text-white text-xs font-semibold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        {actionLabel} →
      </div>
    </figure>
  );
};

export default CardFigure;
