import {
  YarnBerryPnp,
  GithubActions1,
  GithubActions2,
  GithubActions3,
  YarnWorkspaceMonorepo1,
  YarnWorkspaceMonorepo2,
  YarnWorkspaceMonorepo3,
  YarnWorkspaceMonorepo4,
  YarnWorkspaceMonorepo5,
  Msw1,
  Msw2,
  Msw3,
  WoowaTechCourse,
  MarchMemoir,
  FastestVite,
  NextMigration1,
  NextMigration2,
} from "@images";

export const BLOG_THUMBNAIL: {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
} = {
  "march-memoir": MarchMemoir,
  "woowa-course": WoowaTechCourse,
  "msw-3": Msw3,
  "msw-2": Msw2,
  "msw-1": Msw1,
  "yarn-workspace-monorepo-5": YarnWorkspaceMonorepo5,
  "yarn-workspace-monorepo-4": YarnWorkspaceMonorepo4,
  "yarn-workspace-monorepo-3": YarnWorkspaceMonorepo3,
  "yarn-workspace-monorepo-2": YarnWorkspaceMonorepo2,
  "yarn-workspace-monorepo-1": YarnWorkspaceMonorepo1,
  "github-actions-3": GithubActions3,
  "github-actions-2": GithubActions2,
  "github-actions-1": GithubActions1,
  "yarn-berry-pnp-1": YarnBerryPnp,
  "fastest-vite": FastestVite,
  "next-migration-1": NextMigration1,
  "next-migration-2": NextMigration2,
};

export const BLOG_POST_DATA = [
  //   {
  //     thumbnail: '',
  //     title: '포스트 제목 포스트 제목 포스트 제목 포스트 제목',
  //     postId: '',
  //     tags: ['태그 1', '태그 2'],
  //   },

  {
    Thumbnail: MarchMemoir,
    title: "3dnjf",
    postId: "woowa-course",
    tags: ["우아한 테크코스"],
  },
  {
    Thumbnail: WoowaTechCourse,
    title: "우아한 테크코스 프론트엔드 7기 프리코스 회고록",
    postId: "woowa-course",
    tags: ["우아한 테크코스"],
  },
  {
    Thumbnail: Msw3,
    title:
      "msw ( mock service worker ) 를 이용한 API mocking #3 ( storybook 작성 )",
    postId: "msw-3",
    tags: ["msw", "mock service worker", "storybook"],
  },
  {
    Thumbnail: Msw2,
    title:
      "msw ( mock service worker ) 를 이용한 API mocking #2 ( jest 를 이용한 테스트 코드 작성 )",
    postId: "msw-2",
    tags: [
      "msw",
      "mock service worker",
      "jest",
      "react testing library",
      "vitest",
    ],
  },
  {
    Thumbnail: Msw1,
    title:
      "msw ( mock service worker ) 를 이용한 API mocking #1 ( msw 기본 설정 )",
    postId: "msw-1",
    tags: ["msw", "mock service worker"],
  },
  {
    Thumbnail: YarnWorkspaceMonorepo5,
    title: "yarn workspaces 로 monorepo구성하기 #5 ( github package publish )",
    postId: "yarn-workspace-monorepo-5",
    tags: [
      "monorepo",
      "vite",
      "yarn workspace",
      "yarn berry",
      "github package",
    ],
  },
  {
    Thumbnail: YarnWorkspaceMonorepo4,
    title: "yarn workspaces 로 monorepo구성하기 #4 ( npm publish )",
    postId: "yarn-workspace-monorepo-4",
    tags: ["monorepo", "vite", "yarn workspace", "yarn berry", "npm publish"],
  },
  {
    Thumbnail: YarnWorkspaceMonorepo3,
    title: "yarn workspaces 로 monorepo구성하기 #3 ( 공통 파일 추가 )",
    postId: "yarn-workspace-monorepo-3",
    tags: ["monorepo", "vite", "yarn workspace", "yarn berry"],
  },
  {
    Thumbnail: YarnWorkspaceMonorepo2,
    title: "yarn workspaces 로 monorepo구성하기 #2 ( prettier , eslint 설정 )",
    postId: "yarn-workspace-monorepo-2",
    tags: [
      "monorepo",
      "vite",
      "yarn workspace",
      "yarn berry",
      "eslint",
      "prettier",
    ],
  },
  {
    Thumbnail: YarnWorkspaceMonorepo1,
    title: "yarn workspaces 로 monorepo구성하기 #1 ( monorepo 기본 설정 )",
    postId: "yarn-workspace-monorepo-1",
    tags: ["monorepo", "vite", "yarn workspace", "yarn berry"],
  },
  {
    Thumbnail: GithubActions3,
    title:
      "github actions를 이용한 ci/cd 자동화 #3 ( notion versioning , 패치노트 )",
    postId: "github-actions-3",
    tags: [
      "ci/cd",
      "pull request",
      "github",
      "github actions",
      "versioning",
      "notion versioning",
    ],
  },
  {
    Thumbnail: GithubActions2,
    title:
      "github actions를 이용한 ci/cd 자동화 #2 ( semver , auto versioning )",
    postId: "github-actions-2",
    tags: [
      "ci/cd",
      "pull request",
      "github",
      "github actions",
      "versioning",
      "auto versioning",
    ],
  },
  {
    Thumbnail: GithubActions1,
    title:
      "github actions를 이용한 ci/cd 자동화 #1 ( checkout , setup node , build )",
    postId: "github-actions-1",
    tags: ["ci/cd", "pull request", "github", "github actions"],
  },
  {
    Thumbnail: YarnBerryPnp,
    title: "yarn berry pnp 적용기",
    postId: "yarn-berry-pnp-1",
    tags: ["pnp", "vite", "yarn berry"],
  },
];
