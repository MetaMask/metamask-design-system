import { SelectButtonEndArrow } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { Icon, IconName, IconSize } from '../Icon';

import { ChartSelectButton } from './ChartSelectButton';
import type { ChartSelectButtonProps } from './ChartSelectButton.types';

const noopPress = () => undefined;

const meta: Meta<ChartSelectButtonProps> = {
  title: 'Components/ChartSelectButton',
  component: ChartSelectButton,
  argTypes: {
    endArrowDirection: {
      control: 'select',
      options: [...Object.values(SelectButtonEndArrow), undefined],
    },
    hideEndArrow: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },
};

export default meta;

const ChartSelectButtonStoryWrapper: React.FC<ViewProps> = ({
  children,
  ...props
}) => {
  const tw = useTailwind();
  return (
    <View {...props} style={[tw`p-4`, props.style]}>
      {children}
    </View>
  );
};

type Story = StoryObj<ChartSelectButtonProps>;

export const Default: Story = {
  args: {
    placeholder: 'Chart',
    value: 'Line',
    endArrowDirection: SelectButtonEndArrow.Down,
    hideEndArrow: false,
    isDisabled: false,
    onPress: noopPress,
  },
  render: (args) => (
    <ChartSelectButtonStoryWrapper>
      <ChartSelectButton {...args} />
    </ChartSelectButtonStoryWrapper>
  ),
};

export const Placeholder: Story = {
  render: () => (
    <ChartSelectButtonStoryWrapper style={{ gap: 16 }}>
      <ChartSelectButton
        placeholder="Chart type"
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </ChartSelectButtonStoryWrapper>
  ),
};

export const Value: Story = {
  render: () => (
    <ChartSelectButtonStoryWrapper style={{ gap: 16 }}>
      <ChartSelectButton
        placeholder="Chart"
        value="Candlestick"
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </ChartSelectButtonStoryWrapper>
  ),
};

export const EndArrow: Story = {
  render: () => (
    <ChartSelectButtonStoryWrapper style={{ gap: 16 }}>
      {(
        Object.entries(SelectButtonEndArrow) as [
          keyof typeof SelectButtonEndArrow,
          (typeof SelectButtonEndArrow)[keyof typeof SelectButtonEndArrow],
        ][]
      ).map(([key, value]) => (
        <ChartSelectButton
          key={key}
          placeholder={`Arrow: ${key}`}
          endArrowDirection={value}
          testID={`chart-select-end-${key}`}
          onPress={noopPress}
        />
      ))}
    </ChartSelectButtonStoryWrapper>
  ),
};

export const HideEndArrow: Story = {
  render: () => (
    <ChartSelectButtonStoryWrapper style={{ gap: 16 }}>
      <ChartSelectButton
        placeholder="No trailing arrow"
        value="Line"
        hideEndArrow
        onPress={noopPress}
      />
    </ChartSelectButtonStoryWrapper>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <ChartSelectButtonStoryWrapper style={{ gap: 16 }}>
      <ChartSelectButton
        placeholder="Chart"
        value="Area"
        startAccessory={<Icon name={IconName.Chart} size={IconSize.Sm} />}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </ChartSelectButtonStoryWrapper>
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <ChartSelectButtonStoryWrapper style={{ gap: 16 }}>
      <ChartSelectButton
        placeholder="Custom trailing"
        endAccessory={<Icon name={IconName.Close} size={IconSize.Sm} />}
        onPress={noopPress}
      />
    </ChartSelectButtonStoryWrapper>
  ),
};

export const EndArrowDirectionIconProps: Story = {
  render: () => (
    <ChartSelectButtonStoryWrapper style={{ gap: 16 }}>
      <ChartSelectButton
        placeholder="Small arrow"
        endArrowDirection={SelectButtonEndArrow.Down}
        endArrowDirectionIconProps={{ size: IconSize.Sm }}
        onPress={noopPress}
      />
      <ChartSelectButton
        placeholder="Large arrow"
        endArrowDirection={SelectButtonEndArrow.Down}
        endArrowDirectionIconProps={{ size: IconSize.Lg }}
        onPress={noopPress}
      />
    </ChartSelectButtonStoryWrapper>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <ChartSelectButtonStoryWrapper style={{ gap: 16 }}>
      <ChartSelectButton
        placeholder="Chart"
        value="Line"
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
      <ChartSelectButton
        placeholder="Chart"
        value="Line"
        endArrowDirection={SelectButtonEndArrow.Down}
        isDisabled
        onPress={noopPress}
      />
    </ChartSelectButtonStoryWrapper>
  ),
};
