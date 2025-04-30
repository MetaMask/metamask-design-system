import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import {
  BadgeWrapperPositionAnchorShape,
  BadgeWrapperPosition,
} from '../../types';
import { AvatarAccount, AvatarAccountSize } from '../AvatarAccount';
import { AvatarNetwork } from '../AvatarNetwork';
import { SAMPLE_AVATARNETWORK_URIS } from '../AvatarNetwork/AvatarNetwork.dev';
import { IconName } from '../Icon';
import { BadgeCount } from '../BadgeCount';
import { BadgeIcon } from '../BadgeIcon';
import { BadgeNetwork } from '../BadgeNetwork';
import { BadgeStatus, BadgeStatusStatus } from '../BadgeStatus';
import { BadgeWrapper } from './BadgeWrapper';
import type { BadgeWrapperProps } from './BadgeWrapper.types';
import README from './README.mdx';

const meta: Meta<BadgeWrapperProps> = {
  title: 'React Components/BadgeWrapper',
  component: BadgeWrapper,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: Object.keys(BadgeWrapperPosition),
      mapping: BadgeWrapperPosition,
      description:
        'Optional prop to control the preset position of the badge. This prop gets used along with positionAnchorShape, positionXOffset, and positionYOffset to determine the final position.',
    },
    positionAnchorShape: {
      control: 'select',
      options: Object.keys(BadgeWrapperPositionAnchorShape),
      mapping: BadgeWrapperPositionAnchorShape,
      description:
        'Optional prop to determine the shape of the anchoring element. This prop gets used along with position, positionXOffset, and positionYOffset to determine the final position.',
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
    <div className="p-4">
      <BadgeWrapper
        {...args}
        badge={<BadgeNetwork name="ETH" src={SAMPLE_AVATARNETWORK_URIS[3]} />}
      >
        <AvatarAccount
          address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
          size={AvatarAccountSize.Md}
        />
      </BadgeWrapper>
    </div>
  ),
};

export const Position: Story = {
  render: () => (
    <div className="flex flex-col gap-5 p-4">
      {Object.keys(BadgeWrapperPosition).map((positionKey) => (
        <div key={positionKey} className="flex flex-row gap-3">
          {/* Position example with circular anchor shape */}
          <BadgeWrapper
            position={
              BadgeWrapperPosition[
                positionKey as keyof typeof BadgeWrapperPosition
              ]
            }
            badge={
              <BadgeNetwork name="ETH" src={SAMPLE_AVATARNETWORK_URIS[3]} />
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
              <BadgeNetwork name="ETH" src={SAMPLE_AVATARNETWORK_URIS[3]} />
            }
          >
            <AvatarNetwork name="ETH" src={SAMPLE_AVATARNETWORK_URIS[3]} />
          </BadgeWrapper>
        </div>
      ))}
    </div>
  ),
};

export const PositionAnchorShape: Story = {
  render: () => (
    <div className="flex flex-col gap-5 p-4">
      <div className="flex flex-row gap-3">
        {/* PositionAnchorShape example with circular anchor shape */}
        <BadgeWrapper
          badge={<BadgeNetwork name="ETH" src={SAMPLE_AVATARNETWORK_URIS[3]} />}
        >
          <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
        </BadgeWrapper>
        {/* PositionAnchorShape example with rectangular anchor shape */}
        <BadgeWrapper
          badge={<BadgeNetwork name="ETH" src={SAMPLE_AVATARNETWORK_URIS[3]} />}
          positionAnchorShape={BadgeWrapperPositionAnchorShape.Rectangular}
        >
          <AvatarNetwork name="ETH" src={SAMPLE_AVATARNETWORK_URIS[3]} />
        </BadgeWrapper>
      </div>
    </div>
  ),
};

export const PositionXOffset: Story = {
  render: () => (
    <div className="flex flex-col gap-5 p-4">
      {/* No offset */}
      <BadgeWrapper
        badge={<BadgeNetwork name="ETH" src={SAMPLE_AVATARNETWORK_URIS[3]} />}
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
      {/* With Offset */}
      <BadgeWrapper
        badge={<BadgeNetwork name="ETH" src={SAMPLE_AVATARNETWORK_URIS[3]} />}
        positionXOffset={5}
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
    </div>
  ),
};

export const PositionYOffset: Story = {
  render: () => (
    <div className="flex flex-col gap-5 p-4">
      {/* No offset */}
      <BadgeWrapper
        badge={<BadgeNetwork name="ETH" src={SAMPLE_AVATARNETWORK_URIS[3]} />}
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
      {/* With offset */}
      <BadgeWrapper
        badge={<BadgeNetwork name="ETH" src={SAMPLE_AVATARNETWORK_URIS[3]} />}
        positionYOffset={5}
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
    </div>
  ),
};

export const CustomPosition: Story = {
  render: () => (
    <div className="flex flex-col gap-5 p-4">
      {/* No CustomPosition */}
      <BadgeWrapper
        badge={<BadgeNetwork name="ETH" src={SAMPLE_AVATARNETWORK_URIS[3]} />}
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
      {/* With CustomPosition */}
      <BadgeWrapper
        badge={<BadgeNetwork name="ETH" src={SAMPLE_AVATARNETWORK_URIS[3]} />}
        customPosition={{
          top: 5,
          right: 10,
        }}
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
    </div>
  ),
};

export const Badge: Story = {
  render: () => (
    <div className="flex flex-col gap-5 p-4">
      {/* BadgeCount example */}
      <BadgeWrapper
        position={BadgeWrapperPosition.TopRight}
        badge={<BadgeCount count={8} />}
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
      {/* BadgeIcon example */}
      <BadgeWrapper
        position={BadgeWrapperPosition.BottomRight}
        badge={<BadgeIcon iconName={IconName.Snaps} />}
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
      {/* BadgeNetwork example */}
      <BadgeWrapper
        position={BadgeWrapperPosition.BottomRight}
        badge={<BadgeNetwork name="ETH" src={SAMPLE_AVATARNETWORK_URIS[3]} />}
      >
        <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      </BadgeWrapper>
      {/* BadgeStatus example */}
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
    </div>
  ),
};
