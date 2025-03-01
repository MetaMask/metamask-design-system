import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { AvatarGroupSize } from '../../shared/enums';
import { AvatarFaviconProps } from '../AvatarFavicon';
import { AvatarIconProps, AvatarIconSeverity } from '../AvatarIcon';
import { IconName } from '../Icon';
import AvatarGroup from './AvatarGroup';
import { DEFAULT_AVATARGROUP_PROPS } from './AvatarGroup.constants';
import type { AvatarGroupProps } from './AvatarGroup.types';
import { AvatarGroupVariant } from './AvatarGroup.types';

const meta: Meta<AvatarGroupProps> = {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    variant: {
      control: 'select',
      options: AvatarGroupVariant,
    },
    size: {
      control: 'select',
      options: AvatarGroupSize,
    },
    max: {
      control: 'number',
    },
    isReverse: {
      control: 'boolean',
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<AvatarGroupProps>;
const avatarFaviconPropsArr: AvatarFaviconProps[] = [
  {
    src: {
      uri: 'https://www.coinbase.com/favicon.ico',
    },
  },
  {
    src: {
      uri: 'https://www.myetherwallet.com/favicon.ico',
    },
  },
  {
    src: {
      uri: 'https://electrum.org/favicon.ico',
    },
  },
  {
    src: {
      uri: 'https://www.blockchain.com/static/favicon.ico',
    },
  },
  {
    src: {
      uri: 'https://trezor.io/favicon.ico',
    },
  },
  {
    src: {
      uri: 'https://trezor.io/favicon.ico',
    },
  },
  {
    src: {
      uri: 'https://metamask.github.io/test-dapp/metamask-fox.svg',
    },
  },
];
const avatarIconPropsArr: AvatarIconProps[] = [
  {
    iconName: IconName.Arrow2Left,
    severity: AvatarIconSeverity.Default,
  },
  {
    iconName: IconName.Arrow2Up,
    severity: AvatarIconSeverity.Error,
  },
  {
    iconName: IconName.Arrow2UpRight,
    severity: AvatarIconSeverity.Info,
  },
  {
    iconName: IconName.Arrow2Right,
    severity: AvatarIconSeverity.Success,
  },
  {
    iconName: IconName.Arrow2Down,
    severity: AvatarIconSeverity.Warning,
  },
];

export const Default: Story = {
  args: {
    variant: AvatarGroupVariant.Favicon,
    size: DEFAULT_AVATARGROUP_PROPS.size,
    max: DEFAULT_AVATARGROUP_PROPS.max,
    isReverse: DEFAULT_AVATARGROUP_PROPS.isReverse,
    twClassName: '',
  },
  render: (args) => {
    switch (args.variant) {
      case AvatarGroupVariant.Favicon:
        return <AvatarGroup {...args} avatarPropsArr={avatarFaviconPropsArr} />;
      case AvatarGroupVariant.Icon:
        return <AvatarGroup {...args} avatarPropsArr={avatarIconPropsArr} />;
    }
  },
};
