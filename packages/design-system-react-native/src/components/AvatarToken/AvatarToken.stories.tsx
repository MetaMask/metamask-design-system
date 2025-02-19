import type { Meta, StoryObj } from '@storybook/react-native';
import { Image, ImageSourcePropType, View } from 'react-native';

import AvatarToken from './AvatarToken';
import { DEFAULT_AVATARTOKEN_PROPS } from './AvatarToken.constants';
import type { AvatarTokenProps } from './AvatarToken.types';
import { AvatarSize } from '../../shared/enums';

const meta: Meta<AvatarTokenProps> = {
  title: 'Components/AvatarToken',
  component: AvatarToken,
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

type Story = StoryObj<AvatarTokenProps>;
const storyImageSource: ImageSourcePropType = {
  uri: 'https://metamask.github.io/test-dapp/metamask-fox.svg',
};

export const Default: Story = {
  args: {
    size: DEFAULT_AVATARTOKEN_PROPS.size,
    src: storyImageSource,
    fallbackText: '',
    twClassName: '',
  },
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarSize).map((sizeKey) => (
        <AvatarToken
          src={storyImageSource}
          key={sizeKey}
          size={AvatarSize[sizeKey as keyof typeof AvatarSize]}
        />
      ))}
    </View>
  ),
};
