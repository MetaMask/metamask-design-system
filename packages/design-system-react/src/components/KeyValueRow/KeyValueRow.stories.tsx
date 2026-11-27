import {
  BoxFlexDirection,
  KeyValueRowVariant,
  TextVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { AvatarAccount, AvatarAccountSize } from '../AvatarAccount';
import { AvatarToken, AvatarTokenSize } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';
import { Box } from '../Box';
import { Icon, IconName, IconSize } from '../Icon';

import { KeyValueRow } from './KeyValueRow';
import type { KeyValueRowProps } from './KeyValueRow.types';
import README from './README.mdx';

const meta: Meta<KeyValueRowProps> = {
  title: 'React Components/KeyValueRow',
  component: KeyValueRow,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    keyLabel: { control: 'text' },
    value: { control: 'text' },
    variant: {
      control: 'select',
      options: Object.keys(KeyValueRowVariant),
      mapping: KeyValueRowVariant,
    },
  },
  decorators: [
    (Story) => (
      <Box className="w-full max-w-md">
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<KeyValueRowProps>;

const SAMPLE_ADDRESS = '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8';

export const Default: Story = {
  args: {
    keyLabel: 'Network',
    value: 'Ethereum Mainnet',
  },
};

export const Variant: Story = {
  render: () => (
    <Box gap={4} className="w-full">
      {(
        Object.entries(KeyValueRowVariant) as [
          keyof typeof KeyValueRowVariant,
          (typeof KeyValueRowVariant)[keyof typeof KeyValueRowVariant],
        ][]
      ).map(([key, rowVariant]) => (
        <KeyValueRow
          key={key}
          keyLabel={key}
          value={`Value (${key})`}
          variant={rowVariant}
        />
      ))}
    </Box>
  ),
};

export const KeyStartAccessory: Story = {
  render: () => (
    <KeyValueRow
      keyLabel="Network fee"
      value="$2.59"
      keyStartAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
    />
  ),
};

export const KeyEndAccessory: Story = {
  render: () => (
    <KeyValueRow
      keyLabel="Limit"
      value="Unlimited"
      keyEndAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
    />
  ),
};

export const ValueStartAccessory: Story = {
  render: () => (
    <KeyValueRow
      keyLabel="Wallet"
      value="0x1234…abcd"
      valueStartAccessory={<Icon name={IconName.Wallet} size={IconSize.Sm} />}
    />
  ),
};

export const ValueEndAccessory: Story = {
  render: () => (
    <KeyValueRow
      keyLabel="Status"
      value="Active"
      valueEndAccessory={<Icon name={IconName.Check} size={IconSize.Sm} />}
    />
  ),
};

export const KeyEndButtonIconProps: Story = {
  render: () => (
    <KeyValueRow
      keyLabel="Network"
      value="Mainnet"
      keyEndButtonIconProps={{
        iconName: IconName.Question,
        ariaLabel: 'Network help',
        onClick: () => undefined,
      }}
    />
  ),
};

export const ValueEndButtonIconProps: Story = {
  render: () => (
    <KeyValueRow
      keyLabel="Address"
      value="0x1234…abcd"
      valueEndButtonIconProps={{
        iconName: IconName.Copy,
        ariaLabel: 'Copy address',
        onClick: () => undefined,
      }}
    />
  ),
};

export const KeyTextProps: Story = {
  render: () => (
    <KeyValueRow
      keyLabel="Note"
      value="Details"
      keyTextProps={{ variant: TextVariant.BodySm }}
    />
  ),
};

export const ValueTextProps: Story = {
  render: () => (
    <Box gap={4} className="w-full">
      <KeyValueRow
        keyLabel="Amount"
        value="1.5 ETH"
        valueTextProps={{ variant: TextVariant.BodySm }}
      />
      <KeyValueRow
        keyLabel="Balance"
        value="$1,234.56"
        valueTextProps={{ isHidden: true }}
      />
    </Box>
  ),
};

export const SingleColumnStack: Story = {
  render: () => (
    <Box flexDirection={BoxFlexDirection.Column} className="w-full">
      <KeyValueRow
        keyLabel="Account"
        value={
          <AvatarAccount address={SAMPLE_ADDRESS} size={AvatarAccountSize.Xs} />
        }
      />
      <KeyValueRow
        keyLabel="Pay with"
        value={
          <AvatarToken
            src={SAMPLE_AVATARTOKEN_URIS[0]}
            size={AvatarTokenSize.Xs}
          />
        }
      />
      <KeyValueRow
        keyLabel="Transaction fees"
        value="$2.59"
        keyEndButtonIconProps={{
          iconName: IconName.Info,
          ariaLabel: 'Transaction fee details',
          onClick: () => undefined,
        }}
      />
      <KeyValueRow keyLabel="Est. time" value="5 mins" />
      <KeyValueRow keyLabel="Total" value="$102.59" />
    </Box>
  ),
};

const OVERFLOW_VALUE_TEXT =
  'Wrapped Ether (WETH) · 24,891,402.558291 ETH — Ethereum, Arbitrum, Optimism, Base';

export const Overflow: Story = {
  render: () => (
    <KeyValueRow
      keyLabel="Network"
      value={OVERFLOW_VALUE_TEXT}
      variant={KeyValueRowVariant.Summary}
    />
  ),
};
