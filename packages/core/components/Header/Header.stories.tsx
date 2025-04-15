import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import Text from '../Text';

const meta: Meta<typeof Header> = {
  title: 'Typography/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Header 를 표기할 때 사용됩니다.',
      },
    },
  },
  render: ({ size, children }) => (
    <>
      <Header size={size}>{children}</Header>
      <Text>{children}</Text>
    </>
  ),
};

export default meta;

type Story = StoryObj<typeof Header>;

export const SizeLarge: Story = {
  args: {
    children: 'Header Large Size',
    size: 'l',
  },
};

export const SizeMedium: Story = {
  args: {
    children: 'Header Medium Size',
    size: 'm',
  },
};

export const SizeSmall: Story = {
  args: {
    children: 'Header Small Size',
    size: 's',
  },
};
