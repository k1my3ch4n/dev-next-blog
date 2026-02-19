import { Highlight } from "@repo/components";

const SkillList = ({ skills }: { skills: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {skills.map((skill) => (
      <Highlight key={skill} className="whitespace-nowrap">
        {skill}
      </Highlight>
    ))}
  </div>
);

export default SkillList;
