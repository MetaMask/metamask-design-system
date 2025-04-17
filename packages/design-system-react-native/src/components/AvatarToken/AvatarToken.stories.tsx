import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { AvatarTokenSize } from '../../types';
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

export const Default: Story = {
  args: {
    size: AvatarTokenSize.Md,
    twClassName: '',
  },
  render: (args) => <AvatarToken {...args} src={SAMPLE_AVATARTOKEN_URIS[0]} />,
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarTokenSize).map((sizeKey) => (
        <AvatarToken
          src={SAMPLE_AVATARTOKEN_URIS[0]}
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
      {SAMPLE_AVATARTOKEN_URIS.map((tokenSrc, index) => (
        <AvatarToken src={tokenSrc} key={`token-${index}`} />
      ))}
    </View>
  ),
};
