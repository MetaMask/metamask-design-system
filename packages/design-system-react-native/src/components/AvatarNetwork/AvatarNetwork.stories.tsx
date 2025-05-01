import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { AvatarNetworkSize } from '../../types';
import AvatarNetwork from './AvatarNetwork';
import { SAMPLE_AVATARNETWORK_URIS } from './AvatarNetwork.dev';
import type { AvatarNetworkProps } from './AvatarNetwork.types';

const meta: Meta<AvatarNetworkProps> = {
  title: 'Components/AvatarNetwork',
  component: AvatarNetwork,
  argTypes: {
    size: {
      control: 'select',
      options: AvatarNetworkSize,
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<AvatarNetworkProps>;

export const Default: Story = {
  args: {
    size: AvatarNetworkSize.Md,
    twClassName: '',
  },
  render: (args) => (
    <AvatarNetwork {...args} src={SAMPLE_AVATARNETWORK_URIS[0]} />
  ),
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarNetworkSize).map((sizeKey) => (
        <AvatarNetwork
          src={SAMPLE_AVATARNETWORK_URIS[0]}
          key={sizeKey}
          size={AvatarNetworkSize[sizeKey as keyof typeof AvatarNetworkSize]}
        />
      ))}
    </View>
  ),
};

export const SampleNetworks: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {SAMPLE_AVATARNETWORK_URIS.map((networkSrc, index) => (
        <AvatarNetwork src={networkSrc} key={`network-${index}`} />
      ))}
    </View>
  ),
};
