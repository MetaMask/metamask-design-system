import {
  AccountAvatarSize,
  AccountAvatarVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { SAMPLE_AVATARNETWORK_URIS } from '../NetworkAvatar/NetworkAvatar.dev';

import { AccountAvatar } from './AccountAvatar';
import { SAMPLE_AVATARACCOUNT_ADDRESSES } from './AccountAvatar.constants';
import type { AccountAvatarProps } from './AccountAvatar.types';

const meta: Meta<AccountAvatarProps> = {
  title: 'Components/AccountAvatar',
  component: AccountAvatar,
  argTypes: {
    size: {
      control: 'select',
      options: AccountAvatarSize,
    },
    variant: {
      control: 'select',
      options: AccountAvatarVariant,
    },
  },
};

export default meta;

type Story = StoryObj<AccountAvatarProps>;

export const Default: Story = {
  args: {
    size: AccountAvatarSize.Md,
    variant: AccountAvatarVariant.Jazzicon,
    twClassName: '',
  },
  render: (args) => (
    <AccountAvatar {...args} address={SAMPLE_AVATARACCOUNT_ADDRESSES[0]} />
  ),
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AccountAvatarSize).map((sizeKey) => (
        <View key={sizeKey} style={{ flexDirection: 'row', gap: 8 }}>
          <AccountAvatar
            size={AccountAvatarSize[sizeKey as keyof typeof AccountAvatarSize]}
            variant={AccountAvatarVariant.Blockies}
            address={SAMPLE_AVATARACCOUNT_ADDRESSES[0]}
          />
          <AccountAvatar
            size={AccountAvatarSize[sizeKey as keyof typeof AccountAvatarSize]}
            variant={AccountAvatarVariant.Jazzicon}
            address={SAMPLE_AVATARACCOUNT_ADDRESSES[0]}
          />
          <AccountAvatar
            size={AccountAvatarSize[sizeKey as keyof typeof AccountAvatarSize]}
            variant={AccountAvatarVariant.Polyicon}
            address={SAMPLE_AVATARACCOUNT_ADDRESSES[0]}
          />
        </View>
      ))}
    </View>
  ),
};

export const Variants: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AccountAvatarVariant).map((variantKey) => (
        <AccountAvatar
          key={variantKey}
          variant={
            AccountAvatarVariant[
              variantKey as keyof typeof AccountAvatarVariant
            ]
          }
          address={SAMPLE_AVATARACCOUNT_ADDRESSES[0]}
        />
      ))}
    </View>
  ),
};

export const SampleAddresses: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {SAMPLE_AVATARACCOUNT_ADDRESSES.map((address) => (
        <View key={address} style={{ flexDirection: 'row', gap: 8 }}>
          <AccountAvatar
            variant={AccountAvatarVariant.Blockies}
            address={address}
          />
          <AccountAvatar
            variant={AccountAvatarVariant.Jazzicon}
            address={address}
          />
          <AccountAvatar
            variant={AccountAvatarVariant.Polyicon}
            address={address}
          />
        </View>
      ))}
    </View>
  ),
};

export const WithNetworkBadge: Story = {
  render: () => (
    <AccountAvatar
      address={SAMPLE_AVATARACCOUNT_ADDRESSES[0]}
      networkBadge={{ src: SAMPLE_AVATARNETWORK_URIS[3], name: 'Ethereum' }}
    />
  ),
};
