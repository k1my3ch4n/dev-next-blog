import { ComponentType } from "react";
import { PROJECT_DETAILS } from "@data";
import UserRobotContent from "./UserRobotContent";
import ManagerRobotContent from "./ManagerRobotContent";
import MonorepoContent from "./MonorepoContent";
import NextMonorepoContent from "./NextMonorepoContent";
import HackerRankAiHelperContent from "./HackerRankAiHelperContent";

type ProjectId = keyof typeof PROJECT_DETAILS;

export const PROJECT_CONTENTS: Record<ProjectId, ComponentType> = {
  userRobot: UserRobotContent,
  managerRobot: ManagerRobotContent,
  monorepo: MonorepoContent,
  nextMonorepo: NextMonorepoContent,
  hackerRankAiHelper: HackerRankAiHelperContent,
};
