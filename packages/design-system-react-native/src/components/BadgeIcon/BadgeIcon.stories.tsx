import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import BadgeIcon from './BadgeIcon';
import type { BadgeIconProps } from './BadgeIcon.types';
import { IconName } from '../Icon';

const meta: Meta<BadgeIconProps> = {
  title: 'Components/BadgeIcon',
  component: BadgeIcon,
  argTypes: {
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
    iconName: IconName.Add,
    twClassName: '',
  },
};
