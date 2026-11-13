import {
  IconName,
  IconSize,
  SelectButtonEndArrow,
  SelectButtonSize,
  SelectButtonVariant,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box, BoxAlignItems, BoxFlexDirection } from '../Box';
import type { BoxProps } from '../Box';
import { Icon } from '../Icon';

import README from './README.mdx';
import { SelectButton } from './SelectButton';
import type { SelectButtonProps } from './SelectButton.types';

const meta: Meta<SelectButtonProps> = {
  title: 'React Components/SelectButton',
  component: SelectButton,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: Object.keys(SelectButtonSize),
      mapping: SelectButtonSize,
      description: 'Height size of the button.',
    },
    variant: {
      control: 'select',
      options: Object.keys(SelectButtonVariant),
      mapping: SelectButtonVariant,
    },
    endArrowDirection: {
      control: 'select',
      options: Object.keys(SelectButtonEndArrow),
      mapping: SelectButtonEndArrow,
    },
    isDisabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    isFullWidth: {
      control: 'boolean',
    },
    hideEndArrow: {
      control: 'boolean',
    },
    onClick: {
      action: 'onClick',
    },
  },
};

export default meta;

const SelectButtonStoryWrapper = ({ children, ...props }: BoxProps) => (
  <Box
    padding={4}
    flexDirection={BoxFlexDirection.Column}
    alignItems={BoxAlignItems.Start}
    className="w-fit"
    {...props}
  >
    {children}
  </Box>
);

type Story = StoryObj<SelectButtonProps>;

export const Default: Story = {
  args: {
    placeholder: 'Select an option',
    variant: SelectButtonVariant.Primary,
    endArrowDirection: SelectButtonEndArrow.Down,
    isDisabled: false,
  },
  render: (args) => (
    <SelectButtonStoryWrapper>
      <SelectButton {...args} />
    </SelectButtonStoryWrapper>
  ),
};

export const Value: Story = {
  render: (args) => (
    <SelectButtonStoryWrapper gap={4}>
      <SelectButton {...args} placeholder="Select network" value={undefined} />
      <SelectButton
        {...args}
        placeholder="Select network"
        value="Ethereum Mainnet"
      />
    </SelectButtonStoryWrapper>
  ),
};

export const Variant: Story = {
  render: (args) => (
    <SelectButtonStoryWrapper gap={4}>
      <SelectButton
        {...args}
        variant={SelectButtonVariant.Primary}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="Primary (ButtonSecondary look)"
      />
      <SelectButton
        {...args}
        variant={SelectButtonVariant.Secondary}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="Secondary (ButtonTertiary look)"
      />
      <SelectButton
        {...args}
        variant={SelectButtonVariant.Tertiary}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="Tertiary (alternative text)"
      />
    </SelectButtonStoryWrapper>
  ),
};

export const Size: Story = {
  render: (args) => (
    <SelectButtonStoryWrapper gap={4}>
      {(
        Object.entries(SelectButtonSize) as [
          keyof typeof SelectButtonSize,
          (typeof SelectButtonSize)[keyof typeof SelectButtonSize],
        ][]
      ).map(([key, size]) => (
        <SelectButton
          key={key}
          {...args}
          size={size}
          placeholder={`Size: ${key}`}
        />
      ))}
    </SelectButtonStoryWrapper>
  ),
};

export const IsFullWidth: Story = {
  render: (args) => (
    <SelectButtonStoryWrapper gap={4} className="w-80">
      {Object.values(SelectButtonVariant).map((variant) => (
        <SelectButton
          key={variant}
          {...args}
          isFullWidth
          variant={variant}
          startAccessory={<Icon name={IconName.Search} size={IconSize.Sm} />}
          placeholder={`${variant} full width`}
        />
      ))}
    </SelectButtonStoryWrapper>
  ),
};

export const IsDisabled: Story = {
  render: (args) => (
    <SelectButtonStoryWrapper gap={4}>
      <SelectButton
        {...args}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="Enabled"
        isDisabled={false}
      />
      <SelectButton
        {...args}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="Disabled"
        isDisabled
      />
    </SelectButtonStoryWrapper>
  ),
};

export const IsLoading: Story = {
  render: (args) => (
    <SelectButtonStoryWrapper gap={4}>
      <SelectButton {...args} placeholder="Loading" isLoading />
      <SelectButton
        {...args}
        variant={SelectButtonVariant.Secondary}
        placeholder="Loading"
        isLoading
      />
    </SelectButtonStoryWrapper>
  ),
};

export const HideEndArrow: Story = {
  render: (args) => (
    <SelectButtonStoryWrapper>
      <SelectButton {...args} placeholder="No chevron" hideEndArrow />
    </SelectButtonStoryWrapper>
  ),
};

export const StartAccessory: Story = {
  render: (args) => (
    <SelectButtonStoryWrapper gap={4}>
      <SelectButton
        {...args}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="With start accessory"
        startAccessory={<Icon name={IconName.Search} size={IconSize.Sm} />}
      />
    </SelectButtonStoryWrapper>
  ),
};

export const EndAccessory: Story = {
  render: (args) => (
    <SelectButtonStoryWrapper gap={4}>
      <SelectButton
        {...args}
        placeholder="Custom trailing content"
        endAccessory={<Icon name={IconName.Close} size={IconSize.Sm} />}
      />
    </SelectButtonStoryWrapper>
  ),
};

export const EndArrowDirection: Story = {
  render: (args) => (
    <SelectButtonStoryWrapper gap={4}>
      {(
        Object.entries(SelectButtonEndArrow) as [
          keyof typeof SelectButtonEndArrow,
          (typeof SelectButtonEndArrow)[keyof typeof SelectButtonEndArrow],
        ][]
      ).map(([key, direction]) => (
        <SelectButton
          key={key}
          {...args}
          endArrowDirection={direction}
          placeholder={`End arrow: ${key}`}
        />
      ))}
    </SelectButtonStoryWrapper>
  ),
};

export const TextProps: Story = {
  render: (args) => (
    <SelectButtonStoryWrapper>
      <SelectButton
        {...args}
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
  render: (args) => (
    <SelectButtonStoryWrapper gap={4}>
      <SelectButton
        {...args}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="Small arrow"
        endArrowDirectionIconProps={{ size: IconSize.Sm }}
      />
      <SelectButton
        {...args}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="Large arrow"
        endArrowDirectionIconProps={{ size: IconSize.Lg }}
      />
    </SelectButtonStoryWrapper>
  ),
};
