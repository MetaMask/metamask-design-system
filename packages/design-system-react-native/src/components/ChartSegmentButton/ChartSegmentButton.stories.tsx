import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { Icon, IconName, IconSize } from '../Icon';

import { ChartSegmentButton } from './ChartSegmentButton';
import type { ChartSegmentButtonProps } from './ChartSegmentButton.types';

const noopPress = () => undefined;

const meta: Meta<ChartSegmentButtonProps> = {
  title: 'Components/ChartSegmentButton',
  component: ChartSegmentButton,
  argTypes: {
    isSelected: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
  },
};

export default meta;

const ChartSegmentButtonStoryWrapper: React.FC<ViewProps> = ({
  children,
  ...props
}) => {
  const tw = useTailwind();
  return (
    <View {...props} style={[tw`flex-row flex-wrap gap-2 p-4`, props.style]}>
      {children}
    </View>
  );
};

type Story = StoryObj<ChartSegmentButtonProps>;

export const Default: Story = {
  args: {
    children: '1D',
    isSelected: true,
    isDisabled: false,
    isLoading: false,
    onPress: noopPress,
  },
  render: (args) => (
    <ChartSegmentButtonStoryWrapper>
      <ChartSegmentButton {...args} />
    </ChartSegmentButtonStoryWrapper>
  ),
};

export const IsSelected: Story = {
  render: () => (
    <ChartSegmentButtonStoryWrapper>
      <ChartSegmentButton isSelected onPress={noopPress}>
        1D
      </ChartSegmentButton>
      <ChartSegmentButton isSelected={false} onPress={noopPress}>
        1W
      </ChartSegmentButton>
      <ChartSegmentButton isSelected={false} onPress={noopPress}>
        1M
      </ChartSegmentButton>
    </ChartSegmentButtonStoryWrapper>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <ChartSegmentButtonStoryWrapper>
      <ChartSegmentButton isSelected onPress={noopPress}>
        Enabled
      </ChartSegmentButton>
      <ChartSegmentButton isSelected={false} isDisabled onPress={noopPress}>
        Disabled
      </ChartSegmentButton>
    </ChartSegmentButtonStoryWrapper>
  ),
};

export const IsLoading: Story = {
  render: () => (
    <ChartSegmentButtonStoryWrapper>
      <ChartSegmentButton isSelected isLoading onPress={noopPress}>
        Loading
      </ChartSegmentButton>
    </ChartSegmentButtonStoryWrapper>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <ChartSegmentButtonStoryWrapper>
      <ChartSegmentButton
        isSelected={false}
        startIconName={IconName.Activity}
        startIconProps={{ testID: 'chart-segment-start-icon' }}
        onPress={noopPress}
      >
        Activity
      </ChartSegmentButton>
      <ChartSegmentButton
        isSelected={false}
        startAccessory={<Icon name={IconName.Chart} size={IconSize.Sm} />}
        onPress={noopPress}
      >
        Custom start
      </ChartSegmentButton>
    </ChartSegmentButtonStoryWrapper>
  ),
};
