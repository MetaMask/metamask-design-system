import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box, BoxAlignItems, BoxFlexDirection } from '../Box';
import { Icon, IconName, IconSize, IconColor } from '../Icon';
import { Text, TextColor, FontWeight, TextVariant } from '../Text';

import { TitleHub } from './TitleHub';
import type { TitleHubProps } from './TitleHub.types';

/**
 * Pill badge: dot + label (e.g. network), for `titleEndAccessory`.
 * TODO: Temporary until a Tag component exists.
 *
 * @returns Story-only testnet badge UI.
 */
const TestnetBadge = () => (
  <Box
    flexDirection={BoxFlexDirection.Row}
    alignItems={BoxAlignItems.Center}
    gap={1}
    twClassName="rounded-full bg-warning-muted px-2 py-1"
  >
    <Box twClassName="h-2 w-2 shrink-0 rounded-full bg-warning-default" />
    <Text
      variant={TextVariant.BodySm}
      color={TextColor.WarningDefault}
      fontWeight={FontWeight.Medium}
    >
      Testnet
    </Text>
  </Box>
);

const meta: Meta<TitleHubProps> = {
  title: 'Components/TitleHub',
  component: TitleHub,
  argTypes: {
    title: {
      control: 'text',
    },
    amount: {
      control: 'text',
    },
    bottomLabel: {
      control: 'text',
    },
    twClassName: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <Box twClassName="w-full bg-background-default p-4">
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<TitleHubProps>;

export const Default: Story = {
  args: {
    title: 'Perps',
    amount: '$336.21',
    bottomLabel: '$336.21 available',
    twClassName: '',
  },
  render: (args) => <TitleHub {...args} titleEndAccessory={<TestnetBadge />} />,
};

export const Amount: Story = {
  render: () => <TitleHub title="Perps" amount="$336.21" />,
};

export const AmountAccessory: Story = {
  render: () => (
    <TitleHub
      title="Perps"
      amount="$336.21"
      amountEndAccessory={
        <Box twClassName="ml-1">
          <Icon
            name={IconName.Info}
            size={IconSize.Sm}
            color={IconColor.IconAlternative}
          />
        </Box>
      }
    />
  ),
};

export const Title: Story = {
  render: () => (
    <Box twClassName="w-full gap-4">
      <TitleHub title="Perps" />
    </Box>
  ),
};

export const TitleAccessory: Story = {
  render: () => <TitleHub title="Perps" titleEndAccessory={<TestnetBadge />} />,
};

export const BottomLabel: Story = {
  args: {
    title: 'Perps',
    amount: '$336.21',
    bottomLabel: '$336.21 available',
    twClassName: '',
  },
};

export const BottomLabelAccessory: Story = {
  render: () => (
    <TitleHub
      title="Perps"
      amount="$336.21"
      bottomLabel="$336.21 available"
      bottomLabelEndAccessory={<Icon name={IconName.Info} size={IconSize.Xs} />}
    />
  ),
};

export const BottomAccessory: Story = {
  render: () => (
    <TitleHub
      title="Perps"
      amount="$336.21"
      bottomAccessory={
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          gap={1}
        >
          <Icon name={IconName.SecurityAlert} size={IconSize.Xs} />
          <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
            Perps use isolated margin. Liquidation can occur if collateral falls
            below maintenance.
          </Text>
        </Box>
      }
    />
  ),
};
