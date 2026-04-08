import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { Box, BoxFlexDirection, BoxAlignItems } from '../Box';
import { Icon, IconName, IconSize, IconColor } from '../Icon';
import { Text, TextVariant, TextColor, FontWeight } from '../Text';

import { TitleStandard } from './TitleStandard';
import type { TitleStandardProps } from './TitleStandard.types';

const meta: Meta<TitleStandardProps> = {
  title: 'Components/TitleStandard',
  component: TitleStandard,
  argTypes: {
    title: {
      control: 'text',
    },
    bottomLabel: {
      control: 'text',
    },
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

type Story = StoryObj<TitleStandardProps>;

export const Default: Story = {
  args: {
    title: 'Import a wallet',
    bottomLabel: 'Enter your Secret Recovery Phrase',
  },
};

export const Title: Story = {
  render: () => <TitleStandard title="Import a wallet" />,
};

export const TitleAccessory: Story = {
  render: () => (
    <TitleStandard
      title="Import a wallet"
      titleAccessory={
        <Box twClassName="ml-2">
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

export const TopAccessory: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <TitleStandard
        topAccessory={
          <Text
            variant={TextVariant.BodySm}
            fontWeight={FontWeight.Medium}
            color={TextColor.TextAlternative}
          >
            Step 2 of 3
          </Text>
        }
        title="Create your wallet password"
      />
      <TitleStandard
        topAccessory={
          <Box
            flexDirection={BoxFlexDirection.Row}
            alignItems={BoxAlignItems.Center}
            gap={1}
          >
            <Icon name={IconName.Mobile} size={IconSize.Sm} />
            <Text variant={TextVariant.BodySm}>Import from mobile</Text>
          </Box>
        }
        title="Enter your Secret Recovery Phrase"
      />
    </View>
  ),
};

export const BottomLabel: Story = {
  args: {
    title: 'Import a wallet',
    bottomLabel: 'Enter your Secret Recovery Phrase',
  },
};

export const BottomAccessory: Story = {
  render: () => (
    <TitleStandard
      title="Secure your wallet"
      bottomAccessory={
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          gap={1}
        >
          <Icon name={IconName.SecurityAlert} size={IconSize.Xs} />
          <Text variant={TextVariant.BodySm}>
            MetaMask support will never ask for your phrase.
          </Text>
        </Box>
      }
    />
  ),
};
