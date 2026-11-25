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

import { AvatarToken, AvatarTokenSize } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';

import README from './README.mdx';
import { TitleSubpage } from './TitleSubpage';
import type { TitleSubpageProps } from './TitleSubpage.types';

/**
 * Token avatar for stories using bundled USDC artwork.
 *
 * @returns The USDC `AvatarToken` for story defaults.
 */
const StoryTitleAvatar = () => (
  <AvatarToken
    src={SAMPLE_AVATARTOKEN_URIS[6]}
    size={AvatarTokenSize.Lg}
    name="USD Coin"
  />
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

/**
 * Solid pill badge with a testnet label, for `titleEndAccessory`.
 * `WarningInverse` on the `WarningDefault` fill passes 4.5:1 in both themes
 * (5.05:1 light, 10.14:1 dark); the amber text on the muted fill measured
 * 4.41:1 in light.
 *
 * @returns Story-only testnet badge UI.
 */
const TestnetBadge = () => (
  <Box
    backgroundColor={BoxBackgroundColor.WarningDefault}
    paddingHorizontal={2}
    paddingVertical={1}
    className="rounded-full"
  >
    <Text
      variant={TextVariant.BodySm}
      color={TextColor.WarningInverse}
      fontWeight={FontWeight.Medium}
    >
      Testnet
    </Text>
  </Box>
);

const meta: Meta<TitleSubpageProps> = {
  title: 'React Components/TitleSubpage',
  component: TitleSubpage,
  parameters: {
    docs: {
      page: README,
    },
  },
  args: {
    titleAvatar: <StoryTitleAvatar />,
    title: USDC_TITLE,
    subtitle: USDC_SUBTITLE,
    amount: USDC_AMOUNT,
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

export const AmountEndAccessory: Story = {
  render: () => (
    <TitleSubpage
      titleAvatar={<StoryTitleAvatar />}
      title={USDC_TITLE}
      subtitle={USDC_SUBTITLE}
      amount={USDC_AMOUNT}
      amountEndAccessory={
        <Icon
          name={IconName.Info}
          size={IconSize.Md}
          color={IconColor.IconAlternative}
          className="ml-1"
        />
      }
    />
  ),
};

export const Title: Story = {
  render: () => (
    <TitleSubpage titleAvatar={<StoryTitleAvatar />} title={USDC_TITLE} />
  ),
};

export const TitleEndAccessory: Story = {
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

export const SubtitleEndAccessory: Story = {
  render: () => (
    <TitleSubpage
      titleAvatar={<StoryTitleAvatar />}
      title={USDC_TITLE}
      subtitle={USDC_SUBTITLE}
      subtitleEndAccessory={
        <Icon
          name={IconName.Info}
          size={IconSize.Xs}
          color={IconColor.IconAlternative}
          className="ml-2"
        />
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

export const BottomLabelEndAccessory: Story = {
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
          <Icon name={IconName.Warning} size={IconSize.Sm} />
          <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
            Stablecoin prices can deviate from $1. Verify the asset and network
            before you trade.
          </Text>
        </Box>
      }
    />
  ),
};
