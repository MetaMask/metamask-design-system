import {
  AvatarNetworkSize,
  AvatarTokenSize,
  BoxAlignItems,
  BoxFlexDirection,
  BoxJustifyContent,
  ButtonIconSize,
  ButtonIconVariant,
  ContentVariant,
  FilterButtonVariant,
  IconColor,
  IconName,
  IconSize,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { LayoutChangeEvent, Pressable, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  ReduceMotion,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import { AvatarNetwork } from '../AvatarNetwork';
import { SAMPLE_AVATARNETWORK_URIS } from '../AvatarNetwork/AvatarNetwork.dev';
import { AvatarToken } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';
import {
  BOTTOMSHEETDIALOG_STACK_HEIGHT_DURATION,
  BOTTOMSHEETDIALOG_STACK_HEIGHT_EASING,
  BOTTOMSHEETDIALOG_STACK_OPACITY_IN_DELAY,
  BOTTOMSHEETDIALOG_STACK_OPACITY_IN_DURATION,
  BOTTOMSHEETDIALOG_STACK_OPACITY_OUT_DURATION,
  BOTTOMSHEETDIALOG_STACK_PUSH_DURATION,
  BOTTOMSHEETDIALOG_STACK_PUSH_EASING,
} from '../BottomSheetDialog/BottomSheetDialog.constants';
import { BottomSheetFooter } from '../BottomSheetFooter';
import { BottomSheetHeader } from '../BottomSheetHeader';
import { Box } from '../Box';
import { BoxRow } from '../BoxRow';
import { Button, ButtonVariant } from '../Button';
import { ButtonIcon } from '../ButtonIcon';
import { FilterButton } from '../FilterButton';
import { FilterButtonGroup } from '../FilterButtonGroup';
import { HeaderBase } from '../HeaderBase';
import { Icon } from '../Icon';
import { ListItem } from '../ListItem';
import { Slider } from '../Slider';
import { Text } from '../Text';

import { BottomSheet } from './BottomSheet';
import type { BottomSheetProps, BottomSheetRef } from './BottomSheet.types';

const BUY_AMOUNT_PRESETS = [20, 50, 100, 200] as const;
const BUY_AMOUNT_MAX = 200;
const TENDIES_PER_USD = 37.45;
const USDC_TOKEN_SRC = SAMPLE_AVATARTOKEN_URIS[6];
const ETHEREUM_NETWORK_SRC = SAMPLE_AVATARNETWORK_URIS[3];
const POLYGON_NETWORK_SRC = SAMPLE_AVATARNETWORK_URIS[6];

type PayNetworkFilter = 'all' | 'ethereum' | 'base' | 'polygon';

type PayAsset = {
  id: string;
  name: string;
  symbol: string;
  fiatLabel: string;
  balanceLabel: string;
  network: Exclude<PayNetworkFilter, 'all'>;
};

const PAY_ASSETS: readonly PayAsset[] = [
  {
    id: 'usdc-pos',
    name: 'USD Coin (PoS)',
    symbol: 'USDC.E',
    fiatLabel: '$133.91',
    balanceLabel: '133.851724 USDC.E',
    network: 'polygon',
  },
  {
    id: 'usdc-native',
    name: 'USD Coin (Native)',
    symbol: 'USDC',
    fiatLabel: '$94.07',
    balanceLabel: '94.06621 USDC',
    network: 'polygon',
  },
];

const DEFAULT_PAY_ASSET: PayAsset = {
  id: 'usdc-default',
  name: 'USDC',
  symbol: 'USDC',
  fiatLabel: '$341.22',
  balanceLabel: '341.22 USDC',
  network: 'polygon',
};

const NETWORK_FILTERS: {
  value: PayNetworkFilter;
  label: string;
  startAccessory?: React.ReactNode;
}[] = [
  { value: 'all', label: 'All' },
  {
    value: 'ethereum',
    label: 'Ethereum',
    startAccessory: (
      <AvatarNetwork
        name="Ethereum"
        src={ETHEREUM_NETWORK_SRC}
        size={AvatarNetworkSize.Xs}
      />
    ),
  },
  {
    value: 'base',
    label: 'Base',
    startAccessory: <Box twClassName="h-4 w-4 rounded-full bg-primary-default" />,
  },
  {
    value: 'polygon',
    label: 'Polygon',
    startAccessory: (
      <AvatarNetwork
        name="Polygon"
        src={POLYGON_NETWORK_SRC}
        size={AvatarNetworkSize.Xs}
      />
    ),
  },
];

const meta: Meta<BottomSheetProps> = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  argTypes: {
    isInteractable: { control: 'boolean' },
    isFullscreen: { control: 'boolean' },
    keyboardAvoidingViewEnabled: { control: 'boolean' },
    onClose: { action: 'closed' },
    onOpen: { action: 'opened' },
    twClassName: { control: 'text' },
    style: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<BottomSheetProps>;

const stackPushEasing = Easing.bezier(
  BOTTOMSHEETDIALOG_STACK_PUSH_EASING[0],
  BOTTOMSHEETDIALOG_STACK_PUSH_EASING[1],
  BOTTOMSHEETDIALOG_STACK_PUSH_EASING[2],
  BOTTOMSHEETDIALOG_STACK_PUSH_EASING[3],
);

const stackHeightEasing = Easing.bezier(
  BOTTOMSHEETDIALOG_STACK_HEIGHT_EASING[0],
  BOTTOMSHEETDIALOG_STACK_HEIGHT_EASING[1],
  BOTTOMSHEETDIALOG_STACK_HEIGHT_EASING[2],
  BOTTOMSHEETDIALOG_STACK_HEIGHT_EASING[3],
);

const stackOpacityInEasing = Easing.out(Easing.ease);
const stackOpacityOutEasing = Easing.in(Easing.ease);

/**
 * In-sheet push/pop matching web SheetStack:
 * full-width slide + opacity crossfade (0.45s content ease) and synced height tween.
 * Backdrop / sheet Y / handle stay put.
 */
const useSheetStackTransition = () => {
  const [stackWidth, setStackWidth] = useState(0);
  const [isPushed, setIsPushed] = useState(false);
  const [isHeightReady, setIsHeightReady] = useState(false);
  const isAnimatingRef = useRef(false);

  const progress = useSharedValue(0);
  const contentHeight = useSharedValue(0);
  const rootHeight = useSharedValue(0);
  const detailHeight = useSharedValue(0);
  const widthSv = useSharedValue(0);
  const rootOpacity = useSharedValue(1);
  const detailOpacity = useSharedValue(0);

  const animateTo = useCallback(
    (next: 0 | 1) => {
      const targetHeight =
        next === 1 ? detailHeight.value : rootHeight.value;

      isAnimatingRef.current = true;

      progress.value = withTiming(next, {
        duration: BOTTOMSHEETDIALOG_STACK_PUSH_DURATION,
        easing: stackPushEasing,
        reduceMotion: ReduceMotion.System,
      });
      contentHeight.value = withTiming(targetHeight, {
        duration: BOTTOMSHEETDIALOG_STACK_HEIGHT_DURATION,
        easing: stackHeightEasing,
        reduceMotion: ReduceMotion.System,
      });

      if (next === 1) {
        rootOpacity.value = withTiming(0, {
          duration: BOTTOMSHEETDIALOG_STACK_OPACITY_OUT_DURATION,
          easing: stackOpacityOutEasing,
          reduceMotion: ReduceMotion.System,
        });
        detailOpacity.value = withDelay(
          BOTTOMSHEETDIALOG_STACK_OPACITY_IN_DELAY,
          withTiming(1, {
            duration: BOTTOMSHEETDIALOG_STACK_OPACITY_IN_DURATION,
            easing: stackOpacityInEasing,
            reduceMotion: ReduceMotion.System,
          }),
        );
      } else {
        detailOpacity.value = withTiming(0, {
          duration: BOTTOMSHEETDIALOG_STACK_OPACITY_OUT_DURATION,
          easing: stackOpacityOutEasing,
          reduceMotion: ReduceMotion.System,
        });
        rootOpacity.value = withDelay(
          BOTTOMSHEETDIALOG_STACK_OPACITY_IN_DELAY,
          withTiming(1, {
            duration: BOTTOMSHEETDIALOG_STACK_OPACITY_IN_DURATION,
            easing: stackOpacityInEasing,
            reduceMotion: ReduceMotion.System,
          }),
        );
      }

      setIsPushed(next === 1);
      const clearMs = Math.max(
        BOTTOMSHEETDIALOG_STACK_PUSH_DURATION,
        BOTTOMSHEETDIALOG_STACK_HEIGHT_DURATION,
      );
      setTimeout(() => {
        isAnimatingRef.current = false;
      }, clearMs);
    },
    [
      contentHeight,
      detailHeight,
      detailOpacity,
      progress,
      rootHeight,
      rootOpacity,
    ],
  );

  const push = useCallback(() => {
    if (!isPushed) {
      animateTo(1);
    }
  }, [animateTo, isPushed]);

  const pop = useCallback(() => {
    if (isPushed) {
      animateTo(0);
    }
  }, [animateTo, isPushed]);

  const onStackLayout = (e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    if (width > 0 && width !== stackWidth) {
      setStackWidth(width);
      widthSv.value = width;
    }
  };

  const onRootLayout = (e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout;
    if (height <= 0) {
      return;
    }
    rootHeight.value = height;
    if (!isHeightReady) {
      contentHeight.value = height;
      setIsHeightReady(true);
    } else if (!isPushed && !isAnimatingRef.current) {
      // Sync only at rest — never cancel an in-flight height tween.
      contentHeight.value = height;
    }
  };

  const onDetailLayout = (e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout;
    if (height <= 0) {
      return;
    }
    // Measure only — animateTo owns contentHeight.
    detailHeight.value = height;
  };

  const heightStyle = useAnimatedStyle(() => ({
    height: contentHeight.value > 0 ? contentHeight.value : undefined,
  }));

  const rootScreenStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          progress.value,
          [0, 1],
          [0, -widthSv.value],
        ),
      },
    ],
    opacity: rootOpacity.value,
  }));

  const detailScreenStyle = useAnimatedStyle(() => {
    // Until width is measured, keep detail off-screen so it doesn't cover root.
    const x =
      widthSv.value > 0
        ? interpolate(progress.value, [0, 1], [widthSv.value, 0])
        : 9999;
    return {
      transform: [{ translateX: x }],
      opacity: detailOpacity.value,
    };
  });

  return {
    isPushed,
    push,
    pop,
    onStackLayout,
    onRootLayout,
    onDetailLayout,
    heightStyle,
    rootScreenStyle,
    detailScreenStyle,
  };
};

/**
 * In-sheet navigation stack: push + opacity + height resize.
 * Backdrop, sheet Y, corners, and grab handle stay put — contents navigate.
 */
const SheetStackContent = ({ onRequestClose }: { onRequestClose: () => void }) => {
  const {
    isPushed,
    push,
    pop,
    onStackLayout,
    onRootLayout,
    onDetailLayout,
    heightStyle,
    rootScreenStyle,
    detailScreenStyle,
  } = useSheetStackTransition();

  return (
    <Animated.View
      onLayout={onStackLayout}
      style={[{ width: '100%', overflow: 'hidden' }, heightStyle]}
    >
      <Animated.View
        onLayout={onRootLayout}
        pointerEvents={isPushed ? 'none' : 'auto'}
        style={[
          { position: 'absolute', left: 0, right: 0, top: 0 },
          rootScreenStyle,
        ]}
      >
        <Box twClassName="bg-default">
          <BottomSheetHeader onClose={onRequestClose}>Amount</BottomSheetHeader>
          <Box twClassName="p-4 gap-2">
            <Pressable onPress={push}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Pressable>
            <Text color={TextColor.TextAlternative}>
              Tap the text to push “Pay with” (in-sheet). Backdrop stays put.
            </Text>
          </Box>
          <BottomSheetFooter
            secondaryButtonProps={{
              children: 'Cancel',
              onPress: onRequestClose,
            }}
            primaryButtonProps={{
              children: 'Confirm',
              onPress: onRequestClose,
            }}
          />
        </Box>
      </Animated.View>

      <Animated.View
        onLayout={onDetailLayout}
        pointerEvents={isPushed ? 'auto' : 'none'}
        style={[
          { position: 'absolute', left: 0, right: 0, top: 0 },
          detailScreenStyle,
        ]}
      >
        <Box twClassName="bg-default">
          <BottomSheetHeader onBack={pop} onClose={onRequestClose}>
            Pay with
          </BottomSheetHeader>
          <Box twClassName="p-4 gap-3">
            <Text>
              Taller “Pay with” screen. Sheet height and the horizontal slide both
              run 0.45s on the content ease; outgoing fades in 0.08s, incoming
              fades in 0.22s after a 0.05s delay.
            </Text>
            <Text>
              Extra content to force a taller sheet: payment method list,
              balances, and network fees would live here. The grab handle and
              overlay do not re-animate — same sheet, contents navigate.
            </Text>
            <Text>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula.
            </Text>
            <Text>
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi.
            </Text>
          </Box>
          <BottomSheetFooter
            secondaryButtonProps={{ children: 'Back', onPress: pop }}
            primaryButtonProps={{
              children: 'Continue',
              onPress: onRequestClose,
            }}
          />
        </Box>
      </Animated.View>
    </Animated.View>
  );
};

/**
 * Keep the sheet mounted until onClose fires so dismiss can animate.
 * Header/footer/overlay must call ref.onCloseBottomSheet() — never setVisible(false) directly.
 */
const DefaultTemplate = (args: BottomSheetProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sheetRef = useRef<BottomSheetRef>(null);
  const requestClose = () => {
    sheetRef.current?.onCloseBottomSheet();
  };

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Button
        variant={ButtonVariant.Primary}
        onPress={() => setIsVisible(true)}
        twClassName="mb-4"
      >
        Open BottomSheet
      </Button>
      {isVisible && (
        <BottomSheet
          {...args}
          ref={sheetRef}
          onClose={() => setIsVisible(false)}
        >
          <SheetStackContent onRequestClose={requestClose} />
        </BottomSheet>
      )}
    </View>
  );
};

export const Default: Story = {
  render: (args) => <DefaultTemplate {...args} />,
  args: {
    isInteractable: true,
    isFullscreen: false,
    keyboardAvoidingViewEnabled: true,
  },
};

export const IsInteractable: Story = {
  render: (args) => <DefaultTemplate {...args} />,
  args: {
    isInteractable: false,
    isFullscreen: false,
  },
};

export const IsFullscreen: Story = {
  render: (args) => <DefaultTemplate {...args} />,
  args: {
    isInteractable: true,
    isFullscreen: true,
  },
};

/**
 * Genuinely new sheet — stacks over with its own backdrop.
 * Different grammar from in-sheet push; do not mix for one interaction.
 */
const StackedSheetsTemplate = (args: BottomSheetProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNestedVisible, setIsNestedVisible] = useState(false);
  const sheetRef = useRef<BottomSheetRef>(null);
  const nestedSheetRef = useRef<BottomSheetRef>(null);
  const requestClose = () => {
    sheetRef.current?.onCloseBottomSheet();
  };
  const requestNestedClose = () => {
    nestedSheetRef.current?.onCloseBottomSheet();
  };

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Button
        variant={ButtonVariant.Primary}
        onPress={() => setIsVisible(true)}
        twClassName="mb-4"
      >
        Open BottomSheet
      </Button>
      {isVisible && (
        <BottomSheet
          {...args}
          ref={sheetRef}
          onClose={() => setIsVisible(false)}
        >
          <BottomSheetHeader onClose={requestClose}>BottomSheet</BottomSheetHeader>
          <Box twClassName="p-4">
            <Pressable onPress={() => setIsNestedVisible(true)}>
              <Text>
                Tap to open a second sheet stacked on top (own backdrop) — not an
                in-sheet push.
              </Text>
            </Pressable>
          </Box>
          <BottomSheetFooter
            secondaryButtonProps={{ children: 'Cancel', onPress: requestClose }}
            primaryButtonProps={{ children: 'Confirm', onPress: requestClose }}
          />
        </BottomSheet>
      )}
      {isNestedVisible && (
        <BottomSheet
          ref={nestedSheetRef}
          isInteractable
          onClose={() => setIsNestedVisible(false)}
        >
          <BottomSheetHeader onClose={requestNestedClose}>
            Nested BottomSheet
          </BottomSheetHeader>
          <Box twClassName="p-4">
            <Text>
              A second sheet stacked over the first, with its own backdrop.
              Dismiss this sheet to return to the parent.
            </Text>
          </Box>
          <BottomSheetFooter
            primaryButtonProps={{
              children: 'Done',
              onPress: requestNestedClose,
            }}
          />
        </BottomSheet>
      )}
    </View>
  );
};

export const StackedSheets: Story = {
  render: (args) => <StackedSheetsTemplate {...args} />,
  args: {
    isInteractable: true,
    isFullscreen: false,
  },
};

const ImperativeControlTemplate = (args: BottomSheetProps) => {
  const sheetRef = useRef<BottomSheetRef>(null);

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Box twClassName="flex-row gap-2 p-4">
        <Pressable onPress={() => sheetRef.current?.onOpenBottomSheet()}>
          <Text>Open via ref</Text>
        </Pressable>
        <Pressable onPress={() => sheetRef.current?.onCloseBottomSheet()}>
          <Text>Close via ref</Text>
        </Pressable>
      </Box>
      <BottomSheet ref={sheetRef} {...args}>
        <Box twClassName="p-4">
          <Text>Controlled imperatively via ref</Text>
        </Box>
      </BottomSheet>
    </View>
  );
};

export const ImperativeControl: Story = {
  render: (args) => <ImperativeControlTemplate {...args} />,
  args: {
    isInteractable: true,
  },
};

const ScrollableListTemplate = (args: BottomSheetProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sheetRef = useRef<BottomSheetRef>(null);
  const listGestureRef = useRef(null);
  const requestClose = () => {
    sheetRef.current?.onCloseBottomSheet();
  };

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Button
        variant={ButtonVariant.Primary}
        onPress={() => setIsVisible(true)}
        twClassName="mb-4"
      >
        Open Scrollable BottomSheet
      </Button>
      {isVisible && (
        <BottomSheet
          {...args}
          ref={sheetRef}
          onClose={() => setIsVisible(false)}
        >
          <BottomSheetHeader onClose={requestClose}>
            Scrollable BottomSheet
          </BottomSheetHeader>
          <ScrollView
            ref={listGestureRef}
            style={{ maxHeight: 420 }}
            contentContainerStyle={{ paddingBottom: 24 }}
          >
            {Array.from({ length: 20 }).map((_, index) => (
              <Box key={`bottom-sheet-item-${index}`} twClassName="px-4 py-3">
                <Text>{`List item ${index + 1}`}</Text>
              </Box>
            ))}
          </ScrollView>
          <BottomSheetFooter
            secondaryButtonProps={{ children: 'Cancel', onPress: requestClose }}
            primaryButtonProps={{ children: 'Done', onPress: requestClose }}
          />
        </BottomSheet>
      )}
    </View>
  );
};

export const ScrollableList: Story = {
  render: (args) => <ScrollableListTemplate {...args} />,
  args: {
    isInteractable: true,
    isFullscreen: false,
    keyboardAvoidingViewEnabled: true,
  },
};

/**
 * Product-style buy sheet with in-sheet “Pay with” push (chevron = stack, not a new sheet).
 */
const BuyTendiesContent = ({
  onRequestClose,
}: {
  onRequestClose: () => void;
}) => {
  const [amount, setAmount] = useState(20);
  const [selectedAsset, setSelectedAsset] = useState<PayAsset>(DEFAULT_PAY_ASSET);
  const [networkFilter, setNetworkFilter] =
    useState<PayNetworkFilter>('polygon');
  const {
    isPushed,
    push,
    pop,
    onStackLayout,
    onRootLayout,
    onDetailLayout,
    heightStyle,
    rootScreenStyle,
    detailScreenStyle,
  } = useSheetStackTransition();

  const tendiesEstimate = Math.round(amount * TENDIES_PER_USD);
  const filteredAssets = useMemo(
    () =>
      networkFilter === 'all'
        ? PAY_ASSETS
        : PAY_ASSETS.filter((asset) => asset.network === networkFilter),
    [networkFilter],
  );

  const selectAsset = (asset: PayAsset) => {
    setSelectedAsset(asset);
    pop();
  };

  return (
    <Animated.View
      onLayout={onStackLayout}
      style={[{ width: '100%', overflow: 'hidden' }, heightStyle]}
    >
      <Animated.View
        onLayout={onRootLayout}
        pointerEvents={isPushed ? 'none' : 'auto'}
        style={[
          { position: 'absolute', left: 0, right: 0, top: 0 },
          rootScreenStyle,
        ]}
      >
        <Box twClassName="bg-default">
      <HeaderBase
        twClassName="h-10 px-2"
        startButtonIconProps={{
          iconName: IconName.Close,
          onPress: onRequestClose,
          accessibilityLabel: 'Close',
        }}
        endAccessory={
          <ButtonIcon
            iconName={IconName.Setting}
            variant={ButtonIconVariant.Filled}
            size={ButtonIconSize.Md}
            accessibilityLabel="Settings"
            onPress={() => undefined}
          />
        }
      >
        Buy TENDIES
      </HeaderBase>

          <Box
            alignItems={BoxAlignItems.Center}
            twClassName="px-4 pt-6 pb-2"
            gap={1}
          >
            <Text variant={TextVariant.AmountDisplayLg}>{`$${amount}`}</Text>
            <Text
              variant={TextVariant.BodyMd}
              color={TextColor.TextAlternative}
            >{`≈ ${tendiesEstimate} TENDIES`}</Text>
          </Box>

          <Box twClassName="px-2 py-2">
            <Slider
              value={amount}
              minimumValue={0}
              maximumValue={BUY_AMOUNT_MAX}
              step={1}
              showRangeDots
              onValueChange={setAmount}
              trackInset={16}
            />
          </Box>

          <Box
            flexDirection={BoxFlexDirection.Row}
            gap={2}
            twClassName="px-4 pb-4"
          >
            {BUY_AMOUNT_PRESETS.map((preset) => (
              <FilterButton
                key={preset}
                variant={FilterButtonVariant.Primary}
                isSelected={amount === preset}
                isFullWidth
                twClassName="flex-1"
                onPress={() => setAmount(preset)}
              >
                {`$${preset}`}
              </FilterButton>
            ))}
          </Box>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Pay with"
            onPress={push}
          >
            <Box
              flexDirection={BoxFlexDirection.Row}
              alignItems={BoxAlignItems.Center}
              justifyContent={BoxJustifyContent.Between}
              twClassName="px-4 py-3"
            >
              <Text
                variant={TextVariant.BodyMd}
                color={TextColor.TextAlternative}
              >
                Pay with
              </Text>
              <BoxRow
                gap={2}
                endAccessory={
                  <Icon
                    name={IconName.ArrowRight}
                    size={IconSize.Sm}
                    color={IconColor.IconAlternative}
                  />
                }
              >
                <AvatarToken
                  name={selectedAsset.symbol}
                  src={USDC_TOKEN_SRC}
                  size={AvatarTokenSize.Xs}
                />
                <Text variant={TextVariant.BodyMd}>
                  {`${selectedAsset.symbol} (${selectedAsset.fiatLabel})`}
                </Text>
              </BoxRow>
            </Box>
          </Pressable>

          <Box twClassName="px-0 pt-2 pb-4 gap-2">
            <BottomSheetFooter
              primaryButtonProps={{
                children: 'Buy',
                onPress: onRequestClose,
                isFullWidth: true,
              }}
            />
            <Text
              variant={TextVariant.BodyXs}
              color={TextColor.TextMuted}
              twClassName="text-center"
            >
              Includes 0.875% MM fee
            </Text>
          </Box>
        </Box>
      </Animated.View>

      <Animated.View
        onLayout={onDetailLayout}
        pointerEvents={isPushed ? 'auto' : 'none'}
        style={[
          { position: 'absolute', left: 0, right: 0, top: 0 },
          detailScreenStyle,
        ]}
      >
        <Box twClassName="bg-default">
          <BottomSheetHeader
            onBack={pop}
            onClose={onRequestClose}
            twClassName="h-10"
          >
            Pay with
          </BottomSheetHeader>

          <FilterButtonGroup
            value={networkFilter}
            onChange={(value) => setNetworkFilter(value as PayNetworkFilter)}
            variant={FilterButtonVariant.Primary}
            twClassName="px-4 pb-2 gap-2"
          >
            {NETWORK_FILTERS.map((filter) => (
              <FilterButton
                key={filter.value}
                value={filter.value}
                startAccessory={filter.startAccessory}
              >
                {filter.label}
              </FilterButton>
            ))}
          </FilterButtonGroup>

          <Box>
            {filteredAssets.map((asset) => (
              <ListItem
                key={asset.id}
                isInteractive
                onPress={() => selectAsset(asset)}
                variant={ContentVariant.TwoLines}
                avatar={
                  <AvatarToken
                    name={asset.symbol}
                    src={USDC_TOKEN_SRC}
                    size={AvatarTokenSize.Md}
                  />
                }
                title={asset.name}
                titleEndAccessory={
                  <Icon
                    name={IconName.VerifiedFilled}
                    size={IconSize.Sm}
                    color={IconColor.PrimaryDefault}
                  />
                }
                description={asset.symbol}
                value={asset.fiatLabel}
                subvalue={asset.balanceLabel}
              />
            ))}
            {filteredAssets.length === 0 && (
              <Box twClassName="px-4 py-6">
                <Text
                  variant={TextVariant.BodyMd}
                  color={TextColor.TextAlternative}
                  twClassName="text-center"
                >
                  No assets on this network
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      </Animated.View>
    </Animated.View>
  );
};

const BuyTendiesTemplate = (args: BottomSheetProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sheetRef = useRef<BottomSheetRef>(null);
  const requestClose = () => {
    sheetRef.current?.onCloseBottomSheet();
  };

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Button
        variant={ButtonVariant.Primary}
        onPress={() => setIsVisible(true)}
        twClassName="mb-4"
      >
        Open Buy TENDIES
      </Button>
      {isVisible && (
        <BottomSheet
          {...args}
          ref={sheetRef}
          onClose={() => setIsVisible(false)}
        >
          <BuyTendiesContent onRequestClose={requestClose} />
        </BottomSheet>
      )}
    </View>
  );
};

export const BuyTendies: Story = {
  render: (args) => <BuyTendiesTemplate {...args} />,
  args: {
    isInteractable: true,
    isFullscreen: false,
    keyboardAvoidingViewEnabled: true,
  },
};
