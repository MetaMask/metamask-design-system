import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { TokenAvatarSize } from '@metamask/design-system-shared';

import { IconName } from '@metamask/design-system-shared';

import { SAMPLE_AVATARNETWORK_URIS } from '../NetworkAvatar/NetworkAvatar.dev';

import { TokenAvatar } from './TokenAvatar';
import type { TokenAvatarProps } from './TokenAvatar.types';
import { SAMPLE_AVATARTOKEN_URIS } from './TokenAvatar.dev';

const meta: Meta<TokenAvatarProps> = {
  title: 'Components/TokenAvatar',
  component: TokenAvatar,
  argTypes: {
    size: {
      control: 'select',
      options: TokenAvatarSize,
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<TokenAvatarProps>;

export const Default: Story = {
  args: {
    size: TokenAvatarSize.Md,
    twClassName: '',
  },
  render: (args) => <TokenAvatar {...args} src={SAMPLE_AVATARTOKEN_URIS[0]} />,
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(TokenAvatarSize).map((sizeKey) => (
        <TokenAvatar
          src={SAMPLE_AVATARTOKEN_URIS[0]}
          key={sizeKey}
          size={TokenAvatarSize[sizeKey as keyof typeof TokenAvatarSize]}
        />
      ))}
    </View>
  ),
};

export const SampleTokens: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {SAMPLE_AVATARTOKEN_URIS.map((tokenSrc, index) => (
        <TokenAvatar src={tokenSrc} key={`token-${index}`} />
      ))}
    </View>
  ),
};

export const WithNetworkBadge: Story = {
  render: () => (
    <TokenAvatar
      src={SAMPLE_AVATARTOKEN_URIS[0]}
      name="USD Coin"
      networkBadge={{ src: SAMPLE_AVATARNETWORK_URIS[3], name: 'Ethereum' }}
    />
  ),
};

export const WithIconBadge: Story = {
  render: () => (
    <TokenAvatar
      src={SAMPLE_AVATARTOKEN_URIS[0]}
      name="USD Coin"
      iconBadge={{ iconName: IconName.Security }}
    />
  ),
};
