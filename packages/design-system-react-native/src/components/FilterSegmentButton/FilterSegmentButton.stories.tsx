import { SegmentButtonVariant } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { Icon, IconName, IconSize } from '../Icon';

import { FilterSegmentButton } from './FilterSegmentButton';
import type { FilterSegmentButtonProps } from './FilterSegmentButton.types';

const noopPress = () => undefined;

const meta: Meta<FilterSegmentButtonProps> = {
  title: 'Components/FilterSegmentButton',
  component: FilterSegmentButton,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(SegmentButtonVariant),
    },
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

const FilterSegmentButtonStoryWrapper: React.FC<ViewProps> = ({
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

type Story = StoryObj<FilterSegmentButtonProps>;

export const Default: Story = {
  args: {
    children: 'All',
    variant: SegmentButtonVariant.Primary,
    isSelected: true,
    isDisabled: false,
    isLoading: false,
    onPress: noopPress,
  },
  render: (args) => (
    <FilterSegmentButtonStoryWrapper>
      <FilterSegmentButton {...args} />
    </FilterSegmentButtonStoryWrapper>
  ),
};

export const Variant: Story = {
  render: () => (
    <FilterSegmentButtonStoryWrapper>
      <FilterSegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected
        onPress={noopPress}
      >
        Primary selected
      </FilterSegmentButton>
      <FilterSegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected={false}
        onPress={noopPress}
      >
        Primary unselected
      </FilterSegmentButton>
      <FilterSegmentButton
        variant={SegmentButtonVariant.Secondary}
        isSelected
        onPress={noopPress}
      >
        Secondary selected
      </FilterSegmentButton>
      <FilterSegmentButton
        variant={SegmentButtonVariant.Secondary}
        isSelected={false}
        onPress={noopPress}
      >
        Secondary unselected
      </FilterSegmentButton>
    </FilterSegmentButtonStoryWrapper>
  ),
};

export const IsSelected: Story = {
  render: () => (
    <FilterSegmentButtonStoryWrapper>
      <FilterSegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected
        onPress={noopPress}
      >
        Selected
      </FilterSegmentButton>
      <FilterSegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected={false}
        onPress={noopPress}
      >
        Unselected
      </FilterSegmentButton>
    </FilterSegmentButtonStoryWrapper>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <FilterSegmentButtonStoryWrapper>
      <FilterSegmentButton
        variant={SegmentButtonVariant.Primary}
        onPress={noopPress}
      >
        Enabled
      </FilterSegmentButton>
      <FilterSegmentButton
        variant={SegmentButtonVariant.Primary}
        isDisabled
        onPress={noopPress}
      >
        Disabled
      </FilterSegmentButton>
    </FilterSegmentButtonStoryWrapper>
  ),
};

export const IsLoading: Story = {
  render: () => (
    <FilterSegmentButtonStoryWrapper>
      <FilterSegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected
        isLoading
        onPress={noopPress}
      >
        Loading
      </FilterSegmentButton>
    </FilterSegmentButtonStoryWrapper>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <FilterSegmentButtonStoryWrapper>
      <FilterSegmentButton
        variant={SegmentButtonVariant.Secondary}
        isSelected={false}
        startIconName={IconName.Filter}
        startIconProps={{ testID: 'filter-segment-start-icon' }}
        onPress={noopPress}
      >
        With icon
      </FilterSegmentButton>
      <FilterSegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected={false}
        startAccessory={<Icon name={IconName.Search} size={IconSize.Sm} />}
        onPress={noopPress}
      >
        Custom start
      </FilterSegmentButton>
    </FilterSegmentButtonStoryWrapper>
  ),
};
