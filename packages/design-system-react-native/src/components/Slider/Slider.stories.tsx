import { TickColor } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import { useEffect, useState } from 'react';

import { Box } from '../Box';

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
        'When true, renders tappable labels below the track for ticks with a label.',
    },
    showRangeDots: {
      control: 'boolean',
      description:
        'When true, renders dots on the track at each tick position.',
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

export const CustomTicks: Story = {
  render: () => (
    <ControlledSlider
      value={50}
      ticks={[
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
      ticks={[
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

export const ThemedTicks: Story = {
  render: () => (
    <ControlledSlider
      value={10}
      minimumValue={1}
      maximumValue={40}
      ticks={[
        { step: 0, label: '1x', value: 1, color: TickColor.SuccessDefault },
        { step: 23, label: '10x', value: 10, color: TickColor.WarningDefault },
        { step: 49, label: '20x', value: 20, color: TickColor.WarningDefault },
        { step: 74, label: '30x', value: 30, color: TickColor.WarningDefault },
        { step: 100, label: '40x', value: 40, color: TickColor.ErrorDefault },
      ]}
      showRangeLabels
      showRangeDots
    />
  ),
};

export const CustomHexColor: Story = {
  render: () => (
    <ControlledSlider
      value={50}
      ticks={[
        { step: 0, label: '0%', color: '#39FF14' },
        { step: 25, label: '25%', color: '#00D4FF' },
        { step: 50, label: '50%', color: '#FF00FF' },
        { step: 75, label: '75%', color: '#FF6600' },
        { step: 100, label: '100%', color: '#FF0040' },
      ]}
      showRangeLabels
      showRangeDots
    />
  ),
};
