import type { Meta, StoryObj } from '@storybook/react-native';

import {
  BoxBackgroundColor,
  BoxFlexDirection,
  ButtonBaseSize,
} from '../../types';
import { IconName } from '../Icon';

import { ButtonBase } from './ButtonBase';
import type { ButtonBaseProps } from './ButtonBase.types';
import { Box } from '../Box';
import { Text } from '../Text';

const meta: Meta<ButtonBaseProps> = {
  title: 'Components/ButtonBase',
  component: ButtonBase,
  argTypes: {
    children: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ButtonBaseSize,
    },
    isLoading: {
      control: 'boolean',
    },
    loadingText: {
      control: 'text',
    },
    startIconName: {
      control: 'select',
      options: IconName,
    },
    endIconName: {
      control: 'select',
      options: IconName,
    },
    isDisabled: {
      control: 'boolean',
    },
    isFullWidth: {
      control: 'boolean',
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<ButtonBaseProps>;

export const Default: Story = {
  args: {
    children: 'ButtonBase',
    size: ButtonBaseSize.Lg,
    isLoading: false,
    loadingText: 'Loading',
    startIconName: IconName.Add,
    endIconName: IconName.AddSquare,
    isDisabled: false,
    isFullWidth: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <Box gap={4}>
      <ButtonBase size={ButtonBaseSize.Sm}>ButtonBaseSize Sm</ButtonBase>
      <ButtonBase size={ButtonBaseSize.Md}>ButtonBaseSize Md</ButtonBase>
      <ButtonBase size={ButtonBaseSize.Lg}>
        ButtonBaseSize Lg (Default)
      </ButtonBase>
    </Box>
  ),
};

export const IsLoading: Story = {
  render: () => (
    <Box gap={4}>
      <ButtonBase isLoading>ButtonBase</ButtonBase>
      <ButtonBase isLoading loadingText="With Loading Text">
        ButtonBase
      </ButtonBase>
    </Box>
  ),
};

export const WithStartAccessory: Story = {
  render: () => (
    <ButtonBase startIconName={IconName.Add}>ButtonBase</ButtonBase>
  ),
};

export const WithEndAccessory: Story = {
  render: () => <ButtonBase endIconName={IconName.Add}>ButtonBase</ButtonBase>,
};

export const WithStartAndEndAccessory: Story = {
  render: () => (
    <ButtonBase startIconName={IconName.Add} endIconName={IconName.AddSquare}>
      ButtonBase
    </ButtonBase>
  ),
};

export const isDisabled: Story = {
  render: () => <ButtonBase isDisabled>ButtonBase</ButtonBase>,
};

export const isFullWidth: Story = {
  render: () => (
    <Box gap={4}>
      <ButtonBase>ButtonBase</ButtonBase>
      <ButtonBase isFullWidth>ButtonBase</ButtonBase>
    </Box>
  ),
};

export const WithLongText: Story = {
  render: () => (
    <Box padding={4}>
      <ButtonBase
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
  render: () => (
    <Box flexDirection={BoxFlexDirection.Row} gap={4}>
      <ButtonBase twClassName="flex-1" isFullWidth>
        Lorem ipsum
      </ButtonBase>
      <ButtonBase twClassName="flex-1" isFullWidth>
        Lorem ipsum
      </ButtonBase>
    </Box>
  ),
};
