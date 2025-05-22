import {
  AvatarBaseShape,
  AvatarToken,
  AvatarTokenSize,
  BadgeNetwork,
  ButtonSize,
  ButtonIcon,
  ButtonIconSize,
  IconName,
  Text,
  TextVariant,
  TextColor,
  AvatarAccount,
  AvatarAccountVariant,
  Icon,
  ButtonBase,
  BoxBorderColor,
  Box,
  BoxBackgroundColor,
} from '@metamask/design-system-react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';

const meta: Meta = {
  title: 'Examples/Wallet Home',
  component: () => null,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

const WalletHome: React.FC = () => {
  const tw = useTailwind();

  return (
    <View style={tw`bg-background-default min-h-screen`}>
      {/* Header */}
      <Box
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
        padding={4}
        borderColor={BoxBorderColor.BorderMuted}
      >
        <View style={tw`flex flex-row items-center justify-between`}>
          <View style={tw`flex flex-row items-center`}>
            <AvatarAccount
              shape={AvatarBaseShape.Square}
              variant={AvatarAccountVariant.Maskicon}
              address=""
            />
            <View style={tw`ml-2`}>
              <Text
                variant={TextVariant.HeadingMd}
                color={TextColor.TextDefault}
              >
                DeFi Account
              </Text>
            </View>
            <View style={tw`ml-2`}>
              <ButtonIcon
                iconName={IconName.ArrowDown}
                accessible
                accessibilityLabel="Switch Account"
              />
            </View>
          </View>
          <View style={tw`flex flex-row items-center`}>
            <View style={tw`mr-4`}>
              <ButtonIcon
                iconName={IconName.Copy}
                size={ButtonIconSize.Md}
                accessible
                accessibilityLabel="Copy"
              />
            </View>
            <View style={tw`mr-4`}>
              <ButtonIcon
                iconName={IconName.Global}
                size={ButtonIconSize.Md}
                accessible
                accessibilityLabel="Network"
              />
            </View>
            <ButtonIcon
              iconName={IconName.Menu}
              size={ButtonIconSize.Md}
              accessible
              accessibilityLabel="Menu"
            />
          </View>
        </View>
      </Box>

      {/* Balance */}
      <View style={tw`p-4`}>
        <Text variant={TextVariant.DisplayMd} color={TextColor.TextDefault}>
          $10,528.46
        </Text>
        <View style={tw`flex flex-row items-center`}>
          <Text variant={TextVariant.BodyMd} color={TextColor.SuccessDefault}>
            ↑
          </Text>
          <View style={tw`ml-2`}>
            <Text variant={TextVariant.BodyMd} color={TextColor.SuccessDefault}>
              $367.00 (+0.66%)
            </Text>
          </View>
        </View>
      </View>

      {/* Actions */}
      <View style={tw`flex-row justify-between px-4 py-2`}>
        <View style={tw`flex-1 px-1`}>
          <ButtonBase
            size={ButtonSize.Md}
            twClassName="active:bg-muted-pressed bg-background-muted h-auto flex-col items-center justify-center rounded-lg p-4"
          >
            <Icon name={IconName.Bank} />
            <Text variant={TextVariant.BodyXs}>Buy/Sell</Text>
          </ButtonBase>
        </View>

        <View style={tw`flex-1 px-1`}>
          <ButtonBase
            size={ButtonSize.Md}
            twClassName="active:bg-muted-pressed bg-background-muted h-auto flex-col items-center justify-center rounded-lg p-4"
            textProps={{
              twClassName: 'flex-col',
            }}
          >
            <Icon name={IconName.SwapHorizontal} />
            <Text variant={TextVariant.BodyXs}>Swap</Text>
          </ButtonBase>
        </View>

        <View style={tw`flex-1 px-1`}>
          <ButtonBase
            size={ButtonSize.Md}
            twClassName="active:bg-muted-pressed bg-background-muted h-auto flex-col items-center justify-center rounded-lg p-4"
            textProps={{
              twClassName: 'flex-col',
            }}
          >
            <Icon name={IconName.Receive} />
            <Text variant={TextVariant.BodyXs}>Receive</Text>
          </ButtonBase>
        </View>

        <View style={tw`flex-1 px-1`}>
          <ButtonBase
            size={ButtonSize.Md}
            twClassName="active:bg-muted-pressed bg-background-muted h-auto flex-col items-center justify-center rounded-lg p-4"
            textProps={{
              twClassName: 'flex-col',
            }}
          >
            <Icon name={IconName.Send} />
            <Text variant={TextVariant.BodyXs}>Send</Text>
          </ButtonBase>
        </View>
      </View>

      {/* Tabs */}
      <View style={tw`border-border-muted border-b px-4`}>
        <View style={tw`flex flex-row`}>
          <View style={tw`border-primary-default border-b-2 px-4 pb-2 pt-1`}>
            <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
              Tokens
            </Text>
          </View>
          <View style={tw`px-4 pb-2 pt-1`}>
            <Text
              variant={TextVariant.BodyMd}
              color={TextColor.TextAlternative}
            >
              DeFi
            </Text>
          </View>
          <View style={tw`px-4 pb-2 pt-1`}>
            <Text
              variant={TextVariant.BodyMd}
              color={TextColor.TextAlternative}
            >
              NFTs
            </Text>
          </View>
          <View style={tw`px-4 pb-2 pt-1`}>
            <Text
              variant={TextVariant.BodyMd}
              color={TextColor.TextAlternative}
            >
              Activity
            </Text>
          </View>
        </View>
      </View>

      {/* Token List */}
      <View style={tw`p-4`}>
        <View style={tw`mb-4 flex flex-row items-center justify-between`}>
          <View style={tw`flex flex-row items-center`}>
            <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
              Popular networks
            </Text>
            <View style={tw`ml-2`}>
              <ButtonIcon
                iconName={IconName.ArrowDown}
                accessible
                accessibilityLabel="Expand"
              />
            </View>
          </View>
          <View style={tw`flex flex-row`}>
            <View style={tw`mr-2`}>
              <ButtonIcon
                iconName={IconName.Filter}
                accessible
                accessibilityLabel="Filter"
              />
            </View>
            <ButtonIcon
              iconName={IconName.MoreVertical}
              accessible
              accessibilityLabel="More"
            />
          </View>
        </View>

        {/* Ethereum */}
        <View style={tw`mb-4 flex flex-row items-center justify-between`}>
          <View style={tw`flex flex-row items-center`}>
            <View style={tw`relative`}>
              <AvatarToken
                name="ETH"
                src={{
                  uri: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
                }}
                size={AvatarTokenSize.Md}
              />
              <View style={tw`absolute -bottom-1 -right-1`}>
                <BadgeNetwork name="Ethereum" />
              </View>
            </View>
            <View style={tw`ml-4`}>
              <View style={tw`flex flex-row items-center`}>
                <Text
                  variant={TextVariant.BodyMd}
                  color={TextColor.TextDefault}
                >
                  Ethereum
                </Text>
                <View style={tw`ml-2`}>
                  <Text
                    variant={TextVariant.BodySm}
                    color={TextColor.InfoDefault}
                  >
                    • Earn
                  </Text>
                </View>
              </View>
              <Text
                variant={TextVariant.BodySm}
                color={TextColor.SuccessDefault}
              >
                ↑ +85.88%
              </Text>
            </View>
          </View>
          <View style={tw`text-right`}>
            <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
              $8,509.44
            </Text>
            <Text
              variant={TextVariant.BodySm}
              color={TextColor.TextAlternative}
            >
              0.7107 ETH
            </Text>
          </View>
        </View>

        {/* Unibright */}
        <View style={tw`mb-4 flex flex-row items-center justify-between`}>
          <View style={tw`flex flex-row items-center`}>
            <View style={tw`relative`}>
              <AvatarToken
                name="UBT"
                src={{
                  uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2758.png',
                }}
                size={AvatarTokenSize.Md}
              />
              <View style={tw`absolute -bottom-1 -right-1`}>
                <BadgeNetwork name="Ethereum" />
              </View>
            </View>
            <View style={tw`ml-4`}>
              <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
                Unibright
              </Text>
              <Text
                variant={TextVariant.BodySm}
                color={TextColor.SuccessDefault}
              >
                ↑ +85.88%
              </Text>
            </View>
          </View>
          <View style={tw`text-right`}>
            <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
              $1,293.50
            </Text>
            <Text
              variant={TextVariant.BodySm}
              color={TextColor.TextAlternative}
            >
              0.058 UBT
            </Text>
          </View>
        </View>

        {/* Hopr */}
        <View style={tw`mb-4 flex flex-row items-center justify-between`}>
          <View style={tw`flex flex-row items-center`}>
            <View style={tw`relative`}>
              <AvatarToken
                name="HOPR"
                src={{
                  uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6520.png',
                }}
                size={AvatarTokenSize.Md}
              />
              <View style={tw`absolute -bottom-1 -right-1`}>
                <BadgeNetwork name="Ethereum" />
              </View>
            </View>
            <View style={tw`ml-4`}>
              <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
                Hopr
              </Text>
              <Text
                variant={TextVariant.BodySm}
                color={TextColor.SuccessDefault}
              >
                ↑ +85.88%
              </Text>
            </View>
          </View>
          <View style={tw`text-right`}>
            <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
              $550.00
            </Text>
            <Text
              variant={TextVariant.BodySm}
              color={TextColor.TextAlternative}
            >
              12.44 HOPR
            </Text>
          </View>
        </View>

        {/* USDC */}
        <View style={tw`flex flex-row items-center justify-between`}>
          <View style={tw`flex flex-row items-center`}>
            <View style={tw`relative`}>
              <AvatarToken
                name="USDC"
                src={{
                  uri: 'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png',
                }}
                size={AvatarTokenSize.Md}
              />
              <View style={tw`absolute -bottom-1 -right-1`}>
                <BadgeNetwork name="Ethereum" />
              </View>
            </View>
            <View style={tw`ml-4`}>
              <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
                USDC Coin
              </Text>
              <Text variant={TextVariant.BodySm} color={TextColor.ErrorDefault}>
                ↓ -7.80%
              </Text>
            </View>
          </View>
          <View style={tw`text-right`}>
            <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
              $110.20
            </Text>
            <Text
              variant={TextVariant.BodySm}
              color={TextColor.TextAlternative}
            >
              0.7107 USDC
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export const Default: Story = {
  render: () => <WalletHome />,
};
