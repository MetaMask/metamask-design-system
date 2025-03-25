import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { AvatarIcon } from './AvatarIcon';
import { AvatarIconSize, AvatarIconSeverity } from '.';
import { IconName } from '../icon';
import README from './README.mdx';

const meta: Meta<typeof AvatarIcon> = {
  title: 'React Components/AvatarIcon',
  component: AvatarIcon,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    iconName: {
      control: 'select',
      options: Object.values(IconName),
      description: 'Required icon name from the icon set',
    },
    iconProps: {
      control: 'object',
      description:
        'Optional props to be passed to the Icon component. The size prop will be automatically mapped from AvatarIconSize.',
    },
    size: {
      control: 'select',
      options: Object.keys(AvatarIconSize),
      mapping: AvatarIconSize,
      description:
        'Optional prop to control the size of the avatar. Defaults to AvatarIconSize.Md',
    },
    severity: {
      control: 'select',
      options: Object.keys(AvatarIconSeverity),
      mapping: AvatarIconSeverity,
      description:
        'Optional prop to control the severity of the avatar. Defaults to AvatarIconSeverity.Default',
    },
    className: {
      control: 'text',
      description:
        'Optional additional CSS classes to be applied to the component',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarIcon>;

export const Default: Story = {
  args: {
    iconName: IconName.Arrow2UpRight,
  },
};

export const IconNameStory: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarIcon iconName={IconName.Arrow2UpRight} />
      <AvatarIcon iconName={IconName.User} />
      <AvatarIcon iconName={IconName.Setting} />
      <AvatarIcon iconName={IconName.Search} />
    </div>
  ),
  name: 'IconName',
};

export const Size: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <AvatarIcon iconName={IconName.User} size={AvatarIconSize.Xs} />
      <AvatarIcon iconName={IconName.User} size={AvatarIconSize.Sm} />
      <AvatarIcon iconName={IconName.User} size={AvatarIconSize.Md} />
      <AvatarIcon iconName={IconName.User} size={AvatarIconSize.Lg} />
      <AvatarIcon iconName={IconName.User} size={AvatarIconSize.Xl} />
    </div>
  ),
};

export const Severity: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarIcon
        iconName={IconName.User}
        severity={AvatarIconSeverity.Default}
      />
      <AvatarIcon iconName={IconName.Info} severity={AvatarIconSeverity.Info} />
      <AvatarIcon
        iconName={IconName.Check}
        severity={AvatarIconSeverity.Success}
      />
      <AvatarIcon
        iconName={IconName.Warning}
        severity={AvatarIconSeverity.Warning}
      />
      <AvatarIcon
        iconName={IconName.Danger}
        severity={AvatarIconSeverity.Error}
      />
    </div>
  ),
};
