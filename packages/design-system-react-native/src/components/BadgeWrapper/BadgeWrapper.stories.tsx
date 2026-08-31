import {
  BadgeWrapperPositionAnchorShape,
  BadgeWrapperPosition,
  AvatarTokenSize,
  ButtonIconSize,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { AvatarAccount, AvatarAccountSize } from '../AvatarAccount';
import { AvatarNetwork } from '../AvatarNetwork';
import { SAMPLE_AVATARNETWORK_URIS } from '../AvatarNetwork/AvatarNetwork.dev';
import { AvatarToken } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';
import { BadgeCount } from '../BadgeCount';
import { BadgeNetwork } from '../BadgeNetwork';
import { BadgeStatus, BadgeStatusStatus } from '../BadgeStatus';
import { ButtonIcon } from '../ButtonIcon';
import { IconName } from '../Icon';

import { BadgeWrapper } from './BadgeWrapper';
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
          {/* Position example with circular anchor shape */}
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
          {/* Position example with rectangular anchor shape */}
          <BadgeWrapper
            position={
              BadgeWrapperPosition[
                positionKey as keyof typeof BadgeWrapperPosition
              ]
            }
            positionAnchorShape={BadgeWrapperPositionAnchorShape.Rectangular}
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
        {/* PositionAnchorShape example with circular anchor shape */}
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
        {/* PositionAnchorShape example with rectangular anchor shape */}
        <BadgeWrapper
          badge={
            <BadgeNetwork
              name="ETH"
              src={{
                uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
              }}
            />
          }
          positionAnchorShape={BadgeWrapperPositionAnchorShape.Rectangular}
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
      {/* No offset */}
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
      {/* With Offset */}
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
      {/* No offset */}
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
      {/* With offset */}
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
      {/* No CustomPosition */}
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
      {/* With CustomPosition */}
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
    <View style={{ gap: 20, padding: 12 }}>
      {/* Token examples. */}
      <View style={{ flexDirection: 'row', gap: 16 }}>
        {Object.values(AvatarTokenSize).map((size) => (
          <BadgeWrapper
            key={`token-${size}`}
            position={BadgeWrapperPosition.BottomRight}
            positionAnchorShape={BadgeWrapperPositionAnchorShape.Circular}
            badge={
              <BadgeNetwork name="ETH" src={SAMPLE_AVATARNETWORK_URIS[3]} />
            }
          >
            <AvatarToken size={size} src={SAMPLE_AVATARTOKEN_URIS[1]} />
          </BadgeWrapper>
        ))}
      </View>
      {/* Account examples. */}
      <View style={{ flexDirection: 'row', gap: 16 }}>
        {Object.values(AvatarAccountSize).map((size) => (
          <BadgeWrapper
            key={`account-${size}`}
            position={BadgeWrapperPosition.BottomRight}
            positionAnchorShape={BadgeWrapperPositionAnchorShape.Rectangular}
            badge={
              <BadgeNetwork name="ETH" src={SAMPLE_AVATARNETWORK_URIS[3]} />
            }
          >
            <AvatarAccount
              size={size}
              address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
            />
          </BadgeWrapper>
        ))}
      </View>
      {/* Notification badge examples. */}
      <View style={{ flexDirection: 'row', gap: 16 }}>
        {Object.values(ButtonIconSize).map((size) => (
          <BadgeWrapper
            key={`notification-${size}`}
            position={BadgeWrapperPosition.TopRight}
            positionAnchorShape={BadgeWrapperPositionAnchorShape.Circular}
            badge={<BadgeCount count={8} />}
          >
            <ButtonIcon
              iconName={IconName.Menu}
              size={size}
              accessibilityLabel={`Open menu (${size})`}
            />
          </BadgeWrapper>
        ))}
      </View>
      {/* Status indicator example. */}
      <BadgeWrapper
        position={BadgeWrapperPosition.TopRight}
        positionAnchorShape={BadgeWrapperPositionAnchorShape.Circular}
        badge={<BadgeStatus status={BadgeStatusStatus.New} />}
      >
        <ButtonIcon
          iconName={IconName.Menu}
          size={ButtonIconSize.Md}
          accessibilityLabel="Open menu"
        />
      </BadgeWrapper>
    </View>
  ),
};
