import {
  AvatarAccount,
  AvatarAccountVariant,
  AvatarBaseShape,
  AvatarToken,
  AvatarTokenSize,
  BadgeCount,
  BadgeWrapper,
  BadgeNetwork,
  Button,
  ButtonBase,
  ButtonIcon,
  ButtonSize,
  ButtonVariant,
  FontWeight,
  Icon,
  IconName,
  IconColor,
  Text,
  TextButton,
  TextColor,
  TextVariant,
  BadgeWrapperPosition,
  BadgeStatus,
  BadgeStatusStatus,
  IconSize,
} from '@metamask/design-system-react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View, ScrollView, Pressable } from 'react-native';

const meta: Meta = {
  title: 'Examples/Wallet Home',
  component: () => null,
};

export default meta;
type Story = StoryObj;

const WalletHome: React.FC = () => {
  const tw = useTailwind();

  return (
    <ScrollView style={tw`flex-1 bg-background-default`}>
      {/* Container */}
      <View style={tw`w-full bg-background-default py-4`}>
        {/* Header */}
        <View style={tw`border-b border-border-muted px-4 py-4`}>
          <View style={tw`flex-row items-center justify-between`}>
            <View style={tw`flex-1 flex-row items-center overflow-hidden`}>
              <AvatarAccount
                shape={AvatarBaseShape.Square}
                variant={AvatarAccountVariant.Maskicon}
                address="0x1234567890123456789012345678901234567890"
              />
              <View style={tw`ml-2 flex-1`}>
                <Text variant={TextVariant.HeadingMd} numberOfLines={1}>
                  DeFi Account
                </Text>
              </View>
              <ButtonIcon
                iconName={IconName.ArrowDown}
                accessibilityLabel="Switch Account"
              />
            </View>
            <View style={tw`ml-2 flex-row items-center`}>
              <ButtonIcon iconName={IconName.Copy} accessibilityLabel="Copy" />
              <ButtonIcon
                iconName={IconName.Global}
                accessibilityLabel="Network"
              />
              <BadgeWrapper
                badge={<BadgeCount count={10} max={9} />}
                position={BadgeWrapperPosition.TopRight}
              >
                <ButtonIcon
                  iconName={IconName.Menu}
                  accessibilityLabel="Menu"
                />
              </BadgeWrapper>
            </View>
          </View>
        </View>

        {/* Balance */}
        <View style={tw`px-4 py-4`}>
          <Text variant={TextVariant.DisplayMd}>$10,528.46</Text>
          <View style={tw`flex-row items-center`}>
            <Icon name={IconName.Arrow2Up} color={IconColor.SuccessDefault} />
            <Text color={TextColor.TextAlternative}>$367.00 (+0.66%)</Text>
          </View>
        </View>

        {/* Actions */}
        <View style={tw`flex-row gap-3 px-4 py-4`}>
          <ButtonBase twClassName="h-20 flex-1 rounded-lg bg-background-muted px-0 py-4">
            <View style={tw`flex-col items-center justify-center`}>
              <Icon name={IconName.Bank} />
              <Text fontWeight={FontWeight.Medium}>Buy/Sell</Text>
            </View>
          </ButtonBase>
          <ButtonBase twClassName="h-20 flex-1 rounded-lg bg-background-muted px-0 py-4">
            <View style={tw`flex-col items-center justify-center`}>
              <Icon name={IconName.SwapHorizontal} />
              <Text fontWeight={FontWeight.Medium}>Swap</Text>
            </View>
          </ButtonBase>
          <ButtonBase twClassName="h-20 flex-1 rounded-lg bg-background-muted px-0 py-4">
            <View style={tw`flex-col items-center justify-center`}>
              <Icon name={IconName.Receive} />
              <Text fontWeight={FontWeight.Medium}>Receive</Text>
            </View>
          </ButtonBase>
          <ButtonBase twClassName="h-20 flex-1 rounded-lg bg-background-muted px-0 py-4">
            <View style={tw`flex-col items-center justify-center`}>
              <Icon name={IconName.Send} />
              <Text fontWeight={FontWeight.Medium}>Send</Text>
            </View>
          </ButtonBase>
        </View>

        {/* Tabs */}
        <View style={tw`border-b border-border-muted px-4`}>
          <View style={tw`flex-row`}>
            <Pressable
              style={tw`flex-1 items-center justify-center border-b-2 border-border-default pb-2 pt-1`}
            >
              <Text fontWeight={FontWeight.Medium}>Tokens</Text>
            </Pressable>
            <Pressable
              style={tw`flex-1 flex-row items-center justify-center pb-2 pt-1`}
            >
              <Text
                fontWeight={FontWeight.Medium}
                color={TextColor.TextAlternative}
              >
                DeFi
              </Text>
              <View style={tw`ml-1`}>
                <BadgeStatus status={BadgeStatusStatus.New} />
              </View>
            </Pressable>
            <Pressable style={tw`flex-1 items-center justify-center pb-2 pt-1`}>
              <Text
                fontWeight={FontWeight.Medium}
                color={TextColor.TextAlternative}
              >
                NFTs
              </Text>
            </Pressable>
            <Pressable style={tw`flex-1 items-center justify-center pb-2 pt-1`}>
              <Text
                fontWeight={FontWeight.Medium}
                color={TextColor.TextAlternative}
              >
                Activity
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Token List */}
        <View>
          <View style={tw`flex-row items-center justify-between px-4 py-4`}>
            <View style={tw`flex-row items-center`}>
              <Button
                size={ButtonSize.Sm}
                variant={ButtonVariant.Secondary}
                endIconName={IconName.ArrowDown}
              >
                Popular networks
              </Button>
            </View>
            <View style={tw`flex-row gap-2`}>
              <ButtonIcon
                iconName={IconName.Filter}
                accessibilityLabel="Filter"
              />
              <ButtonIcon
                iconName={IconName.MoreVertical}
                accessibilityLabel="More"
              />
            </View>
          </View>

          {/* Ethereum */}
          <Pressable
            style={tw`w-full flex-row items-center justify-between bg-transparent px-4 py-2`}
          >
            <View style={tw`flex-1 flex-row items-center overflow-hidden`}>
              <BadgeWrapper
                badge={
                  <BadgeNetwork
                    name="Ethereum"
                    src={{
                      uri: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
                    }}
                  />
                }
              >
                <AvatarToken
                  name="ETH"
                  src={{
                    uri: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
                  }}
                  size={AvatarTokenSize.Md}
                />
              </BadgeWrapper>
              <View style={tw`ml-4 flex-1 overflow-hidden`}>
                <View style={tw`flex-row flex-wrap items-center`}>
                  <Text
                    fontWeight={FontWeight.Medium}
                    numberOfLines={1}
                    twClassName="mr-2"
                  >
                    Ethereum •
                  </Text>
                  <TextButton>Earn</TextButton>
                </View>
                <View style={tw`flex-row items-center`}>
                  <Icon
                    name={IconName.Arrow2Up}
                    color={IconColor.SuccessDefault}
                    size={IconSize.Sm}
                  />
                  <Text
                    color={TextColor.TextAlternative}
                    variant={TextVariant.BodySm}
                  >
                    +85.88%
                  </Text>
                </View>
              </View>
            </View>
            <View style={tw`items-end`}>
              <Text>$8,509.44</Text>
              <Text
                color={TextColor.TextAlternative}
                variant={TextVariant.BodySm}
              >
                0.7107 ETH
              </Text>
            </View>
          </Pressable>

          {/* Unibright */}
          <Pressable
            style={tw`w-full flex-row items-center justify-between bg-transparent px-4 py-2`}
          >
            <View style={tw`flex-1 flex-row items-center overflow-hidden`}>
              <BadgeWrapper
                badge={
                  <BadgeNetwork
                    name="Ethereum"
                    src={{
                      uri: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
                    }}
                  />
                }
              >
                <AvatarToken
                  name="UBT"
                  src={{
                    uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2758.png',
                  }}
                  size={AvatarTokenSize.Md}
                />
              </BadgeWrapper>
              <View style={tw`ml-4 flex-1 overflow-hidden`}>
                <Text fontWeight={FontWeight.Medium} numberOfLines={1}>
                  Unibright
                </Text>
                <View style={tw`flex-row items-center`}>
                  <Icon
                    name={IconName.Arrow2Up}
                    color={IconColor.SuccessDefault}
                    size={IconSize.Sm}
                  />
                  <Text
                    color={TextColor.TextAlternative}
                    variant={TextVariant.BodySm}
                  >
                    +85.88%
                  </Text>
                </View>
              </View>
            </View>
            <View style={tw`items-end`}>
              <Text>$1,293.50</Text>
              <Text
                color={TextColor.TextAlternative}
                variant={TextVariant.BodySm}
              >
                0.058 UBT
              </Text>
            </View>
          </Pressable>

          {/* Hopr */}
          <Pressable
            style={tw`w-full flex-row items-center justify-between bg-transparent px-4 py-2`}
          >
            <View style={tw`flex-1 flex-row items-center overflow-hidden`}>
              <BadgeWrapper
                badge={
                  <BadgeNetwork
                    name="Ethereum"
                    src={{
                      uri: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
                    }}
                  />
                }
              >
                <AvatarToken
                  name="HOPR"
                  src={{
                    uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6520.png',
                  }}
                  size={AvatarTokenSize.Md}
                />
              </BadgeWrapper>
              <View style={tw`ml-4 flex-1 overflow-hidden`}>
                <Text fontWeight={FontWeight.Medium} numberOfLines={1}>
                  Hopr
                </Text>
                <View style={tw`flex-row items-center`}>
                  <Icon
                    name={IconName.Arrow2Up}
                    color={IconColor.SuccessDefault}
                    size={IconSize.Sm}
                  />
                  <Text
                    color={TextColor.TextAlternative}
                    variant={TextVariant.BodySm}
                  >
                    +85.88%
                  </Text>
                </View>
              </View>
            </View>
            <View style={tw`items-end`}>
              <Text>$550.00</Text>
              <Text
                color={TextColor.TextAlternative}
                variant={TextVariant.BodySm}
              >
                12.44 HOPR
              </Text>
            </View>
          </Pressable>

          {/* USDC */}
          <Pressable
            style={tw`w-full flex-row items-center justify-between bg-transparent px-4 py-2`}
          >
            <View style={tw`flex-1 flex-row items-center overflow-hidden`}>
              <BadgeWrapper
                badge={
                  <BadgeNetwork
                    name="Ethereum"
                    src={{
                      uri: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
                    }}
                  />
                }
              >
                <AvatarToken
                  name="USDC"
                  src={{
                    uri: 'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png',
                  }}
                  size={AvatarTokenSize.Md}
                />
              </BadgeWrapper>
              <View style={tw`ml-4 flex-1 overflow-hidden`}>
                <Text fontWeight={FontWeight.Medium} numberOfLines={1}>
                  USDC Coin
                </Text>
                <View style={tw`flex-row items-center`}>
                  <Icon
                    name={IconName.Arrow2Down}
                    color={IconColor.ErrorDefault}
                    size={IconSize.Sm}
                  />
                  <Text
                    color={TextColor.TextAlternative}
                    variant={TextVariant.BodySm}
                  >
                    -7.80%
                  </Text>
                </View>
              </View>
            </View>
            <View style={tw`items-end`}>
              <Text>$110.20</Text>
              <Text
                color={TextColor.TextAlternative}
                variant={TextVariant.BodySm}
              >
                0.7107 USDC
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export const Default: Story = {
  render: () => <WalletHome />,
};
