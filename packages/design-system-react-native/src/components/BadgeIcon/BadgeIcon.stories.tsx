import type { Meta, StoryObj } from '@storybook/react-native';

import BadgeIcon from './BadgeIcon';
import type { BadgeIconProps } from './BadgeIcon.types';
import { IconName } from '../Icon';
import { BadgeIconVariant } from './BadgeIcon.types';

const meta: Meta<BadgeIconProps> = {
  title: 'Components/BadgeIcon',
  component: BadgeIcon,
  argTypes: {
    variant: {
      control: 'select',
      options: BadgeIconVariant,
    },
    iconName: {
      control: 'select',
      options: IconName,
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<BadgeIconProps>;

export const Default: Story = {
  args: {
    // Default to Custom so that the iconName knob is relevant initially.
    variant: BadgeIconVariant.Custom,
    iconName: IconName.Add,
    twClassName: '',
  },
  render: (args) => {
    // Destructure props from args
    const { variant, ...rest } = args;

    return variant === BadgeIconVariant.Custom ? (
      <BadgeIcon variant={variant} iconName={args.iconName} {...rest} />
    ) : (
      <BadgeIcon variant={variant} {...rest} />
    );
  },
};

export const CustomVariant: Story = {
  args: {
    variant: BadgeIconVariant.Custom,
    iconName: IconName.Add,
    twClassName: '',
  },
};

export const NonCustomVariant: Story = {
  args: {
    variant: BadgeIconVariant.Snaps,
    twClassName: '',
  },
};
