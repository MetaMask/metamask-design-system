import type { Meta, StoryObj } from '@storybook/react-native';
import { ImageSourcePropType, View } from 'react-native';

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
const storyImageSource: ImageSourcePropType = {
  uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
};

export const Default: Story = {
  args: {
    twClassName: '',
  },
  render: (args) => <BadgeNetwork {...args} src={storyImageSource} />,
};
