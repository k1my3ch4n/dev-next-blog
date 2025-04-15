import { Meta, StoryObj } from '@storybook/react';
import List from './List';
import Text from '../Text';

const meta: Meta<typeof List> = {
  title: 'Typography/List',
  component: List,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '순서가 없는 리스트를 표현할 때 사용됩니다.',
      },
    },
  },
  render: ({ spot, children }) => (
    <>
      <List spot={spot}>{children}</List>
      <List spot={spot}>{children}</List>
      <List spot={spot}>{children}</List>
    </>
  ),
};

export default meta;

type Story = StoryObj<typeof List>;

export const SizeLarge: Story = {
  args: {
    spot: 'l',
    children: 'List Large Size',
  },
};

export const SizeMedium: Story = {
  args: {
    spot: 'm',
    children: 'List Medium Size',
  },
};

export const SizeSmall: Story = {
  args: {
    spot: 's',
    children: 'List Small Size',
  },
};

export const MultiList: Story = {
  render: () => (
    <List spot="l">
      <Text>multi 1</Text>
      <List spot="m">
        <Text>multi 2</Text>
        <List spot="s">
          <Text>multi 3</Text>
        </List>
      </List>
    </List>
  ),
};
