import {
  BannerAlert,
  BannerAlertSeverity,
  Box,
  BoxAlignItems,
  BoxFlexDirection,
  Button,
  ButtonSize,
  ButtonVariant,
  FilterButton,
  FilterButtonGroup,
  FilterButtonSize,
  FilterButtonVariant,
  IconName,
  KeyValueColumn,
  SectionDivider,
  SectionHeader,
  Tag,
  TagSeverity,
  Text,
  TextColor,
  TextVariant,
} from '@metamask/design-system-react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

const meta: Meta = {
  title: 'Examples/Perps Market Stats',
  component: () => null,
};

export default meta;
type Story = StoryObj;

const noopPress = () => undefined;

type MarketCategory = 'all' | 'crypto' | 'forex' | 'commodities';

const CATEGORIES: { value: MarketCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'crypto', label: 'Crypto' },
  { value: 'forex', label: 'Forex' },
  { value: 'commodities', label: 'Commodities' },
];

// Category filter pills — FilterButtonGroup + FilterButton (PRs #32616, #32451)
const CategoryFilterPills: React.FC = () => {
  const [selected, setSelected] = useState<MarketCategory>('crypto');

  return (
    <Box paddingHorizontal={4} paddingVertical={3}>
      <FilterButtonGroup
        value={selected}
        onChange={(v) => setSelected(v as MarketCategory)}
        variant={FilterButtonVariant.Primary}
        twClassName="gap-2"
      >
        {CATEGORIES.map(({ value, label }) => (
          <FilterButton key={value} value={value} size={FilterButtonSize.Md}>
            {label}
          </FilterButton>
        ))}
      </FilterButtonGroup>
    </Box>
  );
};

// Stats card: 2×2 KeyValueColumn grid, Tag in SectionHeader title (PR #33550)
const MarketStatsCard: React.FC<{
  symbol: string;
  dexName?: string;
  volume24h: string;
  openInterest: string;
  fundingRate: string;
  isFundingPositive: boolean;
  oraclePrice: string;
  onOrderBookPress?: () => void;
}> = ({
  symbol,
  dexName,
  volume24h,
  openInterest,
  fundingRate,
  isFundingPositive,
  oraclePrice,
  onOrderBookPress,
}) => {
  const statsTitle = (
    <Box
      flexDirection={BoxFlexDirection.Row}
      alignItems={BoxAlignItems.Center}
      gap={2}
    >
      <Text variant={TextVariant.HeadingMd} color={TextColor.TextDefault}>
        {symbol} Stats
      </Text>
      {dexName ? (
        <Tag severity={TagSeverity.Neutral}>{dexName.toUpperCase()}</Tag>
      ) : null}
    </Box>
  );

  return (
    <Box paddingBottom={3}>
      <SectionHeader title={statsTitle} />
      <Box paddingHorizontal={4}>
        {/* Row 1 */}
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 16,
          }}
        >
          <KeyValueColumn
            style={{ flex: 1 }}
            keyLabel="24h Volume"
            value={volume24h}
          />
          <KeyValueColumn
            style={{ flex: 1 }}
            keyLabel="Open Interest"
            keyEndButtonIconProps={{
              iconName: IconName.Info,
              onPress: noopPress,
              accessibilityLabel: 'Open interest info',
            }}
            value={openInterest}
          />
        </View>

        {/* Row 2 */}
        <View style={{ flexDirection: 'row', marginBottom: 16 }}>
          <KeyValueColumn
            style={{ flex: 1 }}
            keyLabel="Funding Rate"
            keyEndButtonIconProps={{
              iconName: IconName.Info,
              onPress: noopPress,
              accessibilityLabel: 'Funding rate info',
            }}
            value={
              <Text
                variant={TextVariant.BodyMd}
                color={
                  isFundingPositive
                    ? TextColor.SuccessDefault
                    : TextColor.ErrorDefault
                }
              >
                {fundingRate}
              </Text>
            }
          />
          <KeyValueColumn
            style={{ flex: 1 }}
            keyLabel="Oracle Price"
            keyEndButtonIconProps={{
              iconName: IconName.Info,
              onPress: noopPress,
              accessibilityLabel: 'Oracle price info',
            }}
            value={oraclePrice}
          />
        </View>

        {onOrderBookPress ? (
          <Button
            variant={ButtonVariant.Secondary}
            isFullWidth
            size={ButtonSize.Lg}
            onPress={onOrderBookPress}
          >
            View Order Book
          </Button>
        ) : null}
      </Box>
    </Box>
  );
};

// Full stats screen: CategoryFilterPills + MarketStatsCard + BannerAlert
const PerpsMarketStats: React.FC = () => {
  const tw = useTailwind();

  return (
    <ScrollView style={tw`flex-1 bg-default`}>
      <Box twClassName="w-full pb-8">
        {/* Category filter */}
        <CategoryFilterPills />
        <SectionDivider />

        {/* BTC stats */}
        <MarketStatsCard
          symbol="BTC"
          dexName="HyperLiquid"
          volume24h="$2.1B"
          openInterest="$890M"
          fundingRate="+0.0100%"
          isFundingPositive
          oraclePrice="$103,198"
          onOrderBookPress={noopPress}
        />
        <SectionDivider />

        {/* ETH stats with negative funding rate */}
        <MarketStatsCard
          symbol="ETH"
          dexName="HyperLiquid"
          volume24h="$890M"
          openInterest="$342M"
          fundingRate="-0.0050%"
          isFundingPositive={false}
          oraclePrice="$2,453"
          onOrderBookPress={noopPress}
        />
        <SectionDivider />

        {/* SOL stats with low-liquidity warning */}
        <Box paddingBottom={3}>
          <Box paddingHorizontal={4} paddingTop={3} paddingBottom={1}>
            <BannerAlert
              severity={BannerAlertSeverity.Warning}
              title="Low liquidity"
              description="This market has limited open interest. Large orders may experience significant slippage."
            />
          </Box>
          <MarketStatsCard
            symbol="SOL"
            dexName="HyperLiquid"
            volume24h="$340M"
            openInterest="$58M"
            fundingRate="+0.0230%"
            isFundingPositive
            oraclePrice="$178.12"
          />
        </Box>
      </Box>
    </ScrollView>
  );
};

export const Default: Story = {
  render: () => <PerpsMarketStats />,
};

// Isolated stat card — KeyValueColumn layout and Tag-in-title pattern in isolation
const IsolatedStatsCard: React.FC = () => {
  const tw = useTailwind();
  return (
    <View style={tw`flex-1 bg-default pt-4`}>
      <MarketStatsCard
        symbol="BTC"
        dexName="HyperLiquid"
        volume24h="$2.1B"
        openInterest="$890M"
        fundingRate="+0.0100%"
        isFundingPositive
        oraclePrice="$103,198"
        onOrderBookPress={noopPress}
      />
    </View>
  );
};

export const StatsCardOnly: Story = {
  render: () => <IsolatedStatsCard />,
  name: 'Stats card (KeyValueColumn + Tag)',
};

// Isolated filter pills — FilterButtonGroup + FilterButton in isolation
const IsolatedFilterPills: React.FC = () => {
  const tw = useTailwind();
  return (
    <View style={tw`flex-1 bg-default`}>
      <CategoryFilterPills />
    </View>
  );
};

export const FilterPillsOnly: Story = {
  render: () => <IsolatedFilterPills />,
  name: 'Category filter pills (FilterButtonGroup)',
};
