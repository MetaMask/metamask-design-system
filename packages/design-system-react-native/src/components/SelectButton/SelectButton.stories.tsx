import {
  SelectButtonEndArrow,
  SelectButtonVariant,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { Icon, IconName, IconSize } from '../Icon';

import { SelectButton } from './SelectButton';
import type { SelectButtonProps } from './SelectButton.types';

const noopPress = () => undefined;

const meta: Meta<SelectButtonProps> = {
  title: 'Components/SelectButton',
  component: SelectButton,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(SelectButtonVariant),
    },
    endArrowDirection: {
      control: 'select',
      options: [...Object.values(SelectButtonEndArrow), undefined],
    },
    isDisabled: {
      control: 'boolean',
    },
    hideEndArrow: {
      control: 'boolean',
    },
    twClassName: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;

const SelectButtonStoryWrapper: React.FC<ViewProps> = ({
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

type Story = StoryObj<SelectButtonProps>;

export const Default: Story = {
  args: {
    placeholder: 'Select an option',
    variant: SelectButtonVariant.Primary,
    endArrowDirection: SelectButtonEndArrow.Down,
    isDisabled: false,
    twClassName: '',
    onPress: noopPress,
  },
  render: (args) => (
    <SelectButtonStoryWrapper>
      <SelectButton {...args} />
    </SelectButtonStoryWrapper>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <SelectButtonStoryWrapper style={{ gap: 16 }}>
      <SelectButton
        onPress={noopPress}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="With start accessory"
        startAccessory={<Icon name={IconName.Search} size={IconSize.Sm} />}
      />
    </SelectButtonStoryWrapper>
  ),
};

export const EndArrow: Story = {
  render: () => (
    <SelectButtonStoryWrapper style={{ gap: 16 }}>
      {(
        Object.entries(SelectButtonEndArrow) as [
          keyof typeof SelectButtonEndArrow,
          (typeof SelectButtonEndArrow)[keyof typeof SelectButtonEndArrow],
        ][]
      ).map(([key, value]) => (
        <SelectButton
          key={key}
          endArrowDirection={value}
          testID={`select-button-end-${key}`}
          onPress={noopPress}
          placeholder={`End arrow: ${key}`}
        />
      ))}
    </SelectButtonStoryWrapper>
  ),
};

export const TextProps: Story = {
  render: () => (
    <SelectButtonStoryWrapper>
      <SelectButton
        onPress={noopPress}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="Custom text variant and color"
        textProps={{
          variant: TextVariant.BodySm,
          color: TextColor.TextAlternative,
        }}
      />
    </SelectButtonStoryWrapper>
  ),
};

export const EndArrowDirectionIconProps: Story = {
  render: () => (
    <SelectButtonStoryWrapper style={{ gap: 16 }}>
      <SelectButton
        onPress={noopPress}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="Small arrow"
        endArrowDirectionIconProps={{ size: IconSize.Sm }}
      />
      <SelectButton
        onPress={noopPress}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="Large arrow"
        endArrowDirectionIconProps={{ size: IconSize.Lg }}
      />
    </SelectButtonStoryWrapper>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <SelectButtonStoryWrapper style={{ gap: 16 }}>
      <SelectButton
        onPress={noopPress}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="Enabled"
      />
      <SelectButton
        onPress={noopPress}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="Disabled"
        isDisabled
      />
    </SelectButtonStoryWrapper>
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <SelectButtonStoryWrapper style={{ gap: 16 }}>
      <SelectButton
        onPress={noopPress}
        placeholder="Custom trailing content"
        endAccessory={<Icon name={IconName.Close} size={IconSize.Sm} />}
      />
    </SelectButtonStoryWrapper>
  ),
};

export const Variants: Story = {
  render: () => (
    <SelectButtonStoryWrapper style={{ gap: 16 }}>
      <SelectButton
        onPress={noopPress}
        variant={SelectButtonVariant.Primary}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="Primary (ButtonSecondary look)"
      />
      <SelectButton
        onPress={noopPress}
        variant={SelectButtonVariant.Secondary}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="Secondary (ButtonTertiary look)"
      />
      <SelectButton
        onPress={noopPress}
        variant={SelectButtonVariant.Tertiary}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="Tertiary (alternative text)"
      />
    </SelectButtonStoryWrapper>
  ),
};
