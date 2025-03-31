import type { Meta, StoryObj } from '@storybook/react-native';
import { ImageSourcePropType, View } from 'react-native';

import { AvatarTokenSize } from '../../shared/enums';
import AvatarToken from './AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from './AvatarToken.constants';
import type { AvatarTokenProps } from './AvatarToken.types';

const meta: Meta<AvatarTokenProps> = {
  title: 'Components/AvatarToken',
  component: AvatarToken,
  argTypes: {
    size: {
      control: 'select',
      options: AvatarTokenSize,
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<AvatarTokenProps>;
const storyImageSource: ImageSourcePropType = {
  uri: SAMPLE_AVATARTOKEN_URIS[0],
};

export const Default: Story = {
  args: {
    size: AvatarTokenSize.Md,
    twClassName: '',
  },
  render: (args) => <AvatarToken {...args} src={storyImageSource} />,
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarTokenSize).map((sizeKey) => (
        <AvatarToken
          src={storyImageSource}
          key={sizeKey}
          size={AvatarTokenSize[sizeKey as keyof typeof AvatarTokenSize]}
        />
      ))}
    </View>
  ),
};

export const SampleTokens: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {SAMPLE_AVATARTOKEN_URIS.map((tokenUri) => (
        <AvatarToken
          src={{
            uri: tokenUri,
          }}
          key={tokenUri}
        />
      ))}
    </View>
  ),
};
