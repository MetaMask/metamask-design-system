import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import AvatarIcon from './AvatarIcon';
import { DEFAULT_AVATARICON_PROPS } from './AvatarIcon.constants';
import type { AvatarIconProps } from './AvatarIcon.types';
import { AvatarSize } from '../../shared/enums';
import { IconName } from '../Icon';
import { AvatarIconSeverity } from './AvatarIcon.types';

const meta: Meta<AvatarIconProps> = {
  title: 'Components/AvatarIcon',
  component: AvatarIcon,
  argTypes: {
    size: {
      control: 'select',
      options: AvatarSize,
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
    size: DEFAULT_AVATARICON_PROPS.size,
    severity: DEFAULT_AVATARICON_PROPS.severity,
    iconName: IconName.Arrow2UpRight,
    twClassName: '',
  },
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarSize).map((sizeKey) => (
        <AvatarIcon
          key={sizeKey}
          size={AvatarSize[sizeKey as keyof typeof AvatarSize]}
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
