import {
  AvatarToken,
  AvatarTokenSize,
  Box,
  Button,
  ButtonIcon,
  ButtonIconSize,
  ButtonIconVariant,
  ButtonSize,
  ButtonVariant,
  FilterButton,
  FontWeight,
  IconName,
  ListItem,
  SectionDivider,
  SectionHeader,
  SegmentedControl,
  SensitiveTextLength,
  Tag,
  TagSeverity,
  Text,
  TextColor,
  TextVariant,
} from '@metamask/design-system-react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

const meta: Meta = {
  title: 'Examples/Perps Market List',
  component: () => null,
};

export default meta;
type Story = StoryObj;

const noopPress = () => undefined;

const BTC_URI =
  'https://assets.coingecko.com/coins/images/1/small/bitcoin.png';
const ETH_URI =
  'https://assets.coingecko.com/coins/images/279/small/ethereum.png';
const SOL_URI =
  'https://assets.coingecko.com/coins/images/4128/small/solana.png';
const ARB_URI =
  'https://assets.coingecko.com/coins/images/16547/small/photo_2023-03-29_21.47.00.jpeg';
const DOGE_URI =
  'https://assets.coingecko.com/coins/images/5/small/dogecoin.png';

type MarketRowData = {
  symbol: string;
  name: string;
  uri: string;
  price: string;
  change: string;
  isPositive: boolean;
  volume: string;
  maxLeverage: string;
  hasNewBadge?: boolean;
};

const MARKETS: MarketRowData[] = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    uri: BTC_URI,
    price: '$103,241',
    change: '+2.84%',
    isPositive: true,
    volume: '$2.1B Vol',
    maxLeverage: '40x',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    uri: ETH_URI,
    price: '$2,456',
    change: '-1.23%',
    isPositive: false,
    volume: '$890M Vol',
    maxLeverage: '25x',
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    uri: SOL_URI,
    price: '$178.34',
    change: '+5.61%',
    isPositive: true,
    volume: '$340M Vol',
    maxLeverage: '20x',
    hasNewBadge: true,
  },
  {
    symbol: 'ARB',
    name: 'Arbitrum',
    uri: ARB_URI,
    price: '$0.412',
    change: '-3.17%',
    isPositive: false,
    volume: '$67M Vol',
    maxLeverage: '10x',
  },
  {
    symbol: 'DOGE',
    name: 'Dogecoin',
    uri: DOGE_URI,
    price: '$0.1824',
    change: '+8.92%',
    isPositive: true,
    volume: '$520M Vol',
    maxLeverage: '10x',
    hasNewBadge: true,
  },
];

const GAINERS: MarketRowData[] = [...MARKETS]
  .filter((m) => m.isPositive)
  .sort((a, b) => parseFloat(b.change) - parseFloat(a.change));

const LOSERS: MarketRowData[] = [...MARKETS]
  .filter((m) => !m.isPositive)
  .sort((a, b) => parseFloat(a.change) - parseFloat(b.change));

/** Compact leverage badge rendered as the title end accessory */
const LeverageBadge: React.FC<{ label: string }> = ({ label }) => (
  <Tag severity={TagSeverity.Neutral} twClassName="ml-1">
    {label}
  </Tag>
);

type MarketRowProps = {
  market: MarketRowData;
  compact?: boolean;
  showAddButton?: boolean;
};

const MarketRow: React.FC<MarketRowProps> = ({
  market,
  compact = false,
  showAddButton = false,
}) => (
  <ListItem
    isInteractive
    onPress={noopPress}
    avatar={
      <AvatarToken
        name={market.symbol}
        src={{ uri: market.uri }}
        size={AvatarTokenSize.Lg}
      />
    }
    title={market.symbol}
    titleProps={{ fontWeight: FontWeight.Medium, numberOfLines: 1 }}
    titleEndAccessory={<LeverageBadge label={market.maxLeverage} />}
    description={`${market.name} · ${market.volume}`}
    descriptionProps={{ color: TextColor.TextAlternative }}
    value={market.price}
    valueProps={{ fontWeight: FontWeight.Medium }}
    subvalue={market.change}
    subvalueProps={{
      color: market.isPositive
        ? TextColor.SuccessDefault
        : TextColor.ErrorDefault,
    }}
    endAccessory={
      showAddButton ? (
        <ButtonIcon
          iconName={IconName.Add}
          size={ButtonIconSize.Md}
          variant={ButtonIconVariant.Filled}
          onPress={noopPress}
          accessibilityLabel={`Add ${market.symbol} to watchlist`}
        />
      ) : undefined
    }
    accessoryGap={showAddButton ? 3 : undefined}
    twClassName={compact ? 'py-2 min-h-0' : undefined}
  />
);

/** Top movers section with gainers/losers toggle */
const TopMoversSection: React.FC = () => {
  const [direction, setDirection] = useState<'gainers' | 'losers'>('gainers');
  const rows = direction === 'gainers' ? GAINERS : LOSERS;

  return (
    <Box paddingBottom={3}>
      <SectionHeader
        title="Top Movers"
        isInteractive
        onPress={noopPress}
        accessibilityLabel="View all top movers"
      />
      <Box twClassName="px-4 mb-3">
        <SegmentedControl
          value={direction}
          onChange={(v) => setDirection(v as 'gainers' | 'losers')}
          isFullWidth
        >
          <FilterButton value="gainers">Gainers</FilterButton>
          <FilterButton value="losers">Losers</FilterButton>
        </SegmentedControl>
      </Box>
      {rows.map((market) => (
        <MarketRow key={market.symbol} market={market} compact />
      ))}
    </Box>
  );
};

/** Full market list with all metadata slots */
const FullMarketListSection: React.FC = () => (
  <Box paddingBottom={3}>
    <SectionHeader
      title="All Markets"
      isInteractive
      onPress={noopPress}
      accessibilityLabel="View all markets"
    />
    {MARKETS.map((market) => (
      <MarketRow key={market.symbol} market={market} />
    ))}
  </Box>
);

/** Watchlist section demonstrating ButtonIcon add affordance */
const WatchlistSection: React.FC = () => (
  <Box paddingBottom={3}>
    <SectionHeader title="Watchlist" accessibilityLabel="Watchlist" />
    <Box paddingHorizontal={4} paddingBottom={2}>
      <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
        Add markets to follow their prices at a glance.
      </Text>
    </Box>
    {MARKETS.slice(0, 3).map((market) => (
      <MarketRow key={market.symbol} market={market} showAddButton />
    ))}
  </Box>
);

/** Position row — ListItem used for open perpetual positions */
const PositionRow: React.FC<{
  symbol: string;
  uri: string;
  direction: 'long' | 'short';
  leverage: string;
  size: string;
  value: string;
  pnl: string;
  isPositive: boolean;
  isBalanceHidden: boolean;
}> = ({
  symbol,
  uri,
  direction,
  leverage,
  size,
  value,
  pnl,
  isPositive,
  isBalanceHidden,
}) => (
  <ListItem
    isInteractive
    onPress={noopPress}
    avatar={
      <AvatarToken
        name={symbol}
        src={{ uri }}
        size={AvatarTokenSize.Lg}
      />
    }
    title={`${direction === 'long' ? 'Long' : 'Short'} ${symbol}`}
    titleProps={{ fontWeight: FontWeight.Medium }}
    titleEndAccessory={<LeverageBadge label={leverage} />}
    description={`${size} ${symbol}`}
    descriptionProps={{ color: TextColor.TextAlternative }}
    value={value}
    valueProps={{
      fontWeight: FontWeight.Medium,
      isHidden: isBalanceHidden,
      length: SensitiveTextLength.Short,
    }}
    subvalue={pnl}
    subvalueProps={{
      color: isPositive ? TextColor.SuccessDefault : TextColor.ErrorDefault,
      isHidden: isBalanceHidden,
      length: SensitiveTextLength.Short,
    }}
  />
);

const PerpsMarketList: React.FC = () => {
  const tw = useTailwind();
  const [isBalanceHidden] = useState(false);

  return (
    <ScrollView style={tw`flex-1 bg-default`}>
      <Box twClassName="w-full pb-8">
        <TopMoversSection />
        <SectionDivider />

        <FullMarketListSection />
        <SectionDivider />

        {/* Open positions — uses the same ListItem pattern as market rows */}
        <Box paddingBottom={3}>
          <SectionHeader
            title="Positions"
            isInteractive
            onPress={noopPress}
            accessibilityLabel="View all positions"
          >
            <Text
              variant={TextVariant.BodySm}
              color={TextColor.ErrorDefault}
              fontWeight={FontWeight.Medium}
            >
              -$0.33 Unrealized P&L
            </Text>
          </SectionHeader>
          <PositionRow
            symbol="BTC"
            uri={BTC_URI}
            direction="long"
            leverage="3x"
            size="0.00017"
            value="$10.11"
            pnl="-$0.33 (-9.4%)"
            isPositive={false}
            isBalanceHidden={isBalanceHidden}
          />
          <PositionRow
            symbol="ETH"
            uri={ETH_URI}
            direction="short"
            leverage="5x"
            size="0.412"
            value="$820.00"
            pnl="+$24.50 (+3.1%)"
            isPositive
            isBalanceHidden={isBalanceHidden}
          />
        </Box>
        <SectionDivider />

        <WatchlistSection />

        <Box paddingHorizontal={4} paddingTop={2}>
          <Button
            variant={ButtonVariant.Secondary}
            isFullWidth
            size={ButtonSize.Lg}
            onPress={noopPress}
          >
            Browse all markets
          </Button>
        </Box>
      </Box>
    </ScrollView>
  );
};

export const Default: Story = {
  render: () => <PerpsMarketList />,
};
