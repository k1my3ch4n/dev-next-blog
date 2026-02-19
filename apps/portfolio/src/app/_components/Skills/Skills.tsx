import { Divider, Header } from "@repo/components";
import SkillCards from "./SkillCards";
import SkillTable from "./SkillTable";

const Skills = () => {
  return (
    <>
      <Header>⚒️ Skills</Header>
      <Divider />
      <div className="block md:hidden">
        <SkillCards />
      </div>
      <div className="hidden md:block">
        <SkillTable />
      </div>
    </>
  );
};

export default Skills;
