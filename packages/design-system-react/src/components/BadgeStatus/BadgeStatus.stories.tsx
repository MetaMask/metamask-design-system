import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { BadgeStatusSize, BadgeStatusStatus } from '../../types';
import { BadgeStatus } from './BadgeStatus';
import type { BadgeStatusProps } from './BadgeStatus.types';
import README from './README.mdx';

const meta: Meta<BadgeStatusProps> = {
  title: 'React Components/BadgeStatus',
  component: BadgeStatus,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: Object.keys(BadgeStatusSize),
      mapping: BadgeStatusSize,
      description: 'Optional prop to control the size of the BadgeStatus',
    },
    status: {
      control: 'select',
      options: Object.keys(BadgeStatusStatus),
      mapping: BadgeStatusStatus,
      description: 'Optional prop to control the status of the badge',
    },
    hasBorder: {
      control: 'boolean',
      description:
        'Optional prop to determine whether the badge should display a border',
    },
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the BadgeStatus component',
    },
  },
};
// status, hasBorder, size

export default meta;

type Story = StoryObj<BadgeStatusProps>;

export const Default: Story = {
  args: {
    status: BadgeStatusStatus.Active,
  },
  render: (args) => (
    <div className="flex items-center gap-2 bg-warning-muted p-1">
      <BadgeStatus {...args} />
    </div>
  ),
};

export const Status: Story = {
  render: () => (
    <div className="flex items-center gap-2 bg-warning-muted p-1">
      {Object.keys(BadgeStatusStatus).map((statusKey) => (
        <BadgeStatus
          key={statusKey}
          status={
            BadgeStatusStatus[statusKey as keyof typeof BadgeStatusStatus]
          }
        />
      ))}
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="flex items-center gap-2 bg-warning-muted p-1">
      {Object.keys(BadgeStatusSize).map((sizeKey) => (
        <BadgeStatus
          key={sizeKey}
          size={BadgeStatusSize[sizeKey as keyof typeof BadgeStatusSize]}
          status={BadgeStatusStatus.Active}
        />
      ))}
    </div>
  ),
};

export const HasBorder: Story = {
  render: () => (
    <div className="flex items-center gap-2 bg-warning-muted p-1">
      {Object.keys(BadgeStatusStatus).map((statusKey) => (
        <div key={statusKey} className="flex items-center gap-1">
          <BadgeStatus
            status={
              BadgeStatusStatus[statusKey as keyof typeof BadgeStatusStatus]
            }
            hasBorder={false}
          />
          <BadgeStatus
            status={
              BadgeStatusStatus[statusKey as keyof typeof BadgeStatusStatus]
            }
          />
        </div>
      ))}
    </div>
  ),
};
