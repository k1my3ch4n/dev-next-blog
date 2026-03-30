import { Divider, PageBox, Title, GRID_LAYOUT } from "@repo/components";
import { EXTRA_DATA } from "@shared/config";

const Extra = () => {
  return (
    <section className="w-full mb-[20px]">
      <Title title="ETC" />
      <Divider />
      <div className={GRID_LAYOUT.responsive2Cols}>
        {EXTRA_DATA.map(({ Thumbnail, title, link }) => (
          <PageBox
            key={title}
            Thumbnail={Thumbnail}
            title={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          />
        ))}
      </div>
    </section>
  );
};

export default Extra;
