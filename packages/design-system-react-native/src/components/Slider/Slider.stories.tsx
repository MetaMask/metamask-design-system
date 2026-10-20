import { SliderMarkColor } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import { useEffect, useState } from 'react';

import {
  Box,
  BoxAlignItems,
  BoxBackgroundColor,
  BoxBorderColor,
  BoxFlexDirection,
  BoxJustifyContent,
} from '../Box';
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { Card } from '../Card';
import { Icon, IconColor, IconName, IconSize } from '../Icon';
import { FontWeight, Text, TextColor, TextVariant } from '../Text';

import { Slider } from './Slider';
import type { SliderProps } from './Slider.types';

const meta: Meta<SliderProps> = {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Current slider value (controlled).',
    },
    minimumValue: {
      control: { type: 'number' },
      description: 'Minimum value of the slider range.',
    },
    maximumValue: {
      control: { type: 'number' },
      description: 'Maximum value of the slider range.',
    },
    step: {
      control: { type: 'number', min: 1 },
      description: 'Step increment for value changes.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'When true, disables slider interaction.',
    },
    showRangeLabels: {
      control: 'boolean',
      description:
        'When true, renders tappable labels below the track for marks with a label.',
    },
    showRangeDots: {
      control: 'boolean',
      description:
        'When true, renders dots on the track at each mark position.',
    },
  },
  decorators: [
    (Story) => (
      <Box twClassName="w-full p-4">
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<SliderProps>;

function ControlledSlider({
  value: valueArg = 50,
  onValueChange: onValueChangeArg,
  ...args
}: Omit<SliderProps, 'onValueChange' | 'value'> & {
  value?: number;
  onValueChange?: SliderProps['onValueChange'];
}) {
  const [value, setValue] = useState(valueArg);

  useEffect(() => {
    setValue(valueArg);
  }, [valueArg]);

  return (
    <Slider
      {...args}
      value={value}
      onValueChange={(nextValue) => {
        setValue(nextValue);
        onValueChangeArg?.(nextValue);
      }}
    />
  );
}

export const Default: Story = {
  args: {
    value: 50,
  },
  render: (args) => <ControlledSlider {...args} />,
};

export const ShowRangeLabels: Story = {
  render: () => (
    <Box gap={12}>
      <ControlledSlider value={50} />
      <ControlledSlider value={50} showRangeLabels />
    </Box>
  ),
};

export const ShowRangeDots: Story = {
  render: () => (
    <Box gap={12}>
      <ControlledSlider value={50} />
      <ControlledSlider value={50} showRangeDots />
    </Box>
  ),
};

export const CustomMarks: Story = {
  render: () => (
    <ControlledSlider
      value={50}
      marks={[
        { step: 0, label: '0%' },
        { step: 50, label: '50%' },
        { step: 100, label: '100%' },
      ]}
      showRangeLabels
      showRangeDots
    />
  ),
};

export const Step: Story = {
  render: () => (
    <Box gap={12}>
      <ControlledSlider value={50} step={1} showRangeLabels showRangeDots />
      <ControlledSlider value={50} step={5} showRangeLabels showRangeDots />
    </Box>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <Box gap={12}>
      <ControlledSlider value={50} showRangeLabels showRangeDots />
      <ControlledSlider value={50} showRangeLabels showRangeDots isDisabled />
    </Box>
  ),
};

const mockMusdAmountToPercent = (amount: number): number => {
  'worklet';

  if (amount <= 100) {
    return 0;
  }
  if (amount <= 1000) {
    return ((amount - 100) / 900) * 50;
  }

  return 50 + ((amount - 1000) / 9000) * 50;
};

const mockMusdPercentToAmount = (trackPercent: number): number => {
  'worklet';

  if (trackPercent <= 0) {
    return 100;
  }
  if (trackPercent <= 50) {
    return Math.round(100 + (trackPercent / 50) * 900);
  }

  return Math.round(1000 + ((trackPercent - 50) / 50) * 9000);
};

export const NonLinearScale: Story = {
  render: () => (
    <ControlledSlider
      value={1000}
      minimumValue={100}
      maximumValue={10000}
      step={1}
      marks={[
        { step: 0, label: '$100', value: 100 },
        { step: 50, label: '$1,000', value: 1000 },
        { step: 100, label: '$10,000', value: 10000 },
      ]}
      showRangeLabels
      showRangeDots
      mapValueToTrackPercent={mockMusdAmountToPercent}
      mapTrackPercentToValue={mockMusdPercentToAmount}
    />
  ),
};

export const ThemedMarks: Story = {
  render: () => (
    <ControlledSlider
      value={10}
      minimumValue={1}
      maximumValue={40}
      marks={[
        {
          step: 0,
          label: '1x',
          value: 1,
          color: SliderMarkColor.SuccessDefault,
        },
        {
          step: 23,
          label: '10x',
          value: 10,
          color: SliderMarkColor.WarningDefault,
        },
        {
          step: 49,
          label: '20x',
          value: 20,
          color: SliderMarkColor.WarningDefault,
        },
        {
          step: 74,
          label: '30x',
          value: 30,
          color: SliderMarkColor.WarningDefault,
        },
        {
          step: 100,
          label: '40x',
          value: 40,
          color: SliderMarkColor.ErrorDefault,
        },
      ]}
      showRangeLabels
      showRangeDots
    />
  ),
};

/** Full SAFE balance, in 1e-5 token units (8.10274). */
const SAFE_BALANCE_UNITS = 810274;
const SAFE_UNIT_SCALE = 100000;
/** Full SAFE balance in cents ($1.08). */
const SAFE_FIAT_CENTS = 108;

const formatUsd = (percent: number): string => {
  const cents = Math.round((SAFE_FIAT_CENTS * percent) / 100);
  const dollars = Math.floor(cents / 100);
  const remainder = String(cents % 100).padStart(2, '0');

  return `$${dollars}.${remainder}`;
};

const formatTokenAmount = (percent: number): string => {
  const units = Math.round((SAFE_BALANCE_UNITS * percent) / 100);
  const whole = Math.floor(units / SAFE_UNIT_SCALE);
  const fraction = units % SAFE_UNIT_SCALE;

  if (fraction === 0) {
    return String(whole);
  }

  const fractionText = String(fraction).padStart(5, '0').replace(/0+$/u, '');

  return `${whole}.${fractionText}`;
};

function TokenPercentSample() {
  const [percent, setPercent] = useState(100);

  return (
    <Box gap={1}>
      <Box
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        justifyContent={BoxJustifyContent.Between}
        gap={3}
      >
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          gap={3}
          twClassName="min-w-0 flex-1"
        >
          <Box
            alignItems={BoxAlignItems.Center}
            justifyContent={BoxJustifyContent.Center}
            backgroundColor={BoxBackgroundColor.SuccessDefault}
            accessibilityLabel="SAFE"
            twClassName="h-10 w-10 shrink-0 rounded-full"
          >
            <Icon
              name={IconName.Link}
              size={IconSize.Lg}
              color={IconColor.SuccessInverse}
            />
          </Box>
          <Box twClassName="min-w-0 flex-1">
            <Text variant={TextVariant.HeadingSm}>{formatUsd(percent)}</Text>
            <Text
              variant={TextVariant.BodySm}
              color={TextColor.TextAlternative}
            >
              {`${formatTokenAmount(percent)} SAFE • ${percent}%`}
            </Text>
          </Box>
        </Box>
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          gap={4}
        >
          <ButtonIcon
            iconName={IconName.Customize}
            size={ButtonIconSize.Sm}
            accessibilityLabel="Edit amount"
            iconProps={{ color: IconColor.IconAlternative }}
          />
          <ButtonIcon
            iconName={IconName.RemoveMinus}
            size={ButtonIconSize.Sm}
            accessibilityLabel="Clear amount"
            iconProps={{ color: IconColor.IconAlternative }}
            onPress={() => setPercent(0)}
          />
        </Box>
      </Box>
      <Slider
        value={percent}
        onValueChange={setPercent}
        showRangeDots
        accessibilityLabel="Percent of SAFE balance"
      />
    </Box>
  );
}

export const TokenPercent: Story = {
  render: () => <TokenPercentSample />,
};

const AVAILABLE_USD = 3.44;
const MAX_BTC = 0.000009;

type SizeUnit = 'BTC' | 'USD';

const formatOrderUsd = (amount: number): string =>
  `$${amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const formatOrderBtc = (amount: number): string => {
  const fixed = amount.toFixed(8);
  return fixed.replace(/\.?0+$/u, '') || '0';
};

function SizeInputSample() {
  const [percent, setPercent] = useState(100);
  const [unit, setUnit] = useState<SizeUnit>('BTC');

  const sizeUsd = Math.round(((AVAILABLE_USD * percent) / 100) * 100) / 100;
  const sizeBtc = Math.round(((MAX_BTC * percent) / 100) * 1e8) / 1e8;
  const amount =
    unit === 'BTC' ? formatOrderBtc(sizeBtc) : formatOrderUsd(sizeUsd);
  const nextUnit: SizeUnit = unit === 'BTC' ? 'USD' : 'BTC';

  return (
    <Card twClassName="w-full max-w-sm overflow-hidden p-0">
      <Box padding={4} gap={2}>
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          justifyContent={BoxJustifyContent.Between}
        >
          <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
            {`Size (${unit})`}
          </Text>
          <ButtonIcon
            iconName={IconName.SwapHorizontal}
            size={ButtonIconSize.Sm}
            accessibilityLabel={`Show size in ${nextUnit}`}
            onPress={() => setUnit(nextUnit)}
          />
        </Box>

        <Text variant={TextVariant.DisplayMd}>{amount}</Text>

        <Box twClassName="pt-2">
          <Slider
            value={percent}
            minimumValue={0}
            maximumValue={100}
            onValueChange={setPercent}
            accessibilityLabel="Size"
          />
        </Box>
      </Box>

      <Box
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        gap={1}
        borderColor={BoxBorderColor.BorderMuted}
        paddingHorizontal={4}
        paddingVertical={4}
        twClassName="border-t"
      >
        <Text variant={TextVariant.BodyMd} color={TextColor.TextAlternative}>
          {`${formatOrderUsd(AVAILABLE_USD)} available`}
        </Text>
        <ButtonIcon
          iconName={IconName.AddCircle}
          size={ButtonIconSize.Xs}
          accessibilityLabel="Add funds"
          iconProps={{ color: IconColor.IconAlternative }}
          onPress={() => undefined}
        />
      </Box>
    </Card>
  );
}

export const SizeInput: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  render: () => <SizeInputSample />,
};
