import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { NetworkAvatarSize } from '../../types';

import { NetworkAvatar } from './NetworkAvatar';
import { SAMPLE_AVATARNETWORK_URIS } from './NetworkAvatar.dev';
import type { NetworkAvatarProps } from './NetworkAvatar.types';

const meta: Meta<NetworkAvatarProps> = {
  title: 'Components/NetworkAvatar',
  component: NetworkAvatar,
  argTypes: {
    size: {
      control: 'select',
      options: NetworkAvatarSize,
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<NetworkAvatarProps>;

export const Default: Story = {
  args: {
    size: NetworkAvatarSize.Md,
    twClassName: '',
  },
  render: (args) => (
    <NetworkAvatar {...args} src={SAMPLE_AVATARNETWORK_URIS[0]} />
  ),
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(NetworkAvatarSize).map((sizeKey) => (
        <NetworkAvatar
          src={SAMPLE_AVATARNETWORK_URIS[0]}
          key={sizeKey}
          size={NetworkAvatarSize[sizeKey as keyof typeof NetworkAvatarSize]}
        />
      ))}
    </View>
  ),
};

export const SampleNetworks: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {SAMPLE_AVATARNETWORK_URIS.map((networkSrc, index) => (
        <NetworkAvatar src={networkSrc} key={`network-${index}`} />
      ))}
    </View>
  ),
};
