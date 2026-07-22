import {
  AvatarToken,
  AvatarTokenSize,
  BannerAlert,
  BannerAlertSeverity,
  Box,
  BoxAlignItems,
  BoxFlexDirection,
  Button,
  ButtonSize,
  ButtonVariant,
  FontWeight,
  HeaderSubpage,
  Icon,
  IconColor,
  IconName,
  IconSize,
  KeyValueRow,
  KeyValueRowVariant,
  SelectButton,
  SelectButtonSize,
  SelectButtonVariant,
  Text,
  TextColor,
  TextVariant,
} from '@metamask/design-system-react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

const meta: Meta = {
  title: 'Examples/Perps Order Form',
  component: () => null,
};

export default meta;
type Story = StoryObj;

const noopPress = () => undefined;

const BTC_URI = 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png';
const ETH_URI =
  'https://assets.coingecko.com/coins/images/279/small/ethereum.png';

type OrderType = 'market' | 'limit';
type Direction = 'long' | 'short';

// Live price display used in HeaderSubpage description slot
const PriceDescription: React.FC<{
  price: string;
  change: string;
  isPositive: boolean;
}> = ({ price, change, isPositive }) => (
  <Box
    flexDirection={BoxFlexDirection.Row}
    alignItems={BoxAlignItems.Center}
    gap={2}
  >
    <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
      {price}
    </Text>
    <Text
      variant={TextVariant.BodySm}
      color={isPositive ? TextColor.SuccessDefault : TextColor.ErrorDefault}
    >
      {change}
    </Text>
  </Box>
);

// Order form: KeyValueRow.Input for user-editable fields, KeyValueRow.Summary for
// calculated read-only values. Pattern from PRs #33014, #32926, #33243.
const OrderFormContent: React.FC<{
  asset: string;
  assetUri: string;
  price: string;
  priceChange: string;
  isPricePositive: boolean;
  direction: Direction;
  orderType: OrderType;
  onOrderTypePress: () => void;
}> = ({
  asset,
  assetUri,
  price,
  priceChange,
  isPricePositive,
  direction,
  orderType,
  onOrderTypePress,
}) => {
  const tw = useTailwind();
  const isLong = direction === 'long';

  return (
    <View style={tw`flex-1 bg-default`}>
      {/* HeaderSubpage — asset identity, live price, order type selector */}
      <HeaderSubpage
        avatar={
          <AvatarToken
            name={asset}
            src={{ uri: assetUri }}
            size={AvatarTokenSize.Lg}
          />
        }
        title={`${isLong ? 'Long' : 'Short'} ${asset}`}
        description={
          <PriceDescription
            price={price}
            change={priceChange}
            isPositive={isPricePositive}
          />
        }
        onBack={noopPress}
        endAccessory={
          <SelectButton
            variant={SelectButtonVariant.Primary}
            size={SelectButtonSize.Md}
            placeholder={orderType === 'market' ? 'Market' : 'Limit'}
            value={orderType === 'market' ? 'Market' : 'Limit'}
            onPress={onOrderTypePress}
          />
        }
        twClassName="min-h-14 h-auto bg-default justify-center pr-4"
      />

      <ScrollView
        style={tw`flex-1`}
        contentContainerStyle={tw`px-0 pb-8`}
        showsVerticalScrollIndicator={false}
      >
        {/* Service interruption — BannerAlert Warning pattern */}
        <Box paddingHorizontal={4} paddingTop={3} paddingBottom={1}>
          <BannerAlert
            severity={BannerAlertSeverity.Warning}
            title="Service interruption"
            description="Some trading services may be temporarily unavailable. Orders can still be placed but may experience delays."
            actionButtonLabel="Contact support"
            actionButtonOnPress={noopPress}
          />
        </Box>

        {/* Amount display placeholder */}
        <Box paddingHorizontal={4} paddingTop={4} paddingBottom={2}>
          <Text
            variant={TextVariant.DisplayMd}
            fontWeight={FontWeight.Medium}
            color={TextColor.TextMuted}
          >
            $0
          </Text>
          <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
            0.00000 {asset}
          </Text>
        </Box>

        {/* Input group — KeyValueRow.Input for user-configurable values */}
        <Box paddingTop={2}>
          {/* Leverage row */}
          <KeyValueRow
            variant={KeyValueRowVariant.Input}
            keyLabel="Leverage"
            keyEndButtonIconProps={{
              iconName: IconName.Info,
              onPress: noopPress,
              accessibilityLabel: 'Leverage info',
            }}
            value="3x"
            valueTextProps={{ color: TextColor.TextDefault }}
          />

          {/* Limit price row — only shown for limit orders */}
          {orderType === 'limit' && (
            <KeyValueRow
              variant={KeyValueRowVariant.Input}
              keyLabel="Limit price"
              value="Set price"
              valueTextProps={{ color: TextColor.TextMuted }}
            />
          )}

          {/* TP/SL row */}
          <KeyValueRow
            variant={KeyValueRowVariant.Input}
            keyLabel="TP / SL"
            keyEndButtonIconProps={{
              iconName: IconName.Info,
              onPress: noopPress,
              accessibilityLabel: 'Take profit / stop loss info',
            }}
            value="TP off, SL off"
            valueTextProps={{ color: TextColor.TextAlternative }}
          />
        </Box>

        {/* Summary group — KeyValueRow.Summary for calculated/read-only values */}
        <Box paddingTop={4}>
          <KeyValueRow
            variant={KeyValueRowVariant.Summary}
            keyLabel="Margin"
            keyEndButtonIconProps={{
              iconName: IconName.Info,
              onPress: noopPress,
              accessibilityLabel: 'Margin info',
            }}
            value="$33.33"
          />

          <KeyValueRow
            variant={KeyValueRowVariant.Summary}
            keyLabel="Liquidation price"
            keyEndButtonIconProps={{
              iconName: IconName.Info,
              onPress: noopPress,
              accessibilityLabel: 'Liquidation price info',
            }}
            value="$72,450"
            valueTextProps={{ color: TextColor.ErrorDefault }}
          />

          <KeyValueRow
            variant={KeyValueRowVariant.Summary}
            keyLabel="Fee"
            keyEndButtonIconProps={{
              iconName: IconName.Info,
              onPress: noopPress,
              accessibilityLabel: 'Fee info',
            }}
            value={
              <Box
                flexDirection={BoxFlexDirection.Row}
                alignItems={BoxAlignItems.Center}
                gap={1}
              >
                <Text
                  variant={TextVariant.BodyMd}
                  color={TextColor.TextAlternative}
                  twClassName="line-through"
                >
                  $0.05
                </Text>
                <Text
                  variant={TextVariant.BodyMd}
                  color={TextColor.SuccessDefault}
                >
                  $0.03
                </Text>
              </Box>
            }
          />

          <KeyValueRow
            variant={KeyValueRowVariant.Summary}
            keyLabel="Slippage"
            keyEndButtonIconProps={{
              iconName: IconName.Info,
              onPress: noopPress,
              accessibilityLabel: 'Slippage info',
            }}
            value={
              <Box
                flexDirection={BoxFlexDirection.Row}
                alignItems={BoxAlignItems.Center}
                gap={1}
              >
                <Text variant={TextVariant.BodyMd}>~0.04%</Text>
                <Icon
                  name={IconName.Edit}
                  size={IconSize.Xs}
                  color={IconColor.IconAlternative}
                />
              </Box>
            }
          />
        </Box>

        {/* Place order button */}
        <Box paddingHorizontal={4} paddingTop={6}>
          <Button
            variant={ButtonVariant.Primary}
            isFullWidth
            size={ButtonSize.Lg}
            onPress={noopPress}
          >
            {isLong ? `Long ${asset}` : `Short ${asset}`}
          </Button>
        </Box>
      </ScrollView>
    </View>
  );
};

// Long BTC market order
const LongBTCMarket: React.FC = () => {
  const [orderType, setOrderType] = useState<OrderType>('market');
  const cycleOrderType = () =>
    setOrderType((t) => (t === 'market' ? 'limit' : 'market'));

  return (
    <OrderFormContent
      asset="BTC"
      assetUri={BTC_URI}
      price="$103,241"
      priceChange="+2.84%"
      isPricePositive
      direction="long"
      orderType={orderType}
      onOrderTypePress={cycleOrderType}
    />
  );
};

// Short ETH market order — shows service interruption banner
const ShortETHMarket: React.FC = () => {
  const [orderType, setOrderType] = useState<OrderType>('market');
  const cycleOrderType = () =>
    setOrderType((t) => (t === 'market' ? 'limit' : 'market'));

  return (
    <OrderFormContent
      asset="ETH"
      assetUri={ETH_URI}
      price="$2,456"
      priceChange="-1.23%"
      isPricePositive={false}
      direction="short"
      orderType={orderType}
      onOrderTypePress={cycleOrderType}
    />
  );
};

export const LongBTC: Story = {
  render: () => <LongBTCMarket />,
  name: 'Long BTC (market order)',
};

export const ShortETH: Story = {
  render: () => <ShortETHMarket />,
  name: 'Short ETH (with service interruption)',
};
