import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { IconName } from '@metamask/design-system-shared';

import { SAMPLE_AVATARNETWORK_URIS } from '../NetworkAvatar/NetworkAvatar.dev';

import { NFTAvatar, NFTAvatarSize } from '.';
import { SAMPLE_AVATARNFT_URIS } from './NFTAvatar.dev';
import type { NFTAvatarProps } from './NFTAvatar.types';

const meta: Meta<NFTAvatarProps> = {
  title: 'Components/NFTAvatar',
  component: NFTAvatar,
  argTypes: {
    size: {
      control: 'select',
      options: NFTAvatarSize,
    },
  },
};

export default meta;

type Story = StoryObj<NFTAvatarProps>;

export const Default: Story = {
  args: {
    size: NFTAvatarSize.Md,
  },
  render: (args) => <NFTAvatar {...args} src={SAMPLE_AVATARNFT_URIS[0]} />,
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(NFTAvatarSize).map((sizeKey) => (
        <NFTAvatar
          src={SAMPLE_AVATARNFT_URIS[0]}
          key={sizeKey}
          size={NFTAvatarSize[sizeKey as keyof typeof NFTAvatarSize]}
        />
      ))}
    </View>
  ),
};

export const FallbackInitials: Story = {
  render: () => <NFTAvatar name="Bored Ape" />,
};

export const WithNetworkBadge: Story = {
  render: () => (
    <NFTAvatar
      src={SAMPLE_AVATARNFT_URIS[0]}
      name="Bored Ape"
      networkBadge={{ src: SAMPLE_AVATARNETWORK_URIS[3], name: 'Ethereum' }}
    />
  ),
};

export const WithIconBadge: Story = {
  render: () => (
    <NFTAvatar
      src={SAMPLE_AVATARNFT_URIS[0]}
      name="Bored Ape"
      iconBadge={{ iconName: IconName.Security }}
    />
  ),
};
