import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { SocialAvatar, SocialAvatarSize } from '.';
import { SAMPLE_AVATARSOCIAL_URIS } from './SocialAvatar.dev';
import type { SocialAvatarProps } from './SocialAvatar.types';

const meta: Meta<SocialAvatarProps> = {
  title: 'Components/SocialAvatar',
  component: SocialAvatar,
  argTypes: {
    size: {
      control: 'select',
      options: SocialAvatarSize,
    },
  },
};

export default meta;

type Story = StoryObj<SocialAvatarProps>;

export const Default: Story = {
  args: {
    size: SocialAvatarSize.Md,
  },
  render: (args) => (
    <SocialAvatar {...args} src={SAMPLE_AVATARSOCIAL_URIS[0]} />
  ),
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(SocialAvatarSize).map((sizeKey) => (
        <SocialAvatar
          src={SAMPLE_AVATARSOCIAL_URIS[0]}
          key={sizeKey}
          size={SocialAvatarSize[sizeKey as keyof typeof SocialAvatarSize]}
        />
      ))}
    </View>
  ),
};

export const FallbackInitials: Story = {
  render: () => <SocialAvatar name="Telegram" />,
};
