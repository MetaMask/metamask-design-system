import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { PredictionsAvatar, PredictionsAvatarSize } from '.';
import { SAMPLE_AVATARPREDICTIONS_URIS } from './PredictionsAvatar.dev';
import type { PredictionsAvatarProps } from './PredictionsAvatar.types';

const meta: Meta<PredictionsAvatarProps> = {
  title: 'Components/PredictionsAvatar',
  component: PredictionsAvatar,
  argTypes: {
    size: {
      control: 'select',
      options: PredictionsAvatarSize,
    },
  },
};

export default meta;

type Story = StoryObj<PredictionsAvatarProps>;

export const Default: Story = {
  args: {
    size: PredictionsAvatarSize.Md,
  },
  render: (args) => (
    <PredictionsAvatar {...args} src={SAMPLE_AVATARPREDICTIONS_URIS[0]} />
  ),
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(PredictionsAvatarSize).map((sizeKey) => (
        <PredictionsAvatar
          src={SAMPLE_AVATARPREDICTIONS_URIS[0]}
          key={sizeKey}
          size={
            PredictionsAvatarSize[sizeKey as keyof typeof PredictionsAvatarSize]
          }
        />
      ))}
    </View>
  ),
};

export const FallbackInitials: Story = {
  render: () => <PredictionsAvatar name="Polymarket" />,
};
