import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import {
  BadgeWrapperPosition,
  BadgeWrapperPositionAnchorShape,
} from '../../types';
import { IconName } from '../Icon';
import BadgeCount from '../BadgeCount';
import BadgeIcon from '../BadgeIcon';
import BadgeNetwork from '../BadgeNetwork';
import BadgeStatus, { BadgeStatusStatus } from '../BadgeStatus';
import AvatarNetwork from '../AvatarNetwork';
import AvatarAccount, { AvatarAccountSize } from '../AvatarAccount';
import BadgeWrapper from './BadgeWrapper';
import type { BadgeWrapperProps } from './BadgeWrapper.types';

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
    <View style={{ padding: 12 }}>
      <BadgeWrapper
        {...args}
        badge={
          <BadgeNetwork
            name="ETH"
            src={{ uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg' }}
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

export const Position: Story = {
  render: () => (
    <View style={{ gap: 20, padding: 12 }}>
      {Object.keys(BadgeWrapperPosition).map((positionKey) => (
        <View key={positionKey} style={{ gap: 12, flexDirection: 'row' }}>
          <BadgeWrapper
            position={
              BadgeWrapperPosition[
                positionKey as keyof typeof BadgeWrapperPosition
              ]
            }
            badge={
              <BadgeNetwork
                name="ETH"
                src={{
                  uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
                }}
              />
            }
          >
            <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
          </BadgeWrapper>
          <BadgeWrapper
            position={
              BadgeWrapperPosition[
                positionKey as keyof typeof BadgeWrapperPosition
              ]
            }
            badge={
              <BadgeNetwork
                name="ETH"
                src={{
                  uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
                }}
              />
            }
          >
            <AvatarNetwork
              name="ETH"
              src={{
                uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
              }}
            />
          </BadgeWrapper>
        </View>
      ))}
    </View>
  ),
};

export const PositionAnchorShape: Story = {
  render: () => (
    <View style={{ gap: 20, padding: 12 }}>
      <View style={{ gap: 12, flexDirection: 'row' }}>
        <BadgeWrapper
          badge={
            <BadgeNetwork
              name="ETH"
              src={{
                uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
              }}
            />
          }
        >
          <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
        </BadgeWrapper>
        <BadgeWrapper
          badge={
            <BadgeNetwork
              name="ETH"
              src={{
                uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
              }}
            />
          }
        >
          <AvatarNetwork
            name="ETH"
            src={{
              uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
            }}
          />
        </BadgeWrapper>
      </View>
    </View>
  ),
};

export const PositionXOffset: Story = {
  render: () => (
    <View style={{ padding: 12, gap: 20 }}>
      <BadgeWrapper
        badge={
          <BadgeNetwork
            name="ETH"
            src={{
              uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
            }}
          />
        }
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
      <BadgeWrapper
        badge={
          <BadgeNetwork
            name="ETH"
            src={{
              uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
            }}
          />
        }
        positionXOffset={5}
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
    </View>
  ),
};

export const PositionYOffset: Story = {
  render: () => (
    <View style={{ padding: 12, gap: 20, flexDirection: 'row' }}>
      <BadgeWrapper
        badge={
          <BadgeNetwork
            name="ETH"
            src={{
              uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
            }}
          />
        }
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
      <BadgeWrapper
        badge={
          <BadgeNetwork
            name="ETH"
            src={{
              uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
            }}
          />
        }
        positionYOffset={5}
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
    </View>
  ),
};

export const CustomPosition: Story = {
  render: () => (
    <View style={{ padding: 12, gap: 20, flexDirection: 'row' }}>
      <BadgeWrapper
        badge={
          <BadgeNetwork
            name="ETH"
            src={{
              uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
            }}
          />
        }
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
      <BadgeWrapper
        badge={
          <BadgeNetwork
            name="ETH"
            src={{
              uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
            }}
          />
        }
        customPosition={{
          top: 5,
          right: 10,
        }}
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
    </View>
  ),
};

export const Badge: Story = {
  render: () => (
    <View style={{ padding: 12, gap: 20 }}>
      <BadgeWrapper
        position={BadgeWrapperPosition.TopRight}
        badge={<BadgeCount count={8} />}
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
      <BadgeWrapper
        position={BadgeWrapperPosition.BottomRight}
        badge={<BadgeIcon iconName={IconName.Snaps} />}
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
      <BadgeWrapper
        position={BadgeWrapperPosition.BottomRight}
        badge={
          <BadgeNetwork
            name="ETH"
            src={{
              uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
            }}
          />
        }
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
      <BadgeWrapper
        position={BadgeWrapperPosition.BottomRight}
        badge={<BadgeStatus status={BadgeStatusStatus.Active} />}
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>

      <BadgeWrapper
        position={BadgeWrapperPosition.TopRight}
        badge={
          <BadgeStatus status={BadgeStatusStatus.Attention} hasBorder={false} />
        }
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
    </View>
  ),
};
