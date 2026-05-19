import { FaviconAvatarSize } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { BadgeStatusStatus } from '@metamask/design-system-shared';

import { SAMPLE_AVATARNETWORK_URIS } from '../NetworkAvatar/NetworkAvatar.dev';

import { FaviconAvatar } from './FaviconAvatar';
import { SAMPLE_AVATARFAVICON_URIS } from './FaviconAvatar.dev';
import type { FaviconAvatarProps } from './FaviconAvatar.types';

const meta: Meta<FaviconAvatarProps> = {
  title: 'Components/FaviconAvatar',
  component: FaviconAvatar,
  argTypes: {
    size: {
      control: 'select',
      options: FaviconAvatarSize,
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<FaviconAvatarProps>;

export const Default: Story = {
  args: {
    size: FaviconAvatarSize.Md,
    twClassName: '',
  },
  render: (args) => (
    <FaviconAvatar {...args} src={SAMPLE_AVATARFAVICON_URIS[0]} />
  ),
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(FaviconAvatarSize).map((sizeKey) => (
        <FaviconAvatar
          src={SAMPLE_AVATARFAVICON_URIS[0]}
          key={sizeKey}
          size={FaviconAvatarSize[sizeKey as keyof typeof FaviconAvatarSize]}
        />
      ))}
    </View>
  ),
};

export const SampleFavicons: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {SAMPLE_AVATARFAVICON_URIS.map((faviconSrc, index) => (
        <FaviconAvatar src={faviconSrc} key={`favicon-${index}`} />
      ))}
    </View>
  ),
};

export const WithNetworkBadge: Story = {
  render: () => (
    <FaviconAvatar
      src={SAMPLE_AVATARFAVICON_URIS[0]}
      networkBadge={{ src: SAMPLE_AVATARNETWORK_URIS[3], name: 'Ethereum' }}
    />
  ),
};

export const WithStatusBadge: Story = {
  render: () => (
    <FaviconAvatar
      src={SAMPLE_AVATARFAVICON_URIS[0]}
      statusBadge={{ status: BadgeStatusStatus.Active }}
    />
  ),
};
