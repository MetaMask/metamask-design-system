import type { Meta, StoryObj } from '@storybook/react-native';
import { ImageSourcePropType, View } from 'react-native';

import AvatarNetwork from './AvatarNetwork';
import {
  DEFAULT_AVATARNETWORK_PROPS,
  SAMPLE_AVATARNETWORK_URIS,
} from './AvatarNetwork.constants';
import type { AvatarNetworkProps } from './AvatarNetwork.types';
import { AvatarSize } from '../../shared/enums';

const meta: Meta<AvatarNetworkProps> = {
  title: 'Components/AvatarNetwork',
  component: AvatarNetwork,
  argTypes: {
    size: {
      control: 'select',
      options: AvatarSize,
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
    size: DEFAULT_AVATARNETWORK_PROPS.size,
    twClassName: '',
  },
  render: (args) => <AvatarNetwork {...args} src={storyImageSource} />,
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarSize).map((sizeKey) => (
        <AvatarNetwork
          src={storyImageSource}
          key={sizeKey}
          size={AvatarSize[sizeKey as keyof typeof AvatarSize]}
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
