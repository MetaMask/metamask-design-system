import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FontWeight, TextColor } from '../text';
import { BadgeCount } from './BadgeCount';
import { BadgeCountSize } from './BadgeCount.types';
import type { BadgeCountProps } from './BadgeCount.types';
import README from './README.mdx';

const meta: Meta<typeof BadgeCount> = {
  title: 'React Components/BadgeCount',
  component: BadgeCount,
  parameters: {
    docs: {
      page: README,
    },
  },
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
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the BadgeCount component',
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
  },
};

export const Size: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      {Object.values(BadgeCountSize).map((size) => (
        <BadgeCount key={size} size={size} count={100} />
      ))}
    </div>
  ),
};

export const Max: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <BadgeCount count={10} />
      <BadgeCount count={100} />
    </div>
  ),
};
