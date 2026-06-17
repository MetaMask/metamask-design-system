import {
  AvatarIconSeverity,
  AvatarIconSize,
  IconName,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { AlertAvatar } from './AlertAvatar';
import type { AlertAvatarProps } from './AlertAvatar.types';

const meta: Meta<AlertAvatarProps> = {
  title: 'Components/AlertAvatar',
  component: AlertAvatar,
  argTypes: {
    size: {
      control: 'select',
      options: AvatarIconSize,
    },
    severity: {
      control: 'select',
      options: AvatarIconSeverity,
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

type Story = StoryObj<AlertAvatarProps>;

export const Default: Story = {
  args: {
    size: AvatarIconSize.Md,
    severity: AvatarIconSeverity.Neutral,
    twClassName: '',
  },
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarIconSize).map((sizeKey) => (
        <AlertAvatar
          key={sizeKey}
          size={AvatarIconSize[sizeKey as keyof typeof AvatarIconSize]}
        />
      ))}
    </View>
  ),
};

export const Severities: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarIconSeverity).map((severityKey) => (
        <AlertAvatar
          key={severityKey}
          severity={
            AvatarIconSeverity[severityKey as keyof typeof AvatarIconSeverity]
          }
        />
      ))}
    </View>
  ),
};
