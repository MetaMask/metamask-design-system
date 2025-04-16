import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { AvatarIconSize, AvatarIconSeverity } from '../../types';
import AvatarIcon from './AvatarIcon';
import type { AvatarIconProps } from './AvatarIcon.types';
import { IconName } from '../Icon';

const meta: Meta<AvatarIconProps> = {
  title: 'Components/AvatarIcon',
  component: AvatarIcon,
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

type Story = StoryObj<AvatarIconProps>;

export const Default: Story = {
  args: {
    size: AvatarIconSize.Md,
    severity: AvatarIconSeverity.Default,
    iconName: IconName.Arrow2UpRight,
    twClassName: '',
  },
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarIconSize).map((sizeKey) => (
        <AvatarIcon
          key={sizeKey}
          size={AvatarIconSize[sizeKey as keyof typeof AvatarIconSize]}
          iconName={IconName.Arrow2UpRight}
        />
      ))}
    </View>
  ),
};

export const Severities: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarIconSeverity).map((severityKey) => (
        <AvatarIcon
          key={severityKey}
          severity={
            AvatarIconSeverity[severityKey as keyof typeof AvatarIconSeverity]
          }
          iconName={IconName.Arrow2UpRight}
        />
      ))}
    </View>
  ),
};
