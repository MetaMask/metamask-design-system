import type { Meta, StoryObj } from '@storybook/react-native';
import { ImageSourcePropType, View } from 'react-native';

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
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<AvatarTokenProps>;
const storyImageSource: ImageSourcePropType = {
  uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
};

export const Default: Story = {
  args: {
    size: DEFAULT_AVATARTOKEN_PROPS.size,
    twClassName: '',
  },
  render: (args) => <AvatarToken {...args} src={storyImageSource} />,
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
