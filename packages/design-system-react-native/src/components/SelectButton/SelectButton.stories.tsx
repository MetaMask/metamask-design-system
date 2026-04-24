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
    twClassName: {
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
    children: 'Select an option',
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
        startAccessory={<Icon name={IconName.Search} size={IconSize.Sm} />}
      >
        With start accessory
      </SelectButton>
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
        >
          {`End arrow: ${key}`}
        </SelectButton>
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
        textProps={{
          variant: TextVariant.BodySm,
          color: TextColor.TextAlternative,
        }}
      >
        Custom text variant and color
      </SelectButton>
    </SelectButtonStoryWrapper>
  ),
};

export const EndArrowDirectionIconProps: Story = {
  render: () => (
    <SelectButtonStoryWrapper style={{ gap: 16 }}>
      <SelectButton
        onPress={noopPress}
        endArrowDirection={SelectButtonEndArrow.Down}
        endArrowDirectionIconProps={{ size: IconSize.Sm }}
      >
        Small arrow
      </SelectButton>
      <SelectButton
        onPress={noopPress}
        endArrowDirection={SelectButtonEndArrow.Down}
        endArrowDirectionIconProps={{ size: IconSize.Lg }}
      >
        Large arrow
      </SelectButton>
    </SelectButtonStoryWrapper>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <SelectButtonStoryWrapper style={{ gap: 16 }}>
      <SelectButton
        onPress={noopPress}
        endArrowDirection={SelectButtonEndArrow.Down}
      >
        Enabled
      </SelectButton>
      <SelectButton
        onPress={noopPress}
        endArrowDirection={SelectButtonEndArrow.Down}
        isDisabled
      >
        Disabled
      </SelectButton>
    </SelectButtonStoryWrapper>
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <SelectButtonStoryWrapper style={{ gap: 16 }}>
      <SelectButton
        onPress={noopPress}
        endAccessory={<Icon name={IconName.Close} size={IconSize.Sm} />}
      >
        Custom trailing content
      </SelectButton>
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
      >
        Primary (ButtonSecondary look)
      </SelectButton>
      <SelectButton
        onPress={noopPress}
        variant={SelectButtonVariant.Secondary}
        endArrowDirection={SelectButtonEndArrow.Down}
      >
        Secondary (ButtonTertiary look)
      </SelectButton>
      <SelectButton
        onPress={noopPress}
        variant={SelectButtonVariant.Tertiary}
        endArrowDirection={SelectButtonEndArrow.Down}
      >
        Tertiary (alternative text)
      </SelectButton>
    </SelectButtonStoryWrapper>
  ),
};
