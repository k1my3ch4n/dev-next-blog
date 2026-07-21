import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, defineProject } from "vitest/config";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const storybookProject = ({
  name,
  theme,
}: {
  name: string;
  theme?: "light" | "dark";
}) =>
  defineProject({
    plugins: [
      storybookTest({
        configDir: path.join(dirname, ".storybook"),
        storybookScript: "pnpm storybook",
        ...(theme
          ? {
              initialGlobals: { theme },
              tags: { include: ["dark-test"], exclude: [], skip: [] },
            }
          : {}),
      }),
    ],
    test: {
      name,
      browser: {
        enabled: true,
        provider: playwright({}),
        headless: true,
        instances: [{ browser: "chromium" }],
      },
    },
  });

export default defineConfig({
  test: {
    projects: [
      storybookProject({ name: "storybook" }),
      storybookProject({ name: "storybook-dark", theme: "dark" }),
    ],
  },
});
