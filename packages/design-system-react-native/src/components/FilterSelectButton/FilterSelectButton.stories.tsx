import { SelectButtonEndArrow } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { Icon, IconName, IconSize } from '../Icon';

import { FilterSelectButton } from './FilterSelectButton';
import type { FilterSelectButtonProps } from './FilterSelectButton.types';

const noopPress = () => undefined;

const meta: Meta<FilterSelectButtonProps> = {
  title: 'Components/FilterSelectButton',
  component: FilterSelectButton,
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

const FilterSelectButtonStoryWrapper: React.FC<ViewProps> = ({
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

type Story = StoryObj<FilterSelectButtonProps>;

export const Default: Story = {
  args: {
    placeholder: 'Filters',
    value: 'Active only',
    endArrowDirection: SelectButtonEndArrow.Down,
    hideEndArrow: false,
    isDisabled: false,
    onPress: noopPress,
  },
  render: (args) => (
    <FilterSelectButtonStoryWrapper>
      <FilterSelectButton {...args} />
    </FilterSelectButtonStoryWrapper>
  ),
};

export const Placeholder: Story = {
  render: () => (
    <FilterSelectButtonStoryWrapper style={{ gap: 16 }}>
      <FilterSelectButton
        placeholder="Add filters"
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </FilterSelectButtonStoryWrapper>
  ),
};

export const Value: Story = {
  render: () => (
    <FilterSelectButtonStoryWrapper style={{ gap: 16 }}>
      <FilterSelectButton
        placeholder="Filters"
        value="2 selected"
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </FilterSelectButtonStoryWrapper>
  ),
};

export const EndArrow: Story = {
  render: () => (
    <FilterSelectButtonStoryWrapper style={{ gap: 16 }}>
      {(
        Object.entries(SelectButtonEndArrow) as [
          keyof typeof SelectButtonEndArrow,
          (typeof SelectButtonEndArrow)[keyof typeof SelectButtonEndArrow],
        ][]
      ).map(([key, value]) => (
        <FilterSelectButton
          key={key}
          placeholder={`Arrow: ${key}`}
          endArrowDirection={value}
          testID={`filter-select-end-${key}`}
          onPress={noopPress}
        />
      ))}
    </FilterSelectButtonStoryWrapper>
  ),
};

export const HideEndArrow: Story = {
  render: () => (
    <FilterSelectButtonStoryWrapper style={{ gap: 16 }}>
      <FilterSelectButton
        placeholder="Filters"
        value="Hidden arrow"
        hideEndArrow
        onPress={noopPress}
      />
    </FilterSelectButtonStoryWrapper>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <FilterSelectButtonStoryWrapper style={{ gap: 16 }}>
      <FilterSelectButton
        placeholder="Filters"
        value="Tokens"
        startAccessory={<Icon name={IconName.Filter} size={IconSize.Sm} />}
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </FilterSelectButtonStoryWrapper>
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <FilterSelectButtonStoryWrapper style={{ gap: 16 }}>
      <FilterSelectButton
        placeholder="Filters"
        endAccessory={<Icon name={IconName.Close} size={IconSize.Sm} />}
        onPress={noopPress}
      />
    </FilterSelectButtonStoryWrapper>
  ),
};

export const EndArrowDirectionIconProps: Story = {
  render: () => (
    <FilterSelectButtonStoryWrapper style={{ gap: 16 }}>
      <FilterSelectButton
        placeholder="Small arrow"
        endArrowDirection={SelectButtonEndArrow.Down}
        endArrowDirectionIconProps={{ size: IconSize.Sm }}
        onPress={noopPress}
      />
      <FilterSelectButton
        placeholder="Large arrow"
        endArrowDirection={SelectButtonEndArrow.Down}
        endArrowDirectionIconProps={{ size: IconSize.Lg }}
        onPress={noopPress}
      />
    </FilterSelectButtonStoryWrapper>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <FilterSelectButtonStoryWrapper style={{ gap: 16 }}>
      <FilterSelectButton
        placeholder="Filters"
        value="Enabled"
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
      <FilterSelectButton
        placeholder="Filters"
        value="Disabled"
        endArrowDirection={SelectButtonEndArrow.Down}
        isDisabled
        onPress={noopPress}
      />
    </FilterSelectButtonStoryWrapper>
  ),
};
