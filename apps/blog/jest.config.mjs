import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  clearMocks: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/types/**",
    "!src/**/*.test.{ts,tsx}",
    "!src/**/index.{ts,tsx}",
    "!src/posts/**",
    "!src/shared/assets/**",
    "!src/test/**",
  ],
  coverageDirectory: "<rootDir>/coverage",
  coverageProvider: "v8",
  modulePathIgnorePatterns: ["<rootDir>/.next/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
    "^@entities/(.*)$": "<rootDir>/src/entities/$1",
    "^@features/(.*)$": "<rootDir>/src/features/$1",
    "^@widgets/(.*)$": "<rootDir>/src/widgets/$1",
    "\\.svg$": "<rootDir>/src/test/stubs/svg.tsx",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
};

export default async () => {
  const nextConfig = await createJestConfig(config)();

  return { ...nextConfig, transformIgnorePatterns: [] };
};
