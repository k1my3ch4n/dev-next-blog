import { Meta, StoryObj } from '@storybook/react';
import HomeButton from './HomeButton';

const meta: Meta<typeof HomeButton> = {
  title: 'Typography/HomeButton',
  component: HomeButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '홈 버튼을 나타낼 때 사용됩니다.',
      },
    },
  },
  render: ({ onClick }) => <HomeButton onClick={onClick} />,
};

export default meta;

type Story = StoryObj<typeof HomeButton>;

export const Default: Story = {
  args: {
    onClick: () => {
      alert('스토리북 클릭 테스트');
    },
  },
};
