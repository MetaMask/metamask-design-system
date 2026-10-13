import {
  Box,
  BoxAlignItems,
  BoxBackgroundColor,
  BoxBorderColor,
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
  TextAlign,
  TextColor,
  TextVariant,
} from '@metamask/design-system-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

type MarketingMomentProps = {
  title: string;
  description: string | string[];
  iconName?: IconName;
  primaryButtonLabel: string;
};

const MarketingMomentArtwork = ({ iconName }: { iconName: IconName }) => (
  <Box
    backgroundColor={BoxBackgroundColor.BackgroundMuted}
    alignItems={BoxAlignItems.Center}
    justifyContent={BoxJustifyContent.Center}
    flexDirection={BoxFlexDirection.Column}
    className="h-60 w-full rounded-lg"
  >
    <Icon
      name={iconName}
      size={IconSize.Xl}
      color={IconColor.IconAlternative}
    />
  </Box>
);

const MarketingMomentTitle = ({
  title,
  description,
}: Pick<MarketingMomentProps, 'title' | 'description'>) => {
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <Box flexDirection={BoxFlexDirection.Column} gap={4}>
      <Text
        asChild
        variant={TextVariant.DisplayMd}
        fontWeight={FontWeight.Bold}
        textAlign={TextAlign.Center}
      >
        <h1>{title}</h1>
      </Text>
      <Box flexDirection={BoxFlexDirection.Column} gap={3}>
        {paragraphs.map((paragraph) => (
          <Text
            key={paragraph}
            color={TextColor.TextAlternative}
            textAlign={TextAlign.Center}
          >
            {paragraph}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

const MarketingMoment = ({
  title,
  description,
  iconName = IconName.Image,
  primaryButtonLabel,
}: MarketingMomentProps) => {
  return (
    <Box
      flexDirection={BoxFlexDirection.Column}
      backgroundColor={BoxBackgroundColor.BackgroundDefault}
      borderColor={BoxBorderColor.BorderMuted}
      borderWidth={1}
      className="h-[812px] w-[390px] shrink-0 overflow-hidden rounded-3xl"
    >
      <Box
        flexDirection={BoxFlexDirection.Column}
        paddingHorizontal={6}
        paddingTop={4}
        className="mt-12"
      >
        <MarketingMomentTitle title={title} description={description} />
      </Box>

      <Box
        flexDirection={BoxFlexDirection.Column}
        alignItems={BoxAlignItems.Center}
        justifyContent={BoxJustifyContent.Center}
        paddingHorizontal={6}
        className="min-h-0 w-full flex-1"
      >
        <MarketingMomentArtwork iconName={iconName} />
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
        >
          Not now
        </Button>
      </Box>
    </Box>
  );
};

const meta: Meta<typeof MarketingMoment> = {
  title: 'Examples/Marketing Moments',
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
  decorators: [
    (Story) => (
      <Box padding={4}>
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

export const AllMoments: Story = {
  name: 'All moments',
  render: () => (
    <Box
      flexDirection={BoxFlexDirection.Row}
      flexWrap={BoxFlexWrap.Wrap}
      gap={4}
    >
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
