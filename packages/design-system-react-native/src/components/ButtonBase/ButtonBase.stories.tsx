import {
  BoxFlexDirection,
  BoxFlexWrap,
  ButtonBaseShape,
  ButtonBaseSize,
  IconName,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Box } from '../Box';
import { FontWeight, Text, TextColor, TextVariant } from '../Text';

import { ButtonBase } from './ButtonBase';

const meta: Meta<typeof ButtonBase> = {
  title: 'Components/ButtonBase',
  component: ButtonBase,
  argTypes: {
    children: {
      control: 'text',
      description:
        'Required prop for the content to be rendered within the ButtonBase',
    },
    size: {
      control: 'select',
      options: Object.keys(ButtonBaseSize),
      mapping: ButtonBaseSize,
      description: 'Optional prop to control the size of the ButtonBase',
    },
    shape: {
      control: 'select',
      options: Object.keys(ButtonBaseShape),
      mapping: ButtonBaseShape,
      description:
        'Optional prop for corner style: size-based radius or fully rounded (pill)',
    },
    isLoading: {
      control: 'boolean',
      description: 'Optional prop that when true, shows a loading spinner',
    },
    loadingText: {
      control: 'text',
      description:
        'Optional prop for text to display when ButtonBase is in loading state',
    },
    startIconName: {
      control: 'select',
      options: Object.keys(IconName),
      mapping: IconName,
      description:
        'Optional prop to specify an icon to show at the start of the ButtonBase',
    },
    endIconName: {
      control: 'select',
      options: Object.keys(IconName),
      mapping: IconName,
      description:
        'Optional prop to specify an icon to show at the end of the ButtonBase',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Optional prop that when true, disables the ButtonBase',
    },
    isFullWidth: {
      control: 'boolean',
      description:
        'Optional prop that when true, makes the ButtonBase take up the full width of its container',
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

type Story = StoryObj<typeof ButtonBase>;

export const Default: Story = {
  args: {
    children: 'ButtonBase',
    size: ButtonBaseSize.Lg,
    shape: ButtonBaseShape.Rounded,
    isLoading: false,
    isDisabled: false,
    isFullWidth: false,
  },
  render: (args) => <ButtonBase {...args}>{args.children}</ButtonBase>,
};

export const Size: Story = {
  render: (args) => (
    <Box gap={4}>
      <ButtonBase {...args} size={ButtonBaseSize.Sm}>
        ButtonBaseSize Sm
      </ButtonBase>
      <ButtonBase {...args} size={ButtonBaseSize.Md}>
        ButtonBaseSize Md
      </ButtonBase>
      <ButtonBase {...args} size={ButtonBaseSize.Lg}>
        ButtonBaseSize Lg (Default)
      </ButtonBase>
    </Box>
  ),
};

export const Shape: Story = {
  render: (args) => (
    <Box
      flexDirection={BoxFlexDirection.Row}
      gap={4}
      flexWrap={BoxFlexWrap.Wrap}
    >
      <ButtonBase {...args} shape={ButtonBaseShape.Rounded}>
        Rounded
      </ButtonBase>
      <ButtonBase {...args} shape={ButtonBaseShape.Pill}>
        Pill
      </ButtonBase>
    </Box>
  ),
};

export const Spacing: Story = {
  render: (args) => (
    <Box gap={6}>
      <Box gap={2}>
        <Text variant={TextVariant.HeadingSm}>Label only</Text>
        <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
          Horizontal padding follows button size when no icons are shown.
        </Text>
        <Box
          flexDirection={BoxFlexDirection.Row}
          gap={2}
          flexWrap={BoxFlexWrap.Wrap}
        >
          <ButtonBase {...args} size={ButtonBaseSize.Sm}>
            Small
          </ButtonBase>
          <ButtonBase {...args} size={ButtonBaseSize.Md}>
            Medium
          </ButtonBase>
          <ButtonBase {...args} size={ButtonBaseSize.Lg}>
            Large
          </ButtonBase>
        </Box>
      </Box>

      <Box gap={2}>
        <Text variant={TextVariant.HeadingSm}>Start icon</Text>
        <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
          Leading inset fits the icon; 4px gap before the label. Large buttons
          use a medium icon; medium and small use a small icon.
        </Text>
        <Box
          flexDirection={BoxFlexDirection.Row}
          gap={2}
          flexWrap={BoxFlexWrap.Wrap}
        >
          <ButtonBase
            {...args}
            size={ButtonBaseSize.Sm}
            startIconName={IconName.Add}
          >
            Small
          </ButtonBase>
          <ButtonBase
            {...args}
            size={ButtonBaseSize.Md}
            startIconName={IconName.Add}
          >
            Medium
          </ButtonBase>
          <ButtonBase
            {...args}
            size={ButtonBaseSize.Lg}
            startIconName={IconName.Add}
          >
            Large
          </ButtonBase>
        </Box>
      </Box>

      <Box gap={2}>
        <Text variant={TextVariant.HeadingSm}>End icon</Text>
        <Box
          flexDirection={BoxFlexDirection.Row}
          gap={2}
          flexWrap={BoxFlexWrap.Wrap}
        >
          <ButtonBase
            {...args}
            size={ButtonBaseSize.Sm}
            endIconName={IconName.Add}
          >
            Small
          </ButtonBase>
          <ButtonBase
            {...args}
            size={ButtonBaseSize.Md}
            endIconName={IconName.Add}
          >
            Medium
          </ButtonBase>
          <ButtonBase
            {...args}
            size={ButtonBaseSize.Lg}
            endIconName={IconName.Add}
          >
            Large
          </ButtonBase>
        </Box>
      </Box>

      <Box gap={2}>
        <Text variant={TextVariant.HeadingSm}>Start and end icons</Text>
        <Box
          flexDirection={BoxFlexDirection.Row}
          gap={2}
          flexWrap={BoxFlexWrap.Wrap}
        >
          <ButtonBase
            {...args}
            size={ButtonBaseSize.Sm}
            startIconName={IconName.Add}
            endIconName={IconName.ArrowRight}
          >
            Small
          </ButtonBase>
          <ButtonBase
            {...args}
            size={ButtonBaseSize.Md}
            startIconName={IconName.Add}
            endIconName={IconName.ArrowRight}
          >
            Medium
          </ButtonBase>
          <ButtonBase
            {...args}
            size={ButtonBaseSize.Lg}
            startIconName={IconName.Add}
            endIconName={IconName.ArrowRight}
          >
            Large
          </ButtonBase>
        </Box>
      </Box>

      <Box gap={2}>
        <Text variant={TextVariant.HeadingSm}>Start and end accessories</Text>
        <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
          Custom nodes use the same padding and gap as named icons.
        </Text>
        <Box
          flexDirection={BoxFlexDirection.Row}
          gap={2}
          flexWrap={BoxFlexWrap.Wrap}
        >
          <ButtonBase
            {...args}
            size={ButtonBaseSize.Sm}
            startAccessory={
              <Text
                variant={TextVariant.BodyMd}
                fontWeight={FontWeight.Medium}
                color={TextColor.TextDefault}
              >
                →
              </Text>
            }
            endAccessory={
              <Text
                variant={TextVariant.BodyMd}
                fontWeight={FontWeight.Medium}
                color={TextColor.TextDefault}
              >
                ←
              </Text>
            }
          >
            Small
          </ButtonBase>
          <ButtonBase
            {...args}
            size={ButtonBaseSize.Md}
            startAccessory={
              <Text
                variant={TextVariant.BodyMd}
                fontWeight={FontWeight.Medium}
                color={TextColor.TextDefault}
              >
                →
              </Text>
            }
            endAccessory={
              <Text
                variant={TextVariant.BodyMd}
                fontWeight={FontWeight.Medium}
                color={TextColor.TextDefault}
              >
                ←
              </Text>
            }
          >
            Medium
          </ButtonBase>
          <ButtonBase
            {...args}
            size={ButtonBaseSize.Lg}
            startAccessory={
              <Text
                variant={TextVariant.BodyMd}
                fontWeight={FontWeight.Medium}
                color={TextColor.TextDefault}
              >
                →
              </Text>
            }
            endAccessory={
              <Text
                variant={TextVariant.BodyMd}
                fontWeight={FontWeight.Medium}
                color={TextColor.TextDefault}
              >
                ←
              </Text>
            }
          >
            Large
          </ButtonBase>
        </Box>
      </Box>
    </Box>
  ),
};

export const IsLoading: Story = {
  render: (args) => (
    <Box gap={4}>
      <ButtonBase {...args} isLoading>
        ButtonBase
      </ButtonBase>
      <ButtonBase {...args} isLoading loadingText="With Loading Text">
        ButtonBase
      </ButtonBase>
    </Box>
  ),
};

export const StartIconName: Story = {
  render: (args) => (
    <ButtonBase {...args} startIconName={IconName.Add}>
      ButtonBase
    </ButtonBase>
  ),
};

export const EndIconName: Story = {
  render: (args) => (
    <ButtonBase {...args} endIconName={IconName.Add}>
      ButtonBase
    </ButtonBase>
  ),
};

export const IsDisabled: Story = {
  render: (args) => (
    <ButtonBase {...args} isDisabled>
      ButtonBase
    </ButtonBase>
  ),
};

export const IsFullWidth: Story = {
  render: (args) => (
    <Box gap={4}>
      <ButtonBase {...args}>ButtonBase</ButtonBase>
      <ButtonBase {...args} isFullWidth>
        ButtonBase
      </ButtonBase>
    </Box>
  ),
};

export const LongText: Story = {
  render: (args) => (
    <Box padding={4}>
      <ButtonBase
        {...args}
        startIconName={IconName.Add}
        endIconName={IconName.ArrowRight}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ButtonBase>
    </Box>
  ),
};

export const FlexLayout: Story = {
  render: (args) => (
    <Box twClassName="flex-row gap-4">
      <ButtonBase {...args} twClassName="flex-1">
        Lorem ipsum
      </ButtonBase>
      <ButtonBase {...args} twClassName="flex-1">
        Lorem ipsum
      </ButtonBase>
    </Box>
  ),
};
