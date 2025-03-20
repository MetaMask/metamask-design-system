import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import AvatarNetwork, { AvatarNetworkSize } from '../AvatarNetwork';
import AvatarAccount, { AvatarAccountSize } from '../AvatarAccount';
import BadgeWrapper from './BadgeWrapper';
import type { BadgeWrapperProps } from './BadgeWrapper.types';
import {
  BadgeWrapperPositionAnchorShape,
  BadgeWrapperPosition,
} from './BadgeWrapper.types';

const meta: Meta<BadgeWrapperProps> = {
  title: 'Components/BadgeWrapper',
  component: BadgeWrapper,
  argTypes: {
    position: {
      control: 'select',
      options: BadgeWrapperPosition,
    },
    positionAnchorShape: {
      control: 'select',
      options: BadgeWrapperPositionAnchorShape,
    },
    positionXOffset: {
      control: 'number',
    },
    positionYOffset: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<BadgeWrapperProps>;

export const Default: Story = {
  args: {
    position: BadgeWrapperPosition.BottomRight,
    positionAnchorShape: BadgeWrapperPositionAnchorShape.Circular,
    positionXOffset: 0,
    positionYOffset: 0,
  },
  render: (args) => (
    <BadgeWrapper
      {...args}
      badge={
        <AvatarNetwork
          name="ETH"
          src={{ uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg' }}
          hasBorder
          hasSolidBackgroundColor
          size={AvatarNetworkSize.Xs}
        />
      }
    >
      <AvatarAccount
        address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
        size={AvatarAccountSize.Md}
      />
    </BadgeWrapper>
  ),
};

export const Position: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <BadgeWrapper
        badge={
          <AvatarNetwork
            name="ETH"
            src={{ uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg' }}
            hasBorder
            hasSolidBackgroundColor
            size={AvatarNetworkSize.Xs}
          />
        }
      >
        <AvatarAccount
          address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
          size={AvatarAccountSize.Md}
        />
      </BadgeWrapper>
    </View>
  ),
};
