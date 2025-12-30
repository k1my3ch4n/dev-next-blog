import { ComponentType } from "react";
import UserRobotContent from "./UserRobotContent";
import ManagerRobotContent from "./ManagerRobotContent";
import MonorepoContent from "./MonorepoContent";
import NextMonorepoContent from "./NextMonorepoContent";
import HackerRankAiHelperContent from "./HackerRankAiHelperContent";

export const PROJECT_CONTENTS: Record<string, ComponentType> = {
  userRobot: UserRobotContent,
  managerRobot: ManagerRobotContent,
  monorepo: MonorepoContent,
  nextMonorepo: NextMonorepoContent,
  hackerRankAiHelper: HackerRankAiHelperContent,
};
