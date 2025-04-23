import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { SAMPLE_AVATARNETWORK_URIS } from '../AvatarNetwork/AvatarNetwork.constants';
import BadgeNetwork from './BadgeNetwork';
import type { BadgeNetworkProps } from './BadgeNetwork.types';

const meta: Meta<BadgeNetworkProps> = {
  title: 'Components/BadgeNetwork',
  component: BadgeNetwork,
  argTypes: {
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<BadgeNetworkProps>;

export const Default: Story = {
  args: {
    twClassName: '',
  },
  render: (args) => (
    <BadgeNetwork {...args} src={SAMPLE_AVATARNETWORK_URIS[0]} />
  ),
};

export const SampleNetworks: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {SAMPLE_AVATARNETWORK_URIS.map((networkSrc, index) => (
        <BadgeNetwork src={networkSrc} key={`badgenetwork-${index}`} />
      ))}
    </View>
  ),
};
