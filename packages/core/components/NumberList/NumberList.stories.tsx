import { Meta, StoryObj } from '@storybook/react';
import NumberList from './NumberList';
import Text from '../Text';

const meta: Meta<typeof NumberList> = {
  title: 'Typography/NumberList',
  component: NumberList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '순서가 있는 리스트를 표현할 때 사용됩니다.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof NumberList>;

export const MultiNumberList: Story = {
  render: () => (
    <NumberList>
      <Text>multi 1</Text>
      <Text>multi 2</Text>
      <Text>multi 3</Text>
    </NumberList>
  ),
};
