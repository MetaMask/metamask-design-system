import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { BoxFlexDirection } from '../../types';
import { AvatarAccount, AvatarAccountSize } from '../AvatarAccount';
import { AvatarToken, AvatarTokenSize } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';
import { Box } from '../Box';
import { Icon, IconName, IconSize } from '../Icon';
import { TextVariant } from '../Text';

import { KeyValueColumn } from './KeyValueColumn';
import type { KeyValueColumnProps } from './KeyValueColumn.types';

const meta: Meta<KeyValueColumnProps> = {
  title: 'Components/KeyValueColumn',
  component: KeyValueColumn,
  argTypes: {
    keyLabel: { control: 'text' },
    value: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<KeyValueColumnProps>;

const StoryWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <Box padding={4}>{children}</Box>;

export const Default: Story = {
  args: {
    keyLabel: 'Network',
    value: 'Ethereum Mainnet',
  },
  render: (args) => (
    <StoryWrapper>
      <KeyValueColumn {...args} />
    </StoryWrapper>
  ),
};

export const KeyStartAccessory: Story = {
  render: () => (
    <StoryWrapper>
      <KeyValueColumn
        keyLabel="Fee"
        value="$2.59"
        keyStartAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
      />
    </StoryWrapper>
  ),
};

export const KeyEndAccessory: Story = {
  render: () => (
    <StoryWrapper>
      <KeyValueColumn
        keyLabel="Limit"
        value="Unlimited"
        keyEndAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
      />
    </StoryWrapper>
  ),
};

export const ValueStartAccessory: Story = {
  render: () => (
    <StoryWrapper>
      <KeyValueColumn
        keyLabel="Wallet"
        value="0x1234…abcd"
        valueStartAccessory={<Icon name={IconName.Wallet} size={IconSize.Sm} />}
      />
    </StoryWrapper>
  ),
};

export const ValueEndAccessory: Story = {
  render: () => (
    <StoryWrapper>
      <KeyValueColumn
        keyLabel="Status"
        value="Active"
        valueEndAccessory={<Icon name={IconName.Check} size={IconSize.Sm} />}
      />
    </StoryWrapper>
  ),
};

export const KeyEndButtonIconProps: Story = {
  render: () => (
    <StoryWrapper>
      <KeyValueColumn
        keyLabel="Network"
        value="Mainnet"
        keyEndButtonIconProps={{
          iconName: IconName.Question,
          onPress: () => undefined,
        }}
      />
    </StoryWrapper>
  ),
};

export const ValueEndButtonIconProps: Story = {
  render: () => (
    <StoryWrapper>
      <KeyValueColumn
        keyLabel="Address"
        value="0x1234…abcd"
        valueEndButtonIconProps={{
          iconName: IconName.Copy,
          onPress: () => undefined,
        }}
      />
    </StoryWrapper>
  ),
};

export const KeyTextProps: Story = {
  render: () => (
    <StoryWrapper>
      <KeyValueColumn
        keyLabel="Note"
        value="Details"
        keyTextProps={{ variant: TextVariant.BodySm }}
      />
    </StoryWrapper>
  ),
};

export const ValueTextProps: Story = {
  render: () => (
    <StoryWrapper>
      <KeyValueColumn
        keyLabel="Amount"
        value="1.5 ETH"
        valueTextProps={{ variant: TextVariant.BodySm }}
      />
    </StoryWrapper>
  ),
};

const SAMPLE_ADDRESS = '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';

/** Single column of pairs (e.g. receipt lines). For token/stats summaries, prefer TwoColumnGrid. */
export const SingleColumnStack: Story = {
  render: () => (
    <StoryWrapper>
      <Box gap={6}>
        <KeyValueColumn
          keyLabel="Account"
          value={
            <AvatarAccount
              address={SAMPLE_ADDRESS}
              size={AvatarAccountSize.Xs}
            />
          }
        />
        <KeyValueColumn
          keyLabel="Pay with"
          value={
            <AvatarToken
              src={SAMPLE_AVATARTOKEN_URIS[0]}
              size={AvatarTokenSize.Xs}
            />
          }
        />
        <KeyValueColumn
          keyLabel="Transaction fees"
          value="$2.59"
          keyEndButtonIconProps={{
            iconName: IconName.Info,
            onPress: () => undefined,
          }}
        />
        <KeyValueColumn keyLabel="Est. time" value="5 mins" />
        <KeyValueColumn keyLabel="Total" value="$102.59" />
      </Box>
    </StoryWrapper>
  ),
};

/** Recommended stats layout: exactly two columns (left + right), each a vertical stack—no third column. */
export const TwoColumnGrid: Story = {
  render: () => (
    <StoryWrapper>
      <Box flexDirection={BoxFlexDirection.Row} gap={4} twClassName="w-full">
        <Box
          flexDirection={BoxFlexDirection.Column}
          gap={6}
          twClassName="flex-1"
        >
          <KeyValueColumn keyLabel="24h high" value="$2,450.62" />
          <KeyValueColumn keyLabel="Market cap" value="$1.23B" />
          <KeyValueColumn keyLabel="Total liquidity" value="$450.2M" />
        </Box>
        <Box
          flexDirection={BoxFlexDirection.Column}
          gap={6}
          twClassName="flex-1"
        >
          <KeyValueColumn keyLabel="24h volume" value="$892.1M" />
          <KeyValueColumn keyLabel="Circulating supply" value="120.4M" />
          <KeyValueColumn
            keyLabel="Contract address"
            value="0x1234…abcd"
            valueEndButtonIconProps={{
              iconName: IconName.Copy,
              onPress: () => undefined,
            }}
          />
        </Box>
      </Box>
    </StoryWrapper>
  ),
};

const OVERFLOW_VALUE_TEXT =
  'Wrapped Ether (WETH) · 24,891,402.558291 ETH — Ethereum, Arbitrum, Optimism, Base';

/** Long values in a two-column row; each half gets single-line tail ellipsis. */
export const Overflow: Story = {
  render: () => (
    <StoryWrapper>
      <Box flexDirection={BoxFlexDirection.Row} gap={4} twClassName="w-full">
        <Box
          flexDirection={BoxFlexDirection.Column}
          gap={6}
          twClassName="flex-1"
        >
          <KeyValueColumn keyLabel="Network" value={OVERFLOW_VALUE_TEXT} />
        </Box>
        <Box
          flexDirection={BoxFlexDirection.Column}
          gap={6}
          twClassName="flex-1"
        >
          <KeyValueColumn keyLabel="Balance" value={OVERFLOW_VALUE_TEXT} />
        </Box>
      </Box>
    </StoryWrapper>
  ),
};
