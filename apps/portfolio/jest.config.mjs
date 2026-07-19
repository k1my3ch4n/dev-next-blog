import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  clearMocks: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/types.ts",
    "!src/**/*.test.{ts,tsx}",
    "!src/**/index.{ts,tsx}",
    "!src/shared/data/**",
    "!src/shared/types/**",
    "!src/test/**",
  ],
  coverageDirectory: "<rootDir>/coverage",
  coverageProvider: "v8",
  modulePathIgnorePatterns: ["<rootDir>/.next/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@widgets/(.*)$": "<rootDir>/src/widgets/$1",
    "^@features/(.*)$": "<rootDir>/src/features/$1",
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@images$": "<rootDir>/src/shared/assets/images/index.ts",
    "^@data$": "<rootDir>/src/shared/data/index.ts",
    "^@lib/(.*)$": "<rootDir>/src/shared/lib/$1",
    "\\.svg$": "<rootDir>/src/test/stubs/svg.tsx",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "<rootDir>/jest.environment.cjs",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
};

const mswRuntimePackages =
  "(?:msw|@mswjs[\\\\/]interceptors|@open-draft[\\\\/][^\\\\/]+|rettime|until-async)";
const pnpmPackagePath =
  "(?:\\.pnpm[\\\\/][^\\\\/]+[\\\\/]node_modules[\\\\/])?";

export default async () => {
  const nextConfig = await createJestConfig(config)();

  return {
    ...nextConfig,
    transformIgnorePatterns: [
      `node_modules[\\\\/](?!(?:${pnpmPackagePath}${mswRuntimePackages})[\\\\/])`,
      "^.+\\.module\\.(css|sass|scss)$",
    ],
  };
};
