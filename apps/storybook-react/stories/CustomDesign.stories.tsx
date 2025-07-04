import {
  AvatarAccount,
  AvatarAccountVariant,
  AvatarBaseShape,
  AvatarToken,
  AvatarTokenSize,
  BadgeCount,
  BadgeWrapper,
  BadgeNetwork,
  Box,
  BoxAlignItems,
  BoxFlexDirection,
  BoxFlexWrap,
  BoxJustifyContent,
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
} from '@metamask/design-system-react';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Examples/Hiro Wallet',
  component: () => null,
  // Remove default padding
  decorators: [
    (Story) => (
      <Box className="-m-4">
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj;

const HiroWallet: React.FC = () => {
  return (
    <Box className="mx-auto w-full max-w-sm bg-grey-900 text-white min-h-screen">
      {/* iOS Status Bar */}
      <Box className="flex items-center justify-between px-4 py-2 text-white">
        <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
          9:41
        </Text>
        <Box className="flex items-center gap-1">
          <Icon
            name={IconName.Mobile}
            size={IconSize.Sm}
            color={IconColor.OverlayInverse}
          />
          <Icon
            name={IconName.Wifi}
            size={IconSize.Sm}
            color={IconColor.OverlayInverse}
          />
          <Icon
            name={IconName.Flash}
            size={IconSize.Sm}
            color={IconColor.OverlayInverse}
          />
        </Box>
      </Box>

      {/* Main Content */}
      <Box className="flex-1 p-4 space-y-5">
        {/* Top Navigation */}
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          justifyContent={BoxJustifyContent.Between}
          className="py-2"
        >
          {/* Account Picker */}
          <Box
            flexDirection={BoxFlexDirection.Row}
            alignItems={BoxAlignItems.Center}
            gap={2}
          >
            <AvatarAccount
              shape={AvatarBaseShape.Circle}
              variant={AvatarAccountVariant.Jazzicon}
              address="0x1234567890123456789012345678901234567890"
              className="w-8 h-8"
            />
            <Text
              variant={TextVariant.HeadingMd}
              fontWeight={FontWeight.Medium}
              color={TextColor.OverlayInverse}
            >
              Account 1
            </Text>
            <ButtonIcon
              iconName={IconName.ArrowDown}
              ariaLabel="Switch Account"
              className="text-white"
            />
          </Box>

          {/* Top Right Actions */}
          <Box
            flexDirection={BoxFlexDirection.Row}
            alignItems={BoxAlignItems.Center}
            gap={2}
          >
            <ButtonIcon
              iconName={IconName.Scan}
              ariaLabel="Scan"
              className="text-white"
            />
            <ButtonIcon
              iconName={IconName.Menu}
              ariaLabel="Menu"
              className="text-white"
            />
          </Box>
        </Box>

        {/* Add widgets button */}
        <Box className="flex justify-center">
          <TextButton className="text-blue-300 flex items-center gap-2">
            <Icon name={IconName.Add} size={IconSize.Sm} />
            Add widgets
          </TextButton>
        </Box>

        {/* Hero Balance */}
        <Box className="text-center space-y-2 py-4">
          <Text
            variant={TextVariant.DisplayMd}
            fontWeight={FontWeight.Medium}
            color={TextColor.OverlayInverse}
            className="text-5xl"
          >
            $21,402.00
          </Text>
          <Box
            flexDirection={BoxFlexDirection.Row}
            alignItems={BoxAlignItems.Center}
            justifyContent={BoxJustifyContent.Center}
            gap={1}
          >
            <Icon
              name={IconName.Arrow2Up}
              color={IconColor.SuccessDefault}
              size={IconSize.Sm}
            />
            <Text
              variant={TextVariant.BodyMd}
              color={TextColor.TextAlternative}
            >
              +$10.96 (0.98%) Today
            </Text>
            <ButtonIcon
              iconName={IconName.Eye}
              ariaLabel="Toggle visibility"
              className="text-white ml-2"
            />
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box className="py-4">
          <Box
            flexDirection={BoxFlexDirection.Row}
            gap={2}
            className="justify-between"
          >
            <ButtonBase className="flex-1 flex flex-col items-center justify-center gap-2 bg-grey-700 hover:bg-grey-600 active:bg-grey-800 rounded-xl py-4 px-3 min-h-[68px]">
              <Icon
                name={IconName.Bank}
                size={IconSize.Md}
                color={IconColor.OverlayInverse}
              />
              <Text
                variant={TextVariant.BodySm}
                color={TextColor.OverlayInverse}
              >
                Buy
              </Text>
            </ButtonBase>

            <ButtonBase className="flex-1 flex flex-col items-center justify-center gap-2 bg-grey-700 hover:bg-grey-600 active:bg-grey-800 rounded-xl py-4 px-3 min-h-[68px]">
              <Icon
                name={IconName.Send}
                size={IconSize.Md}
                color={IconColor.OverlayInverse}
              />
              <Text
                variant={TextVariant.BodySm}
                color={TextColor.OverlayInverse}
              >
                Send
              </Text>
            </ButtonBase>

            <ButtonBase className="flex-1 flex flex-col items-center justify-center gap-2 bg-grey-700 hover:bg-grey-600 active:bg-grey-800 rounded-xl py-4 px-3 min-h-[68px]">
              <Icon
                name={IconName.Receive}
                size={IconSize.Md}
                color={IconColor.OverlayInverse}
              />
              <Text
                variant={TextVariant.BodySm}
                color={TextColor.OverlayInverse}
              >
                Receive
              </Text>
            </ButtonBase>

            <ButtonBase className="flex-1 flex flex-col items-center justify-center gap-2 bg-grey-700 hover:bg-grey-600 active:bg-grey-800 rounded-xl py-4 px-3 min-h-[68px]">
              <Icon
                name={IconName.SwapHorizontal}
                size={IconSize.Md}
                color={IconColor.OverlayInverse}
              />
              <Text
                variant={TextVariant.BodySm}
                color={TextColor.OverlayInverse}
              >
                Swap
              </Text>
            </ButtonBase>
          </Box>
        </Box>

        {/* Bottom Navigation Action */}
        <Box className="flex justify-center">
          <ButtonIcon
            iconName={IconName.ArrowUp}
            ariaLabel="Scroll to top"
            className="text-white"
          />
        </Box>

        {/* Tokens Section Header */}
        <Box className="py-2">
          <Box
            flexDirection={BoxFlexDirection.Row}
            alignItems={BoxAlignItems.Center}
            justifyContent={BoxJustifyContent.Between}
          >
            <Text
              variant={TextVariant.HeadingLg}
              fontWeight={FontWeight.Medium}
              color={TextColor.OverlayInverse}
            >
              Tokens
            </Text>
            <ButtonIcon
              iconName={IconName.ArrowRight}
              ariaLabel="View all tokens"
              className="text-white"
            />
          </Box>
        </Box>

        {/* Sample Token Items */}
        <Box className="space-y-3">
          {/* Bitcoin Token */}
          <Box
            flexDirection={BoxFlexDirection.Row}
            alignItems={BoxAlignItems.Center}
            justifyContent={BoxJustifyContent.Between}
            className="p-3 rounded-lg bg-grey-800 hover:bg-grey-700"
          >
            <Box
              flexDirection={BoxFlexDirection.Row}
              alignItems={BoxAlignItems.Center}
              gap={3}
            >
              <AvatarToken
                name="BTC"
                src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
                size={AvatarTokenSize.Md}
              />
              <Box className="flex-1">
                <Text
                  variant={TextVariant.BodyMd}
                  fontWeight={FontWeight.Medium}
                  color={TextColor.OverlayInverse}
                >
                  Bitcoin
                </Text>
                <Text
                  variant={TextVariant.BodySm}
                  color={TextColor.TextAlternative}
                >
                  BTC
                </Text>
              </Box>
            </Box>
            <Box className="text-right">
              <Text
                variant={TextVariant.BodyMd}
                fontWeight={FontWeight.Medium}
                color={TextColor.OverlayInverse}
              >
                $8,405.32
              </Text>
              <Text
                variant={TextVariant.BodySm}
                color={TextColor.TextAlternative}
              >
                0.1234 BTC
              </Text>
            </Box>
          </Box>

          {/* Ethereum Token */}
          <Box
            flexDirection={BoxFlexDirection.Row}
            alignItems={BoxAlignItems.Center}
            justifyContent={BoxJustifyContent.Between}
            className="p-3 rounded-lg bg-grey-800 hover:bg-grey-700"
          >
            <Box
              flexDirection={BoxFlexDirection.Row}
              alignItems={BoxAlignItems.Center}
              gap={3}
            >
              <AvatarToken
                name="ETH"
                src="https://assets.coingecko.com/coins/images/279/small/ethereum.png"
                size={AvatarTokenSize.Md}
              />
              <Box className="flex-1">
                <Text
                  variant={TextVariant.BodyMd}
                  fontWeight={FontWeight.Medium}
                  color={TextColor.OverlayInverse}
                >
                  Ethereum
                </Text>
                <Text
                  variant={TextVariant.BodySm}
                  color={TextColor.TextAlternative}
                >
                  ETH
                </Text>
              </Box>
            </Box>
            <Box className="text-right">
              <Text
                variant={TextVariant.BodyMd}
                fontWeight={FontWeight.Medium}
                color={TextColor.OverlayInverse}
              >
                $12,996.68
              </Text>
              <Text
                variant={TextVariant.BodySm}
                color={TextColor.TextAlternative}
              >
                5.678 ETH
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const Default: Story = {
  render: () => <HiroWallet />,
};

export const WithLightBackground: Story = {
  render: () => (
    <Box className="min-h-screen bg-grey-050 flex items-center justify-center">
      <HiroWallet />
    </Box>
  ),
};
