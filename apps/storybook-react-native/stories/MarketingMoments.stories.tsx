import {
  Box,
  BoxAlignItems,
  BoxFlexDirection,
  BoxFlexWrap,
  BoxJustifyContent,
  Button,
  ButtonSize,
  ButtonVariant,
  FontWeight,
  Icon,
  IconColor,
  IconName,
  IconSize,
  Text,
  TextColor,
  TextVariant,
} from '@metamask/design-system-react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';

type MarketingMomentProps = {
  title: string;
  description: string | string[];
  iconName?: IconName;
  primaryButtonLabel: string;
};

const noopPress = () => undefined;

const MarketingMoment = ({
  title,
  description,
  iconName = IconName.Image,
  primaryButtonLabel,
}: MarketingMomentProps) => {
  const { height } = useWindowDimensions();
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <Box
      flexDirection={BoxFlexDirection.Column}
      twClassName="w-full bg-default"
      style={{ height }}
    >
      <Box
        flexDirection={BoxFlexDirection.Column}
        gap={4}
        paddingHorizontal={6}
        twClassName="mt-12 shrink-0"
      >
        <Text
          variant={TextVariant.DisplayMd}
          fontWeight={FontWeight.Bold}
          accessibilityRole="header"
          twClassName="text-center"
        >
          {title}
        </Text>
        {paragraphs.map((paragraph) => (
          <Text
            key={paragraph}
            color={TextColor.TextAlternative}
            twClassName="text-center"
          >
            {paragraph}
          </Text>
        ))}
      </Box>

      <Box
        alignItems={BoxAlignItems.Center}
        justifyContent={BoxJustifyContent.Center}
        paddingHorizontal={6}
        twClassName="min-h-0 w-full flex-1 overflow-hidden"
      >
        <Box
          alignItems={BoxAlignItems.Center}
          justifyContent={BoxJustifyContent.Center}
          twClassName="size-full max-h-60 min-h-0 overflow-hidden rounded-lg bg-muted"
        >
          <Icon
            name={iconName}
            size={IconSize.Xl}
            color={IconColor.IconMuted}
          />
        </Box>
      </Box>

      <Box
        flexDirection={BoxFlexDirection.Column}
        gap={2}
        paddingHorizontal={4}
        paddingBottom={8}
        twClassName="shrink-0"
      >
        <Button
          variant={ButtonVariant.Primary}
          size={ButtonSize.Lg}
          isFullWidth
          onPress={noopPress}
        >
          {primaryButtonLabel}
        </Button>
        <Button
          variant={ButtonVariant.Tertiary}
          size={ButtonSize.Lg}
          isFullWidth
          onPress={noopPress}
        >
          Not now
        </Button>
      </Box>
    </Box>
  );
};

const meta: Meta<typeof MarketingMoment> = {
  title: 'Patterns/Marketing Moments',
  component: MarketingMoment,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    iconName: {
      control: 'select',
      options: Object.keys(IconName),
      mapping: IconName,
    },
    primaryButtonLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof MarketingMoment>;

export const Default: Story = {
  args: {
    title: 'Title goes here',
    description: 'Description explains the value in one or two sentences.',
    iconName: IconName.Image,
    primaryButtonLabel: 'Get started',
  },
};

export const SpendAndEarn: Story = {
  name: 'Spend and earn',
  args: {
    title: 'Spend and earn',
    description:
      'The MetaMask Card is the fast and easy way to spend your crypto and earn up to 3% mUSD back.',
    iconName: IconName.Card,
    primaryButtonLabel: 'Set up now',
  },
};

export const YourCardIsOrdered: Story = {
  name: 'Your card is ordered',
  args: {
    title: 'Your card is ordered',
    description: [
      'It should arrive in 4 to 6 weeks.',
      'Set up your virtual card and add it to your digital wallet to start earning mUSD back.',
    ],
    iconName: IconName.Card,
    primaryButtonLabel: 'Set up card',
  },
};

export const YoureIn: Story = {
  name: "You're in",
  args: {
    title: "You're in!",
    description:
      'Finish setting up your card so you can start spending your crypto.',
    iconName: IconName.Confirmation,
    primaryButtonLabel: 'Finish setup',
  },
};

export const PerpsAreHere: Story = {
  name: 'Perps are here',
  args: {
    title: 'Perps are here',
    description:
      'Long or short with up to 40x leverage. Fund your account with one click.',
    iconName: IconName.Candlestick,
    primaryButtonLabel: 'Get started',
  },
};

export const StablecoinBonus: Story = {
  name: 'Get 3% on stablecoins',
  args: {
    title: 'Get 3% on stablecoins',
    description:
      'Convert your stablecoins to mUSD and earn a 3% annualized bonus.',
    iconName: IconName.Coin,
    primaryButtonLabel: 'Get started',
  },
};

export const GoldFoxCollective: Story = {
  name: 'Welcome to Gold Fox Collective',
  args: {
    title: 'Welcome to Gold Fox Collective',
    description:
      'Unlock exclusive perks, early features, and curated rewards. By invitation only.',
    iconName: IconName.MetamaskFoxOutline,
    primaryButtonLabel: 'Accept invite',
  },
};

const AllMomentsGrid = () => {
  const { width } = useWindowDimensions();
  let columns = 1;
  if (width >= 1024) {
    columns = 3;
  } else if (width >= 768) {
    columns = 2;
  }

  return (
    <ScrollView>
      <Box
        flexDirection={BoxFlexDirection.Row}
        flexWrap={BoxFlexWrap.Wrap}
        twClassName="w-full border-l border-t border-muted"
      >
        {[
          SpendAndEarn,
          YourCardIsOrdered,
          YoureIn,
          PerpsAreHere,
          StablecoinBonus,
          GoldFoxCollective,
        ].map((story) => (
          <Box
            key={story.args?.title}
            twClassName="border-b border-r border-muted"
            style={{ width: `${100 / columns}%` }}
          >
            <MarketingMoment {...(story.args as MarketingMomentProps)} />
          </Box>
        ))}
      </Box>
    </ScrollView>
  );
};

export const AllMoments: Story = {
  name: 'All moments',
  render: () => <AllMomentsGrid />,
};
