import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
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
  Box,
  BoxBackgroundColor,
  BoxBorderColor,
} from '@metamask/design-system-react';

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
  return (
    <div className="bg-background-default min-h-screen">
      {/* Header */}
      <Box
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
        padding={4}
        borderColor={BoxBorderColor.BorderMuted}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AvatarAccount
              shape={AvatarBaseShape.Square}
              variant={AvatarAccountVariant.Maskicon}
              address=""
            />
            <Text variant={TextVariant.HeadingMd} color={TextColor.TextDefault}>
              DeFi Account
            </Text>
            <ButtonIcon
              iconName={IconName.ArrowDown}
              size={ButtonIconSize.Sm}
              ariaLabel="Switch Account"
            />
          </div>
          <div className="flex items-center space-x-4">
            <ButtonIcon
              iconName={IconName.Copy}
              size={ButtonIconSize.Md}
              ariaLabel="Copy"
            />
            <ButtonIcon
              iconName={IconName.Global}
              size={ButtonIconSize.Md}
              ariaLabel="Network"
            />
            <ButtonIcon
              iconName={IconName.Menu}
              size={ButtonIconSize.Md}
              ariaLabel="Menu"
            />
          </div>
        </div>
      </Box>

      {/* Balance */}
      <div className="p-4">
        <Text variant={TextVariant.DisplayMd} color={TextColor.TextDefault}>
          $10,528.46
        </Text>
        <div className="flex items-center space-x-2">
          <Text variant={TextVariant.BodyMd} color={TextColor.SuccessDefault}>
            ↑
          </Text>
          <Text variant={TextVariant.BodyMd} color={TextColor.SuccessDefault}>
            $367.00 (+0.66%)
          </Text>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-4 gap-2 p-4">
        <ButtonBase
          size={ButtonSize.Md}
          className="bg-muted hover:bg-muted-hover active:bg-muted-pressed h-auto flex-col justify-center rounded-lg p-4"
        >
          <Icon name={IconName.Bank} className="mb-2" />
          Buy/Sell
        </ButtonBase>
        <ButtonBase
          size={ButtonSize.Md}
          className="bg-muted hover:bg-muted-hover active:bg-muted-pressed h-auto flex-col justify-center rounded-lg p-4"
        >
          <Icon name={IconName.SwapHorizontal} className="mb-2" />
          Swap
        </ButtonBase>
        <ButtonBase
          size={ButtonSize.Md}
          className="bg-muted hover:bg-muted-hover active:bg-muted-pressed h-auto flex-col justify-center rounded-lg p-4"
        >
          <Icon name={IconName.Receive} className="mb-2" />
          Receive
        </ButtonBase>
        <ButtonBase
          size={ButtonSize.Md}
          className="bg-muted hover:bg-muted-hover active:bg-muted-pressed h-auto flex-col justify-center rounded-lg p-4"
        >
          <Icon name={IconName.Send} className="mb-2" />
          Send
        </ButtonBase>
      </div>

      {/* Tabs */}
      <div className="border-border-muted border-b px-4">
        <div className="flex space-x-8">
          <button className="border-primary-default border-b-2 pb-2 pt-1">
            <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
              Tokens
            </Text>
          </button>
          <button className="pb-2 pt-1">
            <Text
              variant={TextVariant.BodyMd}
              color={TextColor.TextAlternative}
            >
              DeFi
            </Text>
          </button>
          <button className="pb-2 pt-1">
            <Text
              variant={TextVariant.BodyMd}
              color={TextColor.TextAlternative}
            >
              NFTs
            </Text>
          </button>
          <button className="pb-2 pt-1">
            <Text
              variant={TextVariant.BodyMd}
              color={TextColor.TextAlternative}
            >
              Activity
            </Text>
          </button>
        </div>
      </div>

      {/* Token List */}
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
              Popular networks
            </Text>
            <ButtonIcon
              iconName={IconName.ArrowDown}
              size={ButtonIconSize.Sm}
              ariaLabel="Expand"
            />
          </div>
          <div className="flex space-x-2">
            <ButtonIcon
              iconName={IconName.Filter}
              size={ButtonIconSize.Sm}
              ariaLabel="Filter"
            />
            <ButtonIcon
              iconName={IconName.MoreVertical}
              size={ButtonIconSize.Sm}
              ariaLabel="More"
            />
          </div>
        </div>

        {/* Ethereum */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <AvatarToken
                name="ETH"
                src="https://assets.coingecko.com/coins/images/279/small/ethereum.png"
                size={AvatarTokenSize.Md}
              />
              <div className="absolute -bottom-1 -right-1">
                <BadgeNetwork name="Ethereum" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <Text
                  variant={TextVariant.BodyMd}
                  color={TextColor.TextDefault}
                >
                  Ethereum
                </Text>
                <Text
                  variant={TextVariant.BodySm}
                  color={TextColor.InfoDefault}
                >
                  • Earn
                </Text>
              </div>
              <Text
                variant={TextVariant.BodySm}
                color={TextColor.SuccessDefault}
              >
                ↑ +85.88%
              </Text>
            </div>
          </div>
          <div className="text-right">
            <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
              $8,509.44
            </Text>
            <Text
              variant={TextVariant.BodySm}
              color={TextColor.TextAlternative}
            >
              0.7107 ETH
            </Text>
          </div>
        </div>

        {/* Unibright */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <AvatarToken
                name="UBT"
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/2758.png"
                size={AvatarTokenSize.Md}
              />
              <div className="absolute -bottom-1 -right-1">
                <BadgeNetwork name="Ethereum" />
              </div>
            </div>
            <div>
              <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
                Unibright
              </Text>
              <Text
                variant={TextVariant.BodySm}
                color={TextColor.SuccessDefault}
              >
                ↑ +85.88%
              </Text>
            </div>
          </div>
          <div className="text-right">
            <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
              $1,293.50
            </Text>
            <Text
              variant={TextVariant.BodySm}
              color={TextColor.TextAlternative}
            >
              0.058 UBT
            </Text>
          </div>
        </div>

        {/* Hopr */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <AvatarToken
                name="HOPR"
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/6520.png"
                size={AvatarTokenSize.Md}
              />
              <div className="absolute -bottom-1 -right-1">
                <BadgeNetwork name="Ethereum" />
              </div>
            </div>
            <div>
              <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
                Hopr
              </Text>
              <Text
                variant={TextVariant.BodySm}
                color={TextColor.SuccessDefault}
              >
                ↑ +85.88%
              </Text>
            </div>
          </div>
          <div className="text-right">
            <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
              $550.00
            </Text>
            <Text
              variant={TextVariant.BodySm}
              color={TextColor.TextAlternative}
            >
              12.44 HOPR
            </Text>
          </div>
        </div>

        {/* USDC */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <AvatarToken
                name="USDC"
                src="https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png"
                size={AvatarTokenSize.Md}
              />
              <div className="absolute -bottom-1 -right-1">
                <BadgeNetwork name="Ethereum" />
              </div>
            </div>
            <div>
              <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
                USDC Coin
              </Text>
              <Text variant={TextVariant.BodySm} color={TextColor.ErrorDefault}>
                ↓ -7.80%
              </Text>
            </div>
          </div>
          <div className="text-right">
            <Text variant={TextVariant.BodyMd} color={TextColor.TextDefault}>
              $110.20
            </Text>
            <Text
              variant={TextVariant.BodySm}
              color={TextColor.TextAlternative}
            >
              0.7107 USDC
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <WalletHome />,
};
