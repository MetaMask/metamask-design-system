import { FilterButtonVariant } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { Icon, IconName, IconSize } from '../Icon';

import { FilterButton } from './FilterButton';
import type { FilterButtonProps } from './FilterButton.types';

const noopPress = () => undefined;

const meta: Meta<FilterButtonProps> = {
  title: 'Components/FilterButton',
  component: FilterButton,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(FilterButtonVariant),
    },
    isSelected: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
};

export default meta;

const FilterButtonStoryWrapper: React.FC<ViewProps> = ({
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

type Story = StoryObj<FilterButtonProps>;

export const Default: Story = {
  args: {
    children: 'Segment',
    variant: FilterButtonVariant.Primary,
    isSelected: true,
    isDisabled: false,
    isLoading: false,
    onPress: noopPress,
  },
  render: (args: FilterButtonProps) => (
    <FilterButtonStoryWrapper>
      <FilterButton {...args} />
    </FilterButtonStoryWrapper>
  ),
};

export const Variant: Story = {
  render: () => (
    <FilterButtonStoryWrapper>
      <FilterButton
        variant={FilterButtonVariant.Primary}
        isSelected
        children="Primary selected"
        onPress={noopPress}
      />
      <FilterButton
        variant={FilterButtonVariant.Primary}
        isSelected={false}
        children="Primary unselected"
        onPress={noopPress}
      />
      <FilterButton
        variant={FilterButtonVariant.Secondary}
        isSelected
        children="Secondary selected"
        onPress={noopPress}
      />
      <FilterButton
        variant={FilterButtonVariant.Secondary}
        isSelected={false}
        children="Secondary unselected"
        onPress={noopPress}
      />
    </FilterButtonStoryWrapper>
  ),
};

export const IsSelected: Story = {
  render: () => (
    <FilterButtonStoryWrapper>
      <FilterButton
        variant={FilterButtonVariant.Primary}
        isSelected
        children="Selected"
        onPress={noopPress}
      />
      <FilterButton
        variant={FilterButtonVariant.Primary}
        isSelected={false}
        children="Unselected"
        onPress={noopPress}
      />
    </FilterButtonStoryWrapper>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <FilterButtonStoryWrapper>
      <FilterButton
        variant={FilterButtonVariant.Primary}
        children="Enabled"
        onPress={noopPress}
      />
      <FilterButton
        variant={FilterButtonVariant.Primary}
        isDisabled
        children="Disabled"
        onPress={noopPress}
      />
    </FilterButtonStoryWrapper>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <FilterButtonStoryWrapper>
      <FilterButton
        variant={FilterButtonVariant.Secondary}
        isSelected={false}
        startIconName={IconName.Search}
        startIconProps={{ testID: 'filter-button-start-icon' }}
        children="With icon"
        onPress={noopPress}
      />
      <FilterButton
        variant={FilterButtonVariant.Primary}
        isSelected={false}
        startAccessory={<Icon name={IconName.Wallet} size={IconSize.Sm} />}
        children="Custom start"
        onPress={noopPress}
      />
    </FilterButtonStoryWrapper>
  ),
};
