import { Divider } from "@repo/components";
import { SKILL_HEADER, SKILL_DATA } from "@data";
import SkillList from "./SkillList";

const SkillCards = () => (
  <div className="flex flex-col gap-4">
    {SKILL_DATA.map((row, index) => (
      <div
        key={index}
        className="rounded-[8px] p-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
      >
        <div className="font-semibold text-[16px] mb-[10px]">
          {row.category}
        </div>
        <Divider />
        <div className="mt-[10px] mb-[8px]">
          <div className="text-[13px] text-[var(--theme-text-muted)] mb-[6px]">
            {SKILL_HEADER[1]}
          </div>
          <SkillList skills={row.confident} />
        </div>
        {row.learning.length > 0 && (
          <>
            <Divider />
            <div className="mt-[10px]">
              <div className="text-[13px] text-[var(--theme-text-muted)] mb-[6px]">
                {SKILL_HEADER[2]}
              </div>
              <SkillList skills={row.learning} />
            </div>
          </>
        )}
      </div>
    ))}
  </div>
);

export default SkillCards;
