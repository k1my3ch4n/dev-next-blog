import { SKILL_HEADER, SKILL_DATA } from "@data";
import SkillList from "./SkillList";

const SkillCards = () => (
  <div className="flex flex-col gap-4">
    {SKILL_DATA.map((row, index) => (
      <div
        key={index}
        className="border border-solid border-[var(--theme-border)] rounded-[8px] p-[12px]"
      >
        <div className="font-semibold mb-[8px]">{row.category}</div>
        <div className="mb-[8px]">
          <div className="text-[13px] text-[var(--theme-text-muted)] mb-[4px]">
            {SKILL_HEADER[1]}
          </div>
          <SkillList skills={row.confident} />
        </div>
        {row.learning.length > 0 && (
          <div>
            <div className="text-[13px] text-[var(--theme-text-muted)] mb-[4px]">
              {SKILL_HEADER[2]}
            </div>
            <SkillList skills={row.learning} />
          </div>
        )}
      </div>
    ))}
  </div>
);

export default SkillCards;
