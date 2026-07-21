import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import {
  FilterTabs,
  type FilterOption,
  type FilterTabsProps,
} from "@repo/components";

type FilterValue = "all" | "career" | "personal";

const options: FilterOption<FilterValue>[] = [
  { value: "all", label: "All", count: 12 },
  { value: "career", label: "Career", count: 4 },
  { value: "personal", label: "Personal", count: 8 },
];

const ControlledFilterTabs = (args: FilterTabsProps<FilterValue>) => {
  const [value, setValue] = useState(args.value);

  return (
    <FilterTabs
      {...args}
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue);
        args.onChange(nextValue);
      }}
    />
  );
};

const meta = {
  title: "Components/Interactive/FilterTabs",
  component: ControlledFilterTabs,
  tags: ["autodocs", "dark-test"],
  args: {
    options,
    value: "all",
    onChange: fn(),
    ariaLabel: "프로젝트 유형 필터",
    mode: "toggle",
  },
  argTypes: {
    options: { control: false },
    value: { control: "select", options: ["all", "career", "personal"] },
    mode: { control: "radio", options: ["toggle", "tabs"] },
  },
} satisfies Meta<typeof ControlledFilterTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleMode: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const personalButton = canvas.getByRole("button", { name: /Personal/ });

    await userEvent.click(personalButton);
    await expect(personalButton).toHaveAttribute("aria-pressed", "true");
    await expect(args.onChange).toHaveBeenCalledWith("personal");
  },
};

export const TabsMode: Story = {
  args: { mode: "tabs" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const careerTab = canvas.getByRole("tab", { name: /Career/ });

    await userEvent.click(careerTab);
    await expect(careerTab).toHaveAttribute("aria-selected", "true");
  },
};
