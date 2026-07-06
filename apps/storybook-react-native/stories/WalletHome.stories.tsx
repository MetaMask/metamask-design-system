import {
  AvatarAccount,
  AvatarAccountSize,
  AvatarToken,
  AvatarTokenSize,
  BadgeNetwork,
  BadgeWrapper,
  Box,
  BoxAlignItems,
  BoxBackgroundColor,
  BoxFlexDirection,
  BoxFlexWrap,
  Button,
  ButtonSize,
  ButtonVariant,
  Card,
  FontWeight,
  HeaderRoot,
  Icon,
  IconColor,
  IconName,
  IconSize,
  ListItem,
  MainActionButton,
  SectionDivider,
  SectionHeader,
  SelectButton,
  SelectButtonEndArrow,
  SelectButtonVariant,
  SensitiveText,
  SensitiveTextLength,
  Text,
  TextButton,
  TextColor,
  TextVariant,
  TitleHub,
} from '@metamask/design-system-react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

const meta: Meta = {
  title: 'Examples/Wallet Home',
  component: () => null,
};

export default meta;
type Story = StoryObj;

const BNB_NETWORK_URI =
  'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png';
const ETH_NETWORK_URI =
  'https://assets.coingecko.com/coins/images/279/small/ethereum.png';
const BTC_TOKEN_URI =
  'https://assets.coingecko.com/coins/images/1/small/bitcoin.png';

const noopPress = () => undefined;

const TOP_TRADERS = [
  {
    address: '0xb7981234567890abcdef1234567890abcdef12',
    profit: '+$754.5K',
  },
  {
    address: '0xe8db9876543210fedcba9876543210fedcba98',
    profit: '+$307.2K',
  },
  {
    address: '0xa1c24567890123456789012345678901234567',
    profit: '+$198.4K',
  },
] as const;

const formatTraderAddress = (address: string) => `${address.slice(0, 6)}...`;

type TopTraderCardProps = {
  address: string;
  profit: string;
};

const TopTraderCard: React.FC<TopTraderCardProps> = ({ address, profit }) => (
  <Card twClassName="w-40 shrink-0 border-0 bg-section p-3 rounded-xl">
    <Box
      flexDirection={BoxFlexDirection.Row}
      alignItems={BoxAlignItems.Center}
      gap={3}
      twClassName="mb-3"
    >
      <AvatarAccount address={address} size={AvatarAccountSize.Lg} />
      <Box flexDirection={BoxFlexDirection.Column} twClassName="min-w-0 flex-1">
        <Text
          variant={TextVariant.BodyMd}
          fontWeight={FontWeight.Medium}
          numberOfLines={1}
        >
          {formatTraderAddress(address)}
        </Text>
        <Text
          variant={TextVariant.BodyMd}
          fontWeight={FontWeight.Medium}
          color={TextColor.SuccessDefault}
          numberOfLines={1}
        >
          {profit}
        </Text>
      </Box>
    </Box>
    <Button
      variant={ButtonVariant.Primary}
      size={ButtonSize.Sm}
      isFullWidth
      onPress={noopPress}
    >
      Follow
    </Button>
  </Card>
);

type TokenRowProps = {
  name: string;
  symbol: string;
  tokenUri: string;
  networkUri: string;
  networkName: string;
  marketPrice: string;
  changePercent?: string;
  isPositiveChange?: boolean;
  earnLabel?: boolean;
  fiatValue: string;
  tokenAmount: string;
  isVerified?: boolean;
  isBalanceHidden: boolean;
};

const TokenAvatar: React.FC<{
  name: string;
  tokenUri: string;
  networkUri: string;
  networkName: string;
}> = ({ name, tokenUri, networkUri, networkName }) => (
  <BadgeWrapper
    badge={<BadgeNetwork name={networkName} src={{ uri: networkUri }} />}
  >
    <AvatarToken
      name={name}
      src={{ uri: tokenUri }}
      size={AvatarTokenSize.Lg}
    />
  </BadgeWrapper>
);

const VerifiedBadge = () => (
  <Icon
    name={IconName.VerifiedFilled}
    size={IconSize.Sm}
    color={IconColor.InfoDefault}
  />
);

const TokenRow: React.FC<TokenRowProps> = ({
  name,
  symbol,
  tokenUri,
  networkUri,
  networkName,
  marketPrice,
  changePercent,
  isPositiveChange = false,
  earnLabel = false,
  fiatValue,
  tokenAmount,
  isVerified = true,
  isBalanceHidden,
}) => (
  <ListItem
    isInteractive
    onPress={noopPress}
    avatar={
      <TokenAvatar
        name={symbol}
        tokenUri={tokenUri}
        networkUri={networkUri}
        networkName={networkName}
      />
    }
    title={name}
    titleProps={{ fontWeight: FontWeight.Medium }}
    titleEndAccessory={isVerified ? <VerifiedBadge /> : undefined}
    description={
      earnLabel ? (
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          gap={1}
        >
          <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
            {marketPrice}
          </Text>
          <TextButton onPress={noopPress}>Earn</TextButton>
        </Box>
      ) : (
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          gap={1}
        >
          <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
            {marketPrice}
          </Text>
          <Text
            variant={TextVariant.BodySm}
            color={
              isPositiveChange
                ? TextColor.SuccessDefault
                : TextColor.ErrorDefault
            }
          >
            {changePercent}
          </Text>
        </Box>
      )
    }
    value={
      <SensitiveText
        variant={TextVariant.BodyMd}
        fontWeight={FontWeight.Medium}
        isHidden={isBalanceHidden}
        length={String(fiatValue.length)}
      >
        {fiatValue}
      </SensitiveText>
    }
    subvalue={
      <SensitiveText
        variant={TextVariant.BodySm}
        color={TextColor.TextAlternative}
        isHidden={isBalanceHidden}
        length={String(tokenAmount.length)}
      >
        {tokenAmount}
      </SensitiveText>
    }
  />
);

type PerpetualRowProps = {
  title: string;
  description: string;
  value: string;
  subvalue: string;
  tokenUri: string;
  tokenName: string;
  isBalanceHidden: boolean;
  subvalueColor?: TextColor;
  isSubvalueSensitive?: boolean;
};

const PerpetualRow: React.FC<PerpetualRowProps> = ({
  title,
  description,
  value,
  subvalue,
  tokenUri,
  tokenName,
  isBalanceHidden,
  subvalueColor = TextColor.TextAlternative,
  isSubvalueSensitive = true,
}) => (
  <ListItem
    isInteractive
    onPress={noopPress}
    avatar={
      <AvatarToken
        name={tokenName}
        src={{ uri: tokenUri }}
        size={AvatarTokenSize.Lg}
      />
    }
    title={title}
    titleProps={{ fontWeight: FontWeight.Medium }}
    description={description}
    descriptionProps={{ color: TextColor.TextAlternative }}
    value={
      <SensitiveText
        variant={TextVariant.BodyMd}
        fontWeight={FontWeight.Medium}
        isHidden={isBalanceHidden}
        length={String(value.length)}
      >
        {value}
      </SensitiveText>
    }
    subvalue={
      isSubvalueSensitive ? (
        <SensitiveText
          variant={TextVariant.BodySm}
          color={subvalueColor}
          isHidden={isBalanceHidden}
          length={String(subvalue.length)}
        >
          {subvalue}
        </SensitiveText>
      ) : (
        subvalue
      )
    }
    subvalueProps={
      isSubvalueSensitive
        ? undefined
        : {
            color: subvalueColor,
            variant: TextVariant.BodySm,
          }
    }
  />
);

const WalletHome: React.FC = () => {
  const tw = useTailwind();
  const [isBalanceHidden, setIsBalanceHidden] = useState(false);

  const toggleBalanceVisibility = () => {
    setIsBalanceHidden((hidden) => !hidden);
  };

  return (
    <ScrollView style={tw`flex-1 bg-default`}>
      <Box
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
        twClassName="w-full pb-4"
      >
        {/* Header */}
        <HeaderRoot
          endButtonIconProps={[
            {
              iconName: IconName.Menu,
              accessibilityLabel: 'Menu',
              onPress: noopPress,
            },
            {
              iconName: IconName.Wallet,
              accessibilityLabel: 'Wallet',
              onPress: noopPress,
            },
            {
              iconName: IconName.Scan,
              accessibilityLabel: 'Scan',
              onPress: noopPress,
            },
          ]}
        >
          <Box alignItems={BoxAlignItems.Center} twClassName="min-w-0 flex-1">
            <SelectButton
              value="Account 1 with a very long name that should be truncated"
              placeholder="Select account"
              variant={SelectButtonVariant.Tertiary}
              endArrowDirection={SelectButtonEndArrow.Down}
              onPress={noopPress}
              accessibilityLabel="Switch Account"
              textProps={{
                variant: TextVariant.BodyMd,
                color: TextColor.TextDefault,
                numberOfLines: 1,
                ellipsizeMode: 'tail',
              }}
              twClassName="min-w-0 max-w-full -ml-2"
            />
          </Box>
        </HeaderRoot>

        {/* Balance */}
        <Box paddingHorizontal={4} paddingTop={2} paddingBottom={2}>
          <TitleHub
            title=""
            amount={
              <SensitiveText
                variant={TextVariant.DisplayLg}
                isHidden={isBalanceHidden}
                length={SensitiveTextLength.Medium}
                accessibilityRole="button"
                accessibilityLabel={
                  isBalanceHidden ? 'Show balance' : 'Hide balance'
                }
                onPress={toggleBalanceVisibility}
              >
                $283.36
              </SensitiveText>
            }
            bottomLabel="-$5.2 (-1.80%)"
            bottomLabelProps={{ color: TextColor.ErrorDefault }}
          />
        </Box>

        {/* Primary actions */}
        <Box flexDirection={BoxFlexDirection.Row} gap={2} padding={4}>
          <MainActionButton
            iconName={IconName.AttachMoney}
            label="Buy"
            twClassName="flex-1"
            onPress={noopPress}
          />
          <MainActionButton
            iconName={IconName.SwapVertical}
            label="Swap"
            twClassName="flex-1"
            onPress={noopPress}
          />
          <MainActionButton
            iconName={IconName.Send}
            label="Send"
            twClassName="flex-1"
            onPress={noopPress}
          />
          <MainActionButton
            iconName={IconName.Received}
            label="Receive"
            twClassName="flex-1"
            onPress={noopPress}
          />
        </Box>

        {/* Secondary actions */}
        <Box
          flexDirection={BoxFlexDirection.Row}
          flexWrap={BoxFlexWrap.Wrap}
          gap={2}
          paddingHorizontal={4}
          paddingBottom={2}
        >
          <Button
            variant={ButtonVariant.Secondary}
            size={ButtonSize.Sm}
            startIconName={IconName.Candlestick}
            onPress={null}
          >
            Perpetuals
          </Button>
          <Button
            variant={ButtonVariant.Secondary}
            size={ButtonSize.Sm}
            startIconName={IconName.Predictions}
            onPress={null}
          >
            Predictions
          </Button>
          <Button
            variant={ButtonVariant.Secondary}
            size={ButtonSize.Sm}
            startIconName={IconName.Coin}
            onPress={null}
          >
            Stocks
          </Button>
        </Box>

        <SectionDivider />

        {/* Tokens */}
        <SectionHeader
          title="Tokens"
          isInteractive
          onPress={noopPress}
          accessibilityLabel="View all tokens"
        />

        <TokenRow
          name="BNB"
          symbol="BNB"
          tokenUri={BNB_NETWORK_URI}
          networkUri={BNB_NETWORK_URI}
          networkName="BNB Chain"
          marketPrice="$552.91"
          changePercent="-2.74%"
          fiatValue="$44.32"
          tokenAmount="0.08016 BNB"
          isBalanceHidden={isBalanceHidden}
        />

        <TokenRow
          name="MetaMask USD"
          symbol="MUSD"
          tokenUri="https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png"
          networkUri={ETH_NETWORK_URI}
          networkName="Ethereum"
          marketPrice="$0.9993"
          changePercent="-0.05%"
          fiatValue="$31.95"
          tokenAmount="31.97626 MUSD"
          isBalanceHidden={isBalanceHidden}
        />

        <TokenRow
          name="Ethereum"
          symbol="ETH"
          tokenUri={ETH_NETWORK_URI}
          networkUri={ETH_NETWORK_URI}
          networkName="Ethereum"
          marketPrice="$1,566.71"
          changePercent="-4.78%"
          fiatValue="$28.95"
          tokenAmount="0.01848 ETH"
          isBalanceHidden={isBalanceHidden}
        />

        <TokenRow
          name="USD Coin (Native)"
          symbol="USDC"
          tokenUri="https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png"
          networkUri={ETH_NETWORK_URI}
          networkName="Ethereum"
          marketPrice="$0.9997"
          earnLabel
          fiatValue="$26.50"
          tokenAmount="26.51007 USDC"
          isBalanceHidden={isBalanceHidden}
        />

        <SectionDivider />

        {/* Perpetuals */}
        <SectionHeader
          title="Perpetuals"
          isInteractive
          onPress={noopPress}
          accessibilityLabel="View all perpetuals"
        >
          <Box
            flexDirection={BoxFlexDirection.Row}
            alignItems={BoxAlignItems.Center}
            gap={1}
          >
            <SensitiveText
              variant={TextVariant.BodySm}
              fontWeight={FontWeight.Medium}
              color={TextColor.ErrorDefault}
              isHidden={isBalanceHidden}
              length="13"
            >
              -$0.33 (-9.4%)
            </SensitiveText>
            <Text
              variant={TextVariant.BodySm}
              color={TextColor.TextAlternative}
              fontWeight={FontWeight.Medium}
            >
              Unrealized P&L
            </Text>
          </Box>
        </SectionHeader>
        <PerpetualRow
          title="BTC 3x long"
          description="0.00017 BTC"
          value="$10.11"
          subvalue="-$0.33 (-9.4%)"
          tokenUri={BTC_TOKEN_URI}
          tokenName="BTC"
          isBalanceHidden={isBalanceHidden}
          subvalueColor={TextColor.ErrorDefault}
        />
        <PerpetualRow
          title="Limit long"
          description="0.0002 BTC"
          value="$50,000"
          subvalue="Limit price"
          tokenUri={BTC_TOKEN_URI}
          tokenName="BTC"
          isBalanceHidden={isBalanceHidden}
          isSubvalueSensitive={false}
        />

        <SectionDivider />

        {/* Weekly Top Traders */}
        <SectionHeader
          title="Weekly Top Traders"
          isInteractive
          onPress={noopPress}
          accessibilityLabel="View all top traders"
          twClassName="mb-2"
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`gap-3 px-4 pb-4`}
        >
          {TOP_TRADERS.map((trader) => (
            <TopTraderCard
              key={trader.address}
              address={trader.address}
              profit={trader.profit}
            />
          ))}
        </ScrollView>
      </Box>
    </ScrollView>
  );
};

export const Default: Story = {
  render: () => <WalletHome />,
};
