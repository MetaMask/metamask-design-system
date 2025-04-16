import type { Meta, StoryObj } from '@storybook/react-native';
import { ImageSourcePropType, View } from 'react-native';

import { AvatarNetworkSize } from '../../types';
import AvatarNetwork from './AvatarNetwork';
import { SAMPLE_AVATARNETWORK_URIS } from './AvatarNetwork.constants';
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
const storyImageSource: ImageSourcePropType = {
  uri: SAMPLE_AVATARNETWORK_URIS[0],
};

export const Default: Story = {
  args: {
    size: AvatarNetworkSize.Md,
    twClassName: '',
  },
  render: (args) => <AvatarNetwork {...args} src={storyImageSource} />,
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarNetworkSize).map((sizeKey) => (
        <AvatarNetwork
          src={storyImageSource}
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
      {SAMPLE_AVATARNETWORK_URIS.map((networkUri) => (
        <AvatarNetwork
          src={{
            uri: networkUri,
          }}
          key={networkUri}
        />
      ))}
    </View>
  ),
};
