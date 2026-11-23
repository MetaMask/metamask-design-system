import {
  BoxAlignItems,
  BoxBackgroundColor,
  BoxFlexDirection,
  FontWeight,
  IconColor,
  IconName,
  IconSize,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';

import README from './README.mdx';
import { TitleStandard } from './TitleStandard';
import type { TitleStandardProps } from './TitleStandard.types';

const meta: Meta<TitleStandardProps> = {
  title: 'React Components/TitleStandard',
  component: TitleStandard,
  parameters: {
    docs: {
      page: README,
    },
  },
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
      <Box
        className="w-full max-w-md"
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
      >
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
  },
};

export const Title: Story = {
  render: () => <TitleStandard title="Import a wallet" />,
};

export const TitleEndAccessory: Story = {
  render: () => (
    <TitleStandard
      title="Import a wallet"
      titleEndAccessory={
        <Icon
          name={IconName.Info}
          size={IconSize.Sm}
          color={IconColor.IconAlternative}
        />
      }
    />
  ),
};

export const TopAccessory: Story = {
  render: () => (
    <Box gap={4}>
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
    </Box>
  ),
};

export const BottomLabel: Story = {
  args: {
    title: 'Import a wallet',
    bottomLabel: 'Enter your Secret Recovery Phrase',
  },
};

export const BottomLabelEndAccessory: Story = {
  render: () => (
    <TitleStandard
      title="Import a wallet"
      bottomLabel="Enter your Secret Recovery Phrase"
      bottomLabelEndAccessory={
        <Icon
          name={IconName.Info}
          size={IconSize.Sm}
          color={IconColor.IconAlternative}
        />
      }
    />
  ),
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
          <Icon name={IconName.Warning} size={IconSize.Xs} />
          <Text variant={TextVariant.BodySm}>
            MetaMask support will never ask for your phrase.
          </Text>
        </Box>
      }
    />
  ),
};
