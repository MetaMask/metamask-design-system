import type { Meta, StoryObj } from '@storybook/react-native';
import { Image, ImageSourcePropType, View } from 'react-native';

import AvatarNetwork from './AvatarNetwork';
import { DEFAULT_AVATARNETWORK_PROPS } from './AvatarNetwork.constants';
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
    fallbackText: {
      control: 'text',
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<AvatarNetworkProps>;
const storyImageSource: ImageSourcePropType = {
  uri: 'https://metamask.github.io/test-dapp/metamask-fox.svg',
};

export const Default: Story = {
  args: {
    size: DEFAULT_AVATARNETWORK_PROPS.size,
    src: storyImageSource,
    fallbackText: '',
    twClassName: '',
  },
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
