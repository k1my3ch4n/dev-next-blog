import { Meta, StoryObj } from '@storybook/react';
import Title from './Title';
import Text from '../Text';

const meta: Meta<typeof Title> = {
  title: 'Typography/Title',
  component: Title,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '제목을 표현할 때 사용됩니다.',
      },
    },
  },
  render: ({ title }) => (
    <>
      <Title title={title} />
      <Text>{title}</Text>
    </>
  ),
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    title: 'Title Example 예시',
  },
};
