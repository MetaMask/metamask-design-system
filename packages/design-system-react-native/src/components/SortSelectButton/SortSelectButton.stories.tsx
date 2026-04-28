import { SelectButtonEndArrow } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { SortSelectButton } from './SortSelectButton';
import type { SortSelectButtonProps } from './SortSelectButton.types';

const noopPress = () => undefined;

const meta: Meta<SortSelectButtonProps> = {
  title: 'Components/SortSelectButton',
  component: SortSelectButton,
  argTypes: {
    endArrowDirection: {
      control: 'select',
      options: [...Object.values(SelectButtonEndArrow), undefined],
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

const SortSelectButtonStoryWrapper: React.FC<ViewProps> = ({
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

type Story = StoryObj<SortSelectButtonProps>;

export const Default: Story = {
  args: {
    placeholder: 'Sort',
    endArrowDirection: SelectButtonEndArrow.Down,
    isDisabled: false,
    onPress: noopPress,
  },
  render: (args) => (
    <SortSelectButtonStoryWrapper>
      <SortSelectButton {...args} />
    </SortSelectButtonStoryWrapper>
  ),
};

export const Placeholder: Story = {
  render: () => (
    <SortSelectButtonStoryWrapper style={{ gap: 16 }}>
      <SortSelectButton
        placeholder="Sort by"
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </SortSelectButtonStoryWrapper>
  ),
};

export const Value: Story = {
  render: () => (
    <SortSelectButtonStoryWrapper style={{ gap: 16 }}>
      <SortSelectButton
        placeholder="Sort"
        value="Price: low to high"
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
    </SortSelectButtonStoryWrapper>
  ),
};

export const EndArrow: Story = {
  render: () => (
    <SortSelectButtonStoryWrapper style={{ gap: 16 }}>
      {(
        Object.entries(SelectButtonEndArrow) as [
          keyof typeof SelectButtonEndArrow,
          (typeof SelectButtonEndArrow)[keyof typeof SelectButtonEndArrow],
        ][]
      ).map(([key, value]) => (
        <SortSelectButton
          key={key}
          placeholder={`Arrow: ${key}`}
          endArrowDirection={value}
          testID={`sort-select-end-${key}`}
          onPress={noopPress}
        />
      ))}
    </SortSelectButtonStoryWrapper>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <SortSelectButtonStoryWrapper style={{ gap: 16 }}>
      <SortSelectButton
        placeholder="Sort"
        endArrowDirection={SelectButtonEndArrow.Down}
        onPress={noopPress}
      />
      <SortSelectButton
        placeholder="Sort"
        endArrowDirection={SelectButtonEndArrow.Down}
        isDisabled
        onPress={noopPress}
      />
    </SortSelectButtonStoryWrapper>
  ),
};
