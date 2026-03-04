import { BadgeCountSize } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';

import { Box, BoxFlexDirection } from '../Box';

import { BadgeCount } from './BadgeCount';
import type { BadgeCountProps } from './BadgeCount.types';

const meta: Meta<BadgeCountProps> = {
  title: 'Components/BadgeCount',
  component: BadgeCount,
  argTypes: {
    size: {
      control: 'select',
      options: Object.keys(BadgeCountSize),
      mapping: BadgeCountSize,
      description: 'Optional prop to control the size of the BadgeCount',
    },
    count: {
      control: 'number',
      description: 'Required prop to show the count number',
    },
    max: {
      control: 'number',
      description:
        'Optional prop to determine the max the count can go up to. If count > max, the count will be shown as "max+"',
    },
    textProps: {
      control: 'object',
      description:
        'Optional props to be passed to the Text component used by count',
    },
    twClassName: {
      control: 'text',
      description: 'Optional prop to add twrnc overriding classNames',
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

export const Size: Story = {
  render: () => (
    <Box flexDirection={BoxFlexDirection.Row} gap={2}>
      <BadgeCount size={BadgeCountSize.Md} count={100} />
      <BadgeCount size={BadgeCountSize.Lg} count={100} />
    </Box>
  ),
};

export const Max: Story = {
  render: () => (
    <Box flexDirection={BoxFlexDirection.Row} gap={2}>
      <BadgeCount count={10} />
      <BadgeCount count={100} />
    </Box>
  ),
};
