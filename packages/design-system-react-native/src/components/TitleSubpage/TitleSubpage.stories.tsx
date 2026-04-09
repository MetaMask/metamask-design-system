import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import UsdcSVG from '../../assets/token-icons/usdc.svg';
import { AvatarToken, AvatarTokenSize } from '../AvatarToken';
import { Box, BoxAlignItems, BoxFlexDirection } from '../Box';
import { Icon, IconName, IconSize, IconColor } from '../Icon';
import { Text, TextColor, FontWeight, TextVariant } from '../Text';

import { TitleSubpage } from './TitleSubpage';
import type { TitleSubpageProps } from './TitleSubpage.types';

/** Token avatar for stories using bundled USDC artwork. */
const StoryTitleAvatar = () => (
  <AvatarToken src={UsdcSVG} size={AvatarTokenSize.Lg} name="USD Coin" />
);

const USDC_TITLE = 'USD Coin';
const USDC_SUBTITLE = 'USDC';
const USDC_AMOUNT = '$1.0001';
const USDC_PRICE_CHANGE_BOTTOM_LABEL = '+$0.000126 (+0.01%)';

const TodayBottomLabelEndAccessory = () => (
  <Text
    variant={TextVariant.BodySm}
    fontWeight={FontWeight.Medium}
    color={TextColor.TextAlternative}
  >
    Today
  </Text>
);

/** Pill badge for `titleEndAccessory` demos (not in reference screenshot). */
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

const meta: Meta<TitleSubpageProps> = {
  title: 'Components/TitleSubpage',
  component: TitleSubpage,
  args: {
    titleAvatar: <StoryTitleAvatar />,
    title: USDC_TITLE,
    subtitle: USDC_SUBTITLE,
    amount: USDC_AMOUNT,
    twClassName: '',
  },
  argTypes: {
    title: {
      control: 'text',
    },
    amount: {
      control: 'text',
    },
    subtitle: {
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

type Story = StoryObj<TitleSubpageProps>;

export const Default: Story = {
  render: (args) => (
    <TitleSubpage
      {...args}
      bottomLabel={USDC_PRICE_CHANGE_BOTTOM_LABEL}
      bottomLabelEndAccessory={<TodayBottomLabelEndAccessory />}
      bottomLabelProps={{ color: TextColor.SuccessDefault }}
    />
  ),
};

export const Amount: Story = {
  render: () => (
    <TitleSubpage
      titleAvatar={<StoryTitleAvatar />}
      title={USDC_TITLE}
      subtitle={USDC_SUBTITLE}
      amount={USDC_AMOUNT}
    />
  ),
};

export const AmountAccessory: Story = {
  render: () => (
    <TitleSubpage
      titleAvatar={<StoryTitleAvatar />}
      title={USDC_TITLE}
      subtitle={USDC_SUBTITLE}
      amount={USDC_AMOUNT}
      amountEndAccessory={
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

export const Title: Story = {
  render: () => (
    <TitleSubpage titleAvatar={<StoryTitleAvatar />} title={USDC_TITLE} />
  ),
};

export const TitleAccessory: Story = {
  render: () => (
    <TitleSubpage
      titleAvatar={<StoryTitleAvatar />}
      title={USDC_TITLE}
      titleEndAccessory={<TestnetBadge />}
    />
  ),
};

export const Subtitle: Story = {
  render: () => (
    <TitleSubpage
      titleAvatar={<StoryTitleAvatar />}
      title={USDC_TITLE}
      subtitle={USDC_SUBTITLE}
    />
  ),
};

export const SubtitleAccessory: Story = {
  render: () => (
    <TitleSubpage
      titleAvatar={<StoryTitleAvatar />}
      title={USDC_TITLE}
      subtitle={USDC_SUBTITLE}
      subtitleEndAccessory={
        <Box twClassName="ml-2">
          <Icon
            name={IconName.Info}
            size={IconSize.Xs}
            color={IconColor.IconAlternative}
          />
        </Box>
      }
    />
  ),
};

export const BottomLabel: Story = {
  render: (args) => (
    <TitleSubpage
      {...args}
      title={USDC_TITLE}
      subtitle={USDC_SUBTITLE}
      amount={USDC_AMOUNT}
      bottomLabel={USDC_PRICE_CHANGE_BOTTOM_LABEL}
      bottomLabelProps={{ color: TextColor.SuccessDefault }}
    />
  ),
};

export const BottomLabelAccessory: Story = {
  render: () => (
    <TitleSubpage
      titleAvatar={<StoryTitleAvatar />}
      title={USDC_TITLE}
      subtitle={USDC_SUBTITLE}
      amount={USDC_AMOUNT}
      bottomLabel={USDC_PRICE_CHANGE_BOTTOM_LABEL}
      bottomLabelEndAccessory={<TodayBottomLabelEndAccessory />}
      bottomLabelProps={{ color: TextColor.SuccessDefault }}
    />
  ),
};

export const BottomAccessory: Story = {
  render: () => (
    <TitleSubpage
      titleAvatar={<StoryTitleAvatar />}
      title={USDC_TITLE}
      subtitle={USDC_SUBTITLE}
      amount={USDC_AMOUNT}
      bottomAccessory={
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          gap={1}
        >
          <Icon name={IconName.SecurityAlert} size={IconSize.Xs} />
          <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
            Stablecoin prices can deviate from $1. Verify the asset and network
            before you trade.
          </Text>
        </Box>
      }
    />
  ),
};
