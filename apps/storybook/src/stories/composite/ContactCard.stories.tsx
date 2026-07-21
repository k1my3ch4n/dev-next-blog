import type { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { ContactCard, MailIcon } from "@repo/components";

interface ContactCardStoryProps {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}

const ContactCardStory = (props: ContactCardStoryProps) => <ContactCard {...props} />;

const meta = {
  title: "Components/Composite/ContactCard",
  component: ContactCardStory,
  tags: ["autodocs", "dark-test"],
  args: {
    icon: <MailIcon size={20} />,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  argTypes: { icon: { control: false } },
} satisfies Meta<typeof ContactCardStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Email: Story = {
  play: async ({ canvasElement }) => {
    const link = within(canvasElement).getByRole("link");
    await expect(link).toHaveAttribute("href", "mailto:hello@example.com");
    await expect(link).not.toHaveAttribute("target");
  },
};
export const LongValue: Story = {
  args: { value: "very-long-contact-address@example-domain.com" },
};
