import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { IconName } from '../Icon';
import { BadgeIcon } from './BadgeIcon';
import type { BadgeIconProps } from './BadgeIcon.types';
import README from './README.mdx';

const meta: Meta<typeof BadgeIcon> = {
  title: 'React Components/BadgeIcon',
  component: BadgeIcon,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    iconName: {
      control: 'select',
      options: Object.keys(IconName),
      mapping: IconName,
      description: 'Required prop to specify an icon to show',
    },
    iconProps: {
      control: 'object',
      description: 'Optional prop to pass additional properties to the icon',
    },
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the BadgeIcon component',
    },
  },
};

export default meta;
type Story = StoryObj<BadgeIconProps>;

export const Default: Story = {
  args: {
    iconName: IconName.Add,
    className: '',
  },
};

export const IconNameStory: Story = {
  render: () => (
    <div className="flex gap-2">
      <BadgeIcon iconName={IconName.Arrow2UpRight} />
      <BadgeIcon iconName={IconName.User} />
      <BadgeIcon iconName={IconName.Setting} />
      <BadgeIcon iconName={IconName.Search} />
    </div>
  ),
  name: 'IconName',
};
