import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import BadgeCount from './BadgeCount';
import { BadgeCountSize } from './BadgeCount.types';
import type { BadgeCountProps } from './BadgeCount.types';

const meta: Meta<BadgeCountProps> = {
  title: 'Components/BadgeCount',
  component: BadgeCount,
  argTypes: {
    size: {
      control: 'select',
      options: BadgeCountSize,
    },
    count: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<BadgeCountProps>;

export const Default: Story = {
  args: {
    size: BadgeCountSize.Md,
    count: 8,
    max: 99,
    twClassName: '',
  },
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      {Object.values(BadgeCountSize).map((size) => (
        <BadgeCount key={size} size={size} count={100} />
      ))}
    </View>
  ),
};

export const Max: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <BadgeCount count={10} />
      <BadgeCount count={100} />
    </View>
  ),
};
