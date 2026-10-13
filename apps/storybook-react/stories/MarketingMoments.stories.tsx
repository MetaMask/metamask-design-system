import {
  Box,
  BoxAlignItems,
  BoxFlexDirection,
  BoxJustifyContent,
  Button,
  ButtonSize,
  ButtonVariant,
  FontWeight,
  Icon,
  IconName,
  IconSize,
  Text,
  TextAlign,
  TextColor,
  TextVariant,
} from '@metamask/design-system-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import './MarketingMoments.css';

const MarketingMomentAccent = {
  Accent01: 'accent01',
  Accent02: 'accent02',
  Accent03: 'accent03',
  Accent04: 'accent04',
} as const;
type MarketingMomentAccent =
  (typeof MarketingMomentAccent)[keyof typeof MarketingMomentAccent];

const accentGroup = {
  accent01: {
    light: 'var(--color-accent01-light)',
    dark: 'var(--color-accent01-dark)',
  },
  accent02: {
    light: 'var(--color-accent02-light)',
    dark: 'var(--color-accent02-dark)',
  },
  accent03: {
    light: 'var(--color-accent03-light)',
    dark: 'var(--color-accent03-dark)',
  },
  accent04: {
    light: 'var(--color-accent04-light)',
    dark: 'var(--color-accent04-dark)',
  },
} as const;

type MarketingMomentProps = {
  title: string;
  description: string | string[];
  iconName?: IconName;
  primaryButtonLabel: string;
  accent?: MarketingMomentAccent;
};

const MarketingMoment = ({
  title,
  description,
  iconName = IconName.Image,
  primaryButtonLabel,
  accent,
}: MarketingMomentProps) => {
  const paragraphs = Array.isArray(description) ? description : [description];
  const colors = accent ? accentGroup[accent] : undefined;
  const accentStyle = colors
    ? ({
        '--marketing-moment-accent-light': colors.light,
        '--marketing-moment-accent-dark': colors.dark,
      } as React.CSSProperties)
    : undefined;
  const foregroundClassName = colors
    ? 'marketing-moment__foreground'
    : undefined;

  return (
    <Box
      flexDirection={BoxFlexDirection.Column}
      className={`h-dvh w-full ${colors ? 'marketing-moment' : 'bg-default'}`}
      style={accentStyle}
    >
      <Box
        flexDirection={BoxFlexDirection.Column}
        gap={4}
        paddingHorizontal={6}
        className="mt-12"
      >
        <Text
          asChild
          variant={TextVariant.DisplayMd}
          fontWeight={FontWeight.Bold}
          textAlign={TextAlign.Center}
          className={foregroundClassName}
        >
          <h1>{title}</h1>
        </Text>
        {paragraphs.map((paragraph) => (
          <Text
            key={paragraph}
            textAlign={TextAlign.Center}
            color={colors ? undefined : TextColor.TextAlternative}
            className={foregroundClassName}
          >
            {paragraph}
          </Text>
        ))}
      </Box>

      <Box
        alignItems={BoxAlignItems.Center}
        justifyContent={BoxJustifyContent.Center}
        paddingHorizontal={6}
        className="flex min-h-0 w-full flex-1"
      >
        <Box
          alignItems={BoxAlignItems.Center}
          justifyContent={BoxJustifyContent.Center}
          className={`flex h-60 w-full rounded-lg ${
            colors ? 'marketing-moment__artwork' : 'bg-muted'
          }`}
        >
          <Icon
            name={iconName}
            size={IconSize.Xl}
            className={colors ? 'marketing-moment__icon' : undefined}
            style={
              colors ? { color: 'var(--marketing-moment-surface)' } : undefined
            }
          />
        </Box>
      </Box>

      <Box
        flexDirection={BoxFlexDirection.Column}
        gap={2}
        paddingHorizontal={4}
        paddingBottom={8}
      >
        <Button
          variant={ButtonVariant.Primary}
          size={ButtonSize.Lg}
          isFullWidth
        >
          {primaryButtonLabel}
        </Button>
        <Button
          variant={ButtonVariant.Tertiary}
          size={ButtonSize.Lg}
          isFullWidth
          className={foregroundClassName}
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
    accent: {
      control: 'select',
      options: Object.values(MarketingMomentAccent),
    },
  },
  // The preview decorator adds 1rem of padding. Pull the moment back out so
  // h-dvh matches the story canvas.
  decorators: [
    (Story) => (
      <Box className="-m-4">
        <Story />
      </Box>
    ),
  ],
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
    accent: MarketingMomentAccent.Accent01,
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
    accent: MarketingMomentAccent.Accent02,
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
    accent: MarketingMomentAccent.Accent03,
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
    accent: MarketingMomentAccent.Accent04,
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
    accent: MarketingMomentAccent.Accent03,
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
    accent: MarketingMomentAccent.Accent02,
  },
};

export const AllMoments: Story = {
  name: 'All moments',
  render: () => (
    <Box className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {[
        SpendAndEarn,
        YourCardIsOrdered,
        YoureIn,
        PerpsAreHere,
        StablecoinBonus,
        GoldFoxCollective,
      ].map((story) => (
        <MarketingMoment
          key={story.args?.title}
          {...(story.args as MarketingMomentProps)}
        />
      ))}
    </Box>
  ),
};
